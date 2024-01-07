import { Schema, model, models } from 'mongoose';

const AnswerSchema = new Schema({
    answerId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    text: {
        type: {
            en: { type: String },
            he: { type: String },
        },
        required: true,
    },
    amountChoices: {
        type: Number,
        default: 0, 
    },
});


const QuestionSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    question: {
        type: {
            en: { type: String },
            he: { type: String },
        },
    },
    answers: {
        type: [AnswerSchema]
    },
});

    
export const Question = models.Question || model('Question', QuestionSchema);