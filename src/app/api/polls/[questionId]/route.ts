import { Question } from '@models';
import { NextRequest } from 'next/server';

type RouteParams = {
    params: {
        questionId: string;
    };
};

export const GET = async (request: NextRequest, { params }: RouteParams) => {
    const { questionId } = params;

    const question = await Question.findById(questionId);

    return question;
};
