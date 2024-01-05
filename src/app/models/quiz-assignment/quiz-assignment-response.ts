import { AnswerValidationResponse } from "../answer-validation/answer-validation-response";
import { QuizRequest } from "../quiz/quiz-request";
import { StudentRequest } from "../student/student-request";
import { QuizAssignment } from "./quiz-assignment";

export interface QuizAssignmentResponse extends QuizAssignment {
    student: StudentRequest | null;
    quiz: QuizRequest | null;
    answerValidations: AnswerValidationResponse[] | null;
}
