import { PollType } from '@types';




export default function QuestionCard(prop: PollType) {
    const { title, description, questions } = prop;

    const displayAnswer = questions.map((q) => (
        <div key={q.questionText}>
            <p>{q.questionText}</p>
        </div>
    ));

    return (
        <div>
            <h4>{title}</h4>
            {displayAnswer}
            <p>{description} to change </p>
        </div>
    );
}