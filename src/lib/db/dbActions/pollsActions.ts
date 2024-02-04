import { Poll } from '@models';
import { PollType } from '@types';
import mongoose from 'mongoose';
import { connectToDB } from '@utils';

export async function createQuestion(newPoll: PollType) {
    connectToDB();

    try {
        
        const qs = new Poll({
            title: newPoll.title,
            description: newPoll.description,
            questions: newPoll.questions,
        }) as PollType;

        const response = await Poll.create(qs);
        // eslint-disable-next-line no-console
        console.log(response);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

//when user fill poll question
//in body request i need 1)questionId 2)answerId 3)increment = true is add or minus
export async function updateAnswer(questionId: string, answerId: string, increment: boolean = true) {
    connectToDB();
    try {
        if ((!mongoose.Types.ObjectId.isValid(questionId)) || (!mongoose.Types.ObjectId.isValid(answerId))) {
            // eslint-disable-next-line no-console
            console.log('Invalid id. The question has not been updated');
        }

        if (increment) {
            await Poll.updateOne(
                { _id: questionId, 'answers.answerId': answerId },
                { $inc: { 'answers.$.amountChoices': 1 } }
            );
        } else {
            await Poll.updateOne(
                { _id: questionId, 'answers.answerId': answerId },
                { $inc: { 'answers.$.amountChoices': -1 } }
            );
        }

    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

//
export async function getPoll(id: string) {
    connectToDB();
    try {
        const localPoll = await Poll.findById(id);
        return localPoll;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}

//
export async function getPolls(): Promise<PollType[]>  {
    connectToDB();
    try {
        const localPolls = (await Poll.find()) as PollType[];
        return localPolls;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        const emptyPollsArray: PollType[] = [];
        return emptyPollsArray;
    }
}

//when Admin Change question
export async function fillPoll(fillPoll: PollType) {

    connectToDB();
    try {

        const response = await Poll.updateOne(
            { title: fillPoll.title },
            { $set: fillPoll },
        );

        return response;

    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
}


export async function deleteQuestion(questionId: string) {
    connectToDB();
    try {
        if (!mongoose.Types.ObjectId.isValid(questionId)) {
            alert("Invalid id. The question has not been deleted");
            return;
        }
        await Poll.findByIdAndDelete(questionId);
    } catch (error) {
        alert("your question hasn't deleted");
        return;
    }
}

export async function deleteAllQuestion() {
    connectToDB();
    try {
        await Poll.deleteMany();
    } catch (error) {
        alert("your question hasn't deleted");
        return;
    }
}