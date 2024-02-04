import { updateAnswer } from '@dbActions';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (request: NextRequest) => {
    const { questionId, answerId, increment } = await request.json();
    updateAnswer(questionId, answerId, increment);
    return NextResponse.json('poll update Successfully!', { status: 200 });
};
