export interface QuizAssignment {
    id?: number;
    reason: string;
    startingTime: Date;
    endingTime: Date;
    attempt?: number;
    score?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
