// 'use client';

// import { Button } from '@core';
// import { useState } from 'react';
// import { Answer, MultipleChoiceQuestion } from '@types';

// export default function QuestionForm(MCQuestion?: MultipleChoiceQuestion) {
//     const [questionText, setquestionText] = useState<string>(
//         MCQuestion?.questionText || '',
//     );
//     const [answers, setAnswers] = useState<Answer[]>(
//         MCQuestion?.answersTextArray || [
//             { id: 1, text: '', numberChose: 0 },
//             { id: 2, text: '', numberChose: 0 },
//             { id: 3, text: '', numberChose: 0 },
//             { id: 4, text: '', numberChose: 0 },
//         ],
//     );

//     const handleAnswerChange = (index: number, value: string) => {
//         const newAnswers = [...answers];
//         newAnswers[index].text = value;
//         setAnswers(newAnswers);
//     };

//     //A loop that will run on all existing answers or on an array that includes one empty string,
//     //to insert or edit an answer
//     const answerInputs = answers.map((answer, index) => (
//         <div key={answer.id}>
//             <label>Answer:</label>
//             <input
//                 type='text'
//                 value={answer.text}
//                 onChange={e => handleAnswerChange(index, e.target.value)}
//             />
//         </div>
//     ));

//     //להוסיף תשובות לשאלה קיימת
//     // function addAnswer() {

//     //     return (
//     //         <>
//     //         <label>Answer:</label>
//     //         <input
//     //             key={answers.length+2}
//     //             type='text'
//     //             value={answers.text}
//     //             onChange={e => handleAnswerChange(answers.length+2, e.target.value)}
//     //         />
//     //         </>
//     //     );
//     // } <Button label='+ Add answer' onClick={addAnswer} size='medium'></Button>

//     async function onSubmit() {
       
//         try {
//             const endpoint = '/api/polls';         
//             const requestOptions = {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ questionText, answers }),
//             };

//             const res = await fetch(endpoint, requestOptions);
//             // eslint-disable-next-line no-console
//             console.log(res);
//             //window.location.href = '/polls';
//         } catch (error) {
//             alert(error);
//         }
//     }

//     return (
//         <form onSubmit={onSubmit}>
//             <div>
//                 <label>Question:</label>
//                 <input
//                     type='text'
//                     value={questionText}
//                     onChange={e => setquestionText(e.target.value)}></input>
//             </div>

//             <div>
//                 <p>Answers:</p>
//                 {answerInputs}
//             </div>
//             <Button
//                 onClick={onSubmit}
//                 label='Create poll'
//                 status='clicked'
//             />
//         </form>
//     );
// }
