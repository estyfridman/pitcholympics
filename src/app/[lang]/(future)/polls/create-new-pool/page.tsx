'use client';

import { Locale } from '@/i18n.config';
import { Link, Text } from '@core';
import { MultipleChoiceQuestion } from '@types';
//import { Button } from '@core';
//import { useState } from 'react';
import QuestionForm from '../_components/QuestionForm';

type Props = {
    params: {
        lang: Locale;
        poll: MultipleChoiceQuestion;
    };
};

export default function Page({ params }: Props) {
    const { lang } = params;
    const newQuestion: MultipleChoiceQuestion = {
        id: 11,
        questionText: 'so fun text Question from create page',
        answersTextArray: [
            {
                id: 1,
                text: 'answer A from create new pool page',
                numberChose: 0,
            },
            { id: 2, text: 'answer B', numberChose: 0 },
            { id: 3, text: 'answer C', numberChose: 0 },
            { id: 4, text: 'answer D', numberChose: 0 },
        ],
    };

    async function HandelDelete() {
        try {
            const endpoint = '/api/polls';         
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            };
            const res = await fetch(endpoint, requestOptions);
            // eslint-disable-next-line no-console
            console.log(res);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    }

    return (
        <div>
            <Text className='text-xl'>Create New Pool</Text>
            <div>
                <QuestionForm {...newQuestion}></QuestionForm>
            </div>

            <div>
                <div>
                    <Link label='Back' url={`/${lang}/polls`} />
                    <button onClick={HandelDelete}>delete all question</button>
                </div>
            </div>
        </div>
    );
}
