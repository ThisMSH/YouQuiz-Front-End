import { AnswerRequest } from "../answer/answer-request";
import { QuestionRequest } from "../question/question-request";
import { QuizAssignmentRequest } from "../quiz-assignment/quiz-assignment-request";
import { AnswerValidation } from './answer-validation';

export interface AnswerValidationResponse extends AnswerValidation {
    answer: AnswerRequest | null;
    question: QuestionRequest | null;
    quizAssignments: QuizAssignmentRequest[] | null;
}
