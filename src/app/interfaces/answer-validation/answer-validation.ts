export interface AnswerValidation {
    id: number;
    points: number;
    'created-at': Date;
    'answer-id'?: number | null;
    'question-id'?: number | null;
}
