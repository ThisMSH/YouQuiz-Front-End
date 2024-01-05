export interface QuizRequest {
    trainerId?: number | null;
    quizAssignmentIds?: number[] | null;
    quizQuestionIds?: number[] | null;
}
