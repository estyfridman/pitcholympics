

export type MultipleChoicesAnswer = {
    answer: {
        label: string,
        mark: boolean,
    }[],
}

export type OpenAnswer = {
    answer: string,
}

export type ScaleAnswer = {
    answerNum: number,
    maxScale: number,
    minScale: number,
    jump: number,
        
}

export type PollQuestion = {
    questionText: string,
    questionType: 'multipleChoices' | 'scaleAnswer' | 'openAnswer',
    questionAnswer: ScaleAnswer | OpenAnswer | MultipleChoicesAnswer   
}

export type PollType = {
    title: string,
    description: string,
    questions: [PollQuestion],
}
