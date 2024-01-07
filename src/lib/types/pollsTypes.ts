
export type Answer = {
    id: number;
    text: string;
};

export type MultipleChoiceQuestion = {
    id: number;
    question: string;
    answers: Answer[];
};

export type ShortTextQuestion = {
    id: number;
    question: string;
};

export type LinearScale = {
    id: number;
    question: string;
};
