'use client';

import { width } from '@mui/system';
import { ScaleAnswer } from '@types';
import { useState } from 'react';

export default function ScaleAnswerComp(scaleAnswerObj?: ScaleAnswer) {
    const [newScaleAnswer, setNewScaleAnswer] = useState<ScaleAnswer>(
        scaleAnswerObj || { answerNum: 1, maxScale: 10, minScale: 1, jump: 1 },
    ); // הייתי רוצה NULL אבל לא מצליחה

    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // קבל את הערך החדש של ה-input
        const localanswerNum = parseInt(e.target.value);

        // עדכן את הערך של האובייקט ScaleAnswer
        setNewScaleAnswer({
            ...newScaleAnswer,
            answerNum: localanswerNum,
        });
    };

    const saveChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (scaleAnswerObj) {
            // user selects an answer
            if (
                newScaleAnswer.answerNum > scaleAnswerObj.minScale &&
                newScaleAnswer.answerNum < scaleAnswerObj.maxScale
            )
                //&& ((maxScale-minScale)/jump)
                setNewScaleAnswer({
                    ...newScaleAnswer,
                    answerNum: newScaleAnswer.answerNum,
                });
        } else {
            //cewate new object
            const newScaleAnswer: ScaleAnswer = {
                answerNum: 1,
                maxScale: 10,
                minScale: 1,
                jump: 1,
            };
            fetch('/api/poll/id', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newScaleAnswer }),
            });
        }
        fetch('/api/poll/id', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newScaleAnswer }),
        });
        // כאן תשמור את השינויים באובייקט מקומי או תעביר אותם לפונקציה מחוץ לקומפוננטה לשמירה חיצונית
        // eslint-disable-next-line no-console
        console.log('Changes saved:');
    };

    function HandelMax(e: React.ChangeEvent<HTMLInputElement>) {
        const localMax = parseInt(e.target.value);

        //If you have permissions and entered a valid number
        if (isAdmin && localMax && localMax > newScaleAnswer.answerNum) {
            setNewScaleAnswer({
                ...newScaleAnswer,
                maxScale: localMax,
            });
        } else if (isAdmin && localMax) {
            alert(
                'The maximum range you entered does not include the current value of the selected number. Please change it first',
            );
        } else if (!isAdmin) {
            alert('You will not be able to change this data');
        } else {
            alert('Please enter a valid number');
        }
    }

    function HandelMin(e: React.ChangeEvent<HTMLInputElement>) {
        const localMin = parseInt(e.target.value);

        if (isAdmin && localMin && localMin < newScaleAnswer.answerNum) {
            setNewScaleAnswer({
                ...newScaleAnswer,
                minScale: localMin,
            });
        } else if (isAdmin && localMin) {
            alert(
                'The minimum range you entered does not include the current value of the selected number. Please change it first',
            );
        } else if (!isAdmin) {
            alert('You will not be able to change this data');
        } else {
            alert('Please enter a valid number');
        }
    }

    function HandelJump(e: React.ChangeEvent<HTMLInputElement>) {
        const localJunp = parseInt(e.target.value);

        if (isAdmin && localJunp && localJunp < newScaleAnswer.maxScale / 2) {
            setNewScaleAnswer({
                ...newScaleAnswer,
                jump: localJunp,
            });
        }
    }

    const handleIsAdminChange = () => {
        setIsAdmin(!isAdmin);
    };

    return (
        <div>
            <div>
                <div>
                    <label>To Edit by Admin</label>

                    <input
                        type='checkbox'
                        checked={isAdmin}
                        onChange={handleIsAdminChange}
                    />
                </div>
                <div>
                    <label>Choose a value that you think matches : </label>
                    <input
                        type='range'
                        max={
                            scaleAnswerObj?.maxScale
                                ? scaleAnswerObj.maxScale
                                : 10
                        }
                        min={
                            scaleAnswerObj?.minScale
                                ? scaleAnswerObj.minScale
                                : 0
                        }
                        step={scaleAnswerObj?.jump ? scaleAnswerObj.jump : 1}
                        onChange={handleAnswerChange}
                    />
                </div>
                {' _ _ _ _ _ _ _ _ _'}
                <div>
                    <input
                        type='number'
                        value={
                            scaleAnswerObj?.maxScale
                                ? scaleAnswerObj.maxScale
                                : 10
                        }
                        onChange={HandelMax}
                    />
                    <label>Maxinum: </label>
                </div>
                <div>
                    <input
                        type='number'
                        value={
                            scaleAnswerObj?.minScale
                                ? scaleAnswerObj.minScale
                                : 0
                        }
                        onChange={HandelMin}
                    />
                    <label>Mininum: </label>
                </div>
                <div>
                    <input
                        type='number'
                        value={scaleAnswerObj?.jump ? scaleAnswerObj.jump : 1}
                        onChange={HandelJump}
                    />
                    <label>Step: </label>
                </div>
                <button>{isAdmin ? 'Save Changes' : 'Add Answer'}</button>
            </div>
        </div>
    );
}
