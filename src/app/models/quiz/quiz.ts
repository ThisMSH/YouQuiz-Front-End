export interface Quiz {
    id?: number;
    title: string;
    duration: number;
    successScore: number;
    canSeeAnswers: boolean;
    canSeeResult: boolean;
    chances: number;
    remark: string;
    createdAt?: Date;
    updatedAt?: Date;
}
