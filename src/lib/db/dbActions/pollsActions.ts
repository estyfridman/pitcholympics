import { Question } from '@models';
import { MultipleChoiceQuestion as QuestionType } from '@types';
import { connectToDB } from '@utils';
import mongoose from 'mongoose';


export async function createQuestion(questionOb: QuestionType){
    connectToDB();
    try {
        const QuestionModel = mongoose.model('Question');

        const qs = new QuestionModel({
            question: questionOb.question,
            answers: questionOb.answers,
        });

        await Question.create(qs);

    } catch (error) {
        console.log(error);
    }
};

//when user fill poll question
export async function updateAnswer(questionId: string, answerId: string){
    connectToDB();
    try {
        if ((!mongoose.Types.ObjectId.isValid(questionId)) || (!mongoose.Types.ObjectId.isValid(answerId))){
            console.log("Invalid id. The question has not been updated");
            return;
        }
        await Question.updateOne(
            { _id: questionId, 'answers.answerId': answerId },
            { $inc: { 'answers.$.amountChoices': 1 } }
          );

    } catch (error) {
        console.log(error);
    }
};

//
export async function getQuestion(questionId: mongoose.Types.ObjectId){
    connectToDB();
    try {
        if ((!mongoose.Types.ObjectId.isValid(questionId))){
            console.log("Invalid id");
            return;
        }
        await Question.findById(questionId);

    } catch (error) {
        console.log(error);
    }
};

//
export async function getQuestions(){
    connectToDB();
    try {
        await Question.find();

    } catch (error) {
        console.log(error);
    }
};

//when Admin Change question
export async function updateQuestion(questionT: QuestionType){
    connectToDB();
    try {
        if ((!mongoose.Types.ObjectId.isValid(questionT.id))){
            console.log("Invalid id. The question has not been updated");
            return;
        }

        const updateFields: { [key: string]: any } = {};

        // Check if question text needs to be updated
        if (questionT.question ) {
            updateFields['question'] = questionT.question;
        }

        // Check if answer text needs to be updated
        if (questionT.answers && questionT.answers.length > 0) {
            questionT.answers.forEach((answer) => {
                if (mongoose.Types.ObjectId.isValid(answer.id) && answer.text) {
                    updateFields[`answers.$[elem].text`] = answer.text;
                }
            });
        }

        await Question.updateOne(
            { _id: questionT.id },
            { $set: updateFields },
            { arrayFilters: [{ 'elem._id': { $in: questionT.answers.map((answer) => answer.id) } }] }
        );

        console.log("Question updated successfully");

    } catch (error) {
        console.log(error);
    }
};


export async function deleteQuestion(questionId: string){
    connectToDB();
    try {
        if (!mongoose.Types.ObjectId.isValid(questionId)){
            console.log("Invalid id. The question has not been deleted");
            return;
        }
        await Question.findByIdAndDelete(questionId);
    } catch (error) {
        console.log(error);
    }
};