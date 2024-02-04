'use client';
import { Locale } from '@/i18n.config';
import { Link } from '@core';
import QuestionForm from '../_components/QuestionForm';
import { useState } from 'react';
import { MultipleChoiceQuestion as questionType } from '@types';
//import { Answer as answerType } from '@types';


type Props = {
    params: {
        lang: Locale;
        questionId: string;
    };
};


const Page = ({ params }: Props) => {
    const { lang } = params;
    const { questionId } = params;
    const [localQuestion, setLocalQuestion] = useState<questionType>();

    async function what(){
        const localUrl = `api/polls/fill${questionId}`;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const ifQuestion = await fetch(localUrl, requestOptions);
        if(ifQuestion) {
            setLocalQuestion;
        }
    }


    return (
        <div>
            <h1>Filling Page</h1>
            <div>

            <QuestionForm qText={localQuestion?.questionText} qAnswer={localQuestion?.answersTextArray.map(answer => answer.text)}/>

            <div className='h-full w-1/4  flex'>
                    <Link label='Back' url={`/${lang}/polls`} />
                </div>
            </div>
            <p> </p>
        </div>
    );
};

export default Page;
