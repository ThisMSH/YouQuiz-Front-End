export interface Answer {
    id: number;
    answer: string;
    createdAt: Date;
    updatedAt: Date;
    answerValidationIds?: number[] | null;
}
