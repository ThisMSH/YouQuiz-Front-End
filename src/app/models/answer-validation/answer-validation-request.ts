import { AnswerValidation } from "./answer-validation";

export interface AnswerValidationRequest extends AnswerValidation {
    answerId?: number | null;
    questionId?: number | null;
    quizAssignmentIds?: number[] | null;
}
