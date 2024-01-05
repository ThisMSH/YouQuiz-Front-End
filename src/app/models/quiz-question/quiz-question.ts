export interface QuizQuestion {
    id?: { quizId: number; questionId: number };
    timer: number;
    allowPartialPoints: boolean;

    createdAt?: Date;
}
