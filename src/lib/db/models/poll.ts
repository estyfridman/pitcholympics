import { Schema, model, models } from 'mongoose';
//import { MultipleChoicesAnswer, OpenAnswer, ScaleAnswer, } from '@types';

const PollSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    questions: {
        type: [
          {
            questionText: {
              type: String,
              required: true,
            },
            questionType: {
              type: String,
              enum: ['multipleChoices', 'scaleAnswer', 'openAnswer'],
              required: true,
            },
            questionAnswer: {
              type: Schema.Types.Mixed,
            },
          },
        ],
      },
    });
    
    // { _id: false });


export const Poll = models.Poll || model('Poll', PollSchema);