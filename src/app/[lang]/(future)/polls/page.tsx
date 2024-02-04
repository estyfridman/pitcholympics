import { Locale } from '@/i18n.config';
import { Link } from '@core';
import { Poll } from '@models';
import { PollType } from '@types';
import { getPolls } from '@dbActions';
import QuestionCard from './_components/QuestionCard';
import ScaleAnswerComp from './_components/ScaleAnswerComp';

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
            id: 1,
            text: 'Memo blocks',
            severalchoices: 0,
        },
        {
            id: 2,
            text: 'Pitch Catch',
            severalchoices: 0,
        },
        {
            id: 3,
            text: 'Memo the Melo',
            severalchoices: 0,
        },
        {
            id: 4,
            text: 'None of them',
            severalchoices: 0,
        },
    ],
    numberofanswers: 0,
};

export default async function PollsPage({ params }: Props) {
    const { lang } = params;
    const localQuestions: PollType[] = await getPolls();

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
                <div>
                    <ScaleAnswerComp answerNum={0} maxScale={0} minScale={0} jump={0}/>
                </div>
                <div className=''>
                    <div>
                        <h4 className=''>{mockPoll.question}</h4>
                        <p className=''>
                            {' '}
                            Number of Answers: {mockPoll.numberofanswers}
                        </p>
                    </div>
                    <div></div>
                    <div>
                        {localQuestions.map(question => (
                            <QuestionCard
                                key={question.title.slice(0, 10)}
                                {...question}
                            />
                        ))}
                    </div>
                    <Link
                        url={`/${lang}/polls/poll-results/`}
                        label='poll results'
                    />{' '}
                    <Link
                        url={`/${lang}/polls/filling-out/`}
                        label='filling out'
                    />
                </div>
            </div>
        </>
    );
}
