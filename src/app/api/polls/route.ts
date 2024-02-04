//import { auth } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { createQuestion, getQuestions, deleteQuestion, deleteAllQuestion } from '@dbActions';

//אם עדיין לא עובד, אנסה לשנות
//from function to const () =>
export async function GET() {
    try {
        //const session = await auth();
        //if (!session) return Response.json({ error: 'Not authenticated' });
        const questions = await getQuestions();
        return NextResponse.json(questions, { status: 200 });
    } catch (err) {
        return NextResponse.json( err , { status: 400 });
    }
}

export async function POST(request: NextRequest){
    try{
        const { stringsArray } = await request.json();
        const res = await createQuestion(stringsArray);
            // eslint-disable-next-line no-console
            console.log(res);
    
        return NextResponse.json({ status: 200 });
    } catch(error){
        // eslint-disable-next-line no-console
        console.log(error);
        return NextResponse.json({ status: 200 });
    }

}

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();
        if(id){
            await deleteQuestion(id);
        } else {
            await deleteAllQuestion();
        }
        return NextResponse.json({ status: 200 });

    } catch (err) {
        return NextResponse.json( err , { status: 400 });
    }
}

