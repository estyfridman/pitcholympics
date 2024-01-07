//import { auth } from '@/lib/auth';
import { Question } from '@models';
import { connectToDB } from '@utils';

export async function GET(id: object) {
    //const session = await auth();
    //if (!session) return Response.json({ error: 'Not authenticated' });
    await connectToDB();
    //const Question = await Question.findOne({ Question: Question?._id });
    return Response.json({ Question });
}
