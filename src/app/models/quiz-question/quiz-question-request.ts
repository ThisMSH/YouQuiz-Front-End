import { QuizQuestion } from "./quiz-question";

export interface QuizQuestionRequest extends QuizQuestion {
    quizId: number | null;
    questionId: number | null;
}
