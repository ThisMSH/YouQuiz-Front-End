import { QuizResponse } from "../quiz/quiz-response";
import { Trainer } from "./trainer";

export interface TrainerResponse extends Trainer {
    quizzes: QuizResponse[] | null;
}
