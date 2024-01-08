import { Question } from '@models';
import { Answer } from '@types';
import { connectToDB } from '@utils';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function createQuestion(request: NextApiRequest, response: NextApiResponse){
    connectToDB();
    try {
        const QuestionModel = mongoose.model('Question');//?

        const { localQuestion, localAnswers } = request.body;
        const qs = new QuestionModel({
            question: localQuestion,
            answers: localAnswers,
        });

        await Question.create(qs);
        return response.json({ message: 'Created successfully' });

    } catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });    
    }
}

//when user fill poll question
//in body request i need 1)questionId 2)answerId 3)increment = true is add or minus
export async function updateAnswer(request: NextApiRequest, response: NextApiResponse){
    connectToDB();
    try {
        const { questionId } = request.body;
        const { answerId } = request.body;
        const { increment } = request.body;
        if ((!mongoose.Types.ObjectId.isValid(questionId)) || (!mongoose.Types.ObjectId.isValid(answerId))){
            console.log("Invalid id. The question has not been updated");
            return response.status(500).json({ message: 'Internal Server Error' });  
        }

        if (increment){
            await Question.updateOne(
                { _id: questionId, 'answers.answerId': answerId },
                { $inc: { 'answers.$.amountChoices': 1 } }
              );
        } else {
            await Question.updateOne(
                { _id: questionId, 'answers.answerId': answerId },
                { $inc: { 'answers.$.amountChoices': -1 } }
              );
        }

    } catch (error) {
        return response.status(500).json({ message: error });    
    }
}

//
export async function getQuestion(request: NextApiRequest, response: NextApiResponse){
    connectToDB();
    try {
        const questionId = request.body.question;
        if ((!mongoose.Types.ObjectId.isValid(questionId))){
            return response.status(500).json({ message: 'Invalid id' });   
        }
        await Question.findById(questionId);

    } catch (error) {
        return response.status(500).json({ message: error });    
    }
}

//
export async function getQuestions(request: NextApiRequest, response: NextApiResponse){
    connectToDB();
    try {
        if (request.method === "GET"){
            await Question.find();
        }
    } catch (error) {
        return response.status(500).json({ message: error });
    }
}

//when Admin Change question
export async function updateQuestion(request: NextApiRequest, response: NextApiResponse){
    
    connectToDB();
    try {
        const localQuestion = request.body.question;
        if ((!mongoose.Types.ObjectId.isValid(localQuestion.id))){
            return response.status(500).json({ message: 'Invalid id. The question has not been updated' });    
            return;
        }

        const updateFields: { [key: string]: any } = {};

        // Check if question text needs to be updated
        if (request.body.questionT.question ) {
            updateFields['question'] = request.body.questionT.question;
        }

        // Check if answer text needs to be updated
        if (localQuestion.answers && localQuestion.answers.length > 0) {
            localQuestion.answers.forEach((answer: Answer) => {
                if (mongoose.Types.ObjectId.isValid(answer.id) && answer.text) {
                    updateFields[`answers.$[elem].text`] = answer.text;
                }
            });
        }

        await Question.updateOne(
            { _id: localQuestion.id },
            { $set: updateFields },
            //{ arrayFilters: [{ 'elem._id': { $in: localQuestion.answers.map((answer) => answer.id) } }] }??
        );

        return response.status(200).json({ message: 'Question updated successfully' });    

    } catch (error) {
        return response.status(500).json({ message: error });    
    }
}


export async function deleteQuestion(request: NextApiRequest, response: NextApiResponse){
    connectToDB();
    try {
        if (!mongoose.Types.ObjectId.isValid(request.body.questionId)){
            return response.status(400).json({ message: 'Invalid id. The question has not been deleted' });    
        }
        await Question.findByIdAndDelete(request.body.questionId);
    } catch (error) {
        return response.status(500).json({ message: error });    
    }
}