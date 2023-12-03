export interface AnswerValidation {
    id: number;
    points: number;
    createdAt: Date;
    answerId?: number | null;
    questionId?: number | null;
}
