import { QuestionRequest } from "../question/question-request";
import { QuizRequest } from "../quiz/quiz-request";
import { QuizQuestion } from "./quiz-question";

export interface QuizQuestionResponse extends QuizQuestion {
    quiz: QuizRequest | null;
    question: QuestionRequest | null;
}
