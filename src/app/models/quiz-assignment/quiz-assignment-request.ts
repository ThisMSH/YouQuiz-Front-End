import { QuizAssignment } from "./quiz-assignment";

export interface QuizAssignmentRequest extends QuizAssignment {
    studentId?: number | null;
    quizId?: number | null;
    answerValidationIds?: number[] | null;
}
