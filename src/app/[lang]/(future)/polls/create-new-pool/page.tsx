'use client'

import { Locale } from '@/i18n.config';
import { Link, Text } from '@core';
import { MultipleChoiceQuestion } from '@types';
import { useEffect, useState } from 'react';

type Props = {
    params: {
        lang: Locale;
    };
};



const Page = ({ params }: Props) => {
    const { lang } = params;
    const [newPoll, setNewPoll] = useState<MultipleChoiceQuestion>();


    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            //await savePoll(newPoll);
            alert('Post saved successfully');
            window.location.href = "/posts";
        } catch(error) {
            console.error(error);
            alert(error);
        }
    }

    useEffect(() => {
        localStorage.setItem('newPoll', JSON.stringify(newPoll));
    });


    return (
        <div className="w-96 bg-sky-300 shadow rounded pt-6 md:p-8 text-center">
            <Text className='text-xl'>Create New Pool</Text>
            <div>
                <form className='flex flex-col items-center justify-center gap-4' onSubmit={onSubmit}> 

                <div className='m-8'>
                    <label >Question:</label>
                    <input type="text" value={newPoll?.question}></input>
                </div>
                <div className='m-120'>
                    <label >Answer A:</label>
                    <input type="text" ></input>
                </div>
                <div className='m-8'>
                    <label >Answer B:</label>
                    <input type="text" ></input>
                </div>
                <div className='m-8'>
                    <label >Answer C:</label>
                    <input type="text" ></input>
                </div>
                <div className='m-8'>
                    <label >Answer D:</label>
                    <input type="text" ></input>
                </div>
                <button type='submit'>Add poll</button>
                </form>

            </div>
            <p> </p>
            <div className="w"></div>
                <div className='h-full w-1/4  flex'>
                    <Link label='Back' url={`/${lang}/polls`} />
                </div>
        </div>
    );
};

export default Page;
