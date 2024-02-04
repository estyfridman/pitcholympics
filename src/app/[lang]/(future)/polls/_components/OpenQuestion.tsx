'use client';

import { Locale } from '@/i18n.config';
//import { Label, LabelImportant } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material'; //IconButton,Paper,Slider,Typography,
import { useState } from 'react';

type OpenQuestionType = {
    questionId: string;
    questionText: string;
    answers: string;
};

type OpenQuestionProps = {
    params: {
        lang: Locale;
        question: OpenQuestionType;
    };
};

export default function OpenQuestion({ params }: OpenQuestionProps) {
    const { lang, question } = params;
    const [localQuestion, setLocalQuestion] = useState<OpenQuestionType>(
        question || { questionId: '', questionText: '', answers: '' },
    );

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        setLocalQuestion(prevQuestion => ({
          ...prevQuestion,
          questionText: newText,
        }));
    };

    async function sendQuestion(){
        // eslint-disable-next-line no-console
        console.log(localQuestion);
    }

    return (
        <Box
            sx={{
                height: 1,
                width: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div>
                    <label >Question: </label>
            <TextField
                variant='standard'
                value={question.questionText}
                onChange={handleTextChange}
                autoComplete='off'
                sx={{ width: 60 }}
                placeholder='Question'
                InputProps={{ sx: { fontSize: 20 } }}
                inputProps={{ sx: { textAlign: 'center' } }}
            />
            <textarea value={question.answers} />
                </div>
            <Button
                variant='contained'
                onClick={sendQuestion}
                sx={{
                    width: 80,
                    height: 80,
                    fontSize: 20,
                    borderRadius: '50%',
                    transition: 'box-shadow 0.3s ease-in-out',
                }}
                style={{ textTransform: 'none' }}></Button>
        </Box>
    );
}
