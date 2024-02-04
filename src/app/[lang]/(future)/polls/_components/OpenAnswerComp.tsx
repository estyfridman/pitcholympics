'use client';

import { OpenAnswer } from '@types';
import { useState } from 'react';

export default function OpenAnswerComp(OpenAnswerObj?: OpenAnswer) {
    const [editableAnswer, setEditableAnswer] = useState(
        OpenAnswerObj?.answer || '',
    );

    const isAnswerProvided = editableAnswer.length > 0;

    const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditableAnswer(e.target.value);
    };

    const saveChanges = () => {
        // כאן תשמור את השינויים באובייקט מקומי או תעביר אותם לפונקציה מחוץ לקומפוננטה לשמירה חיצונית
        // eslint-disable-next-line no-console
        console.log('Changes saved:', editableAnswer);
    };

    return (
        <div>
            <div>
                <textarea
                    value={editableAnswer}
                    onChange={handleAnswerChange}
                    placeholder={
                        isAnswerProvided
                            ? 'to change the answer'
                            : 'Type the answer or leave it empty'
                    }
                />
                <button onClick={saveChanges}>
                    {isAnswerProvided ? 'Save Changes' : 'Add Answer'}
                </button>
            </div>
        </div>
    );
}
