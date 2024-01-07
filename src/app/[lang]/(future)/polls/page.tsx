import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    params: {
        lang: Locale;
    };
};

type Answer = {
    id: number;
    text: string;
    severalchoices: number;
};

type Poll = {
    id: number;
    question: string;
    answers: Answer[];
    numberofanswers: number;
};

const mockPoll: Poll = {
    id: 1,
    question: 'Which game contributed a lot to you?',
    answers: [
        {
            id: 11,
            text: 'Memo blocks',
            severalchoices: 0,
        },
        {
            id: 12,
            text: 'Pitch Catch',
            severalchoices: 0,
        },
        {
            id: 13,
            text: 'Memo the Melo',
            severalchoices: 0,
        },
        {
            id: 14,
            text: 'None of them',
            severalchoices: 0,
        },
    ],
    numberofanswers: 0,
};

const Page = ({ params }: Props) => {
    const { lang } = params;

    return (
        <>
            <div className=''>
                <h1 className=''>Polls Page</h1>
                <div>            
                <Link
                    url={`/${lang}/polls/create-new-pool/`}
                    label='Create a new pool'
                />
                </div>

                <div className=''>
                    <div>
                        <h4 className=''>{mockPoll.question}</h4>
                        <p className=''> Number of Answers:{' '}{mockPoll.numberofanswers}</p>
                    </div>
                    <Link
                        url={`/${lang}/polls/poll-results/`}
                        label='poll results'
                    /> {' '}
                    <Link
                        url={`/${lang}/polls/filling-out/`}
                        label='filling out'
                    />
                </div>
            </div>
        </>
    );
};

export default Page;
