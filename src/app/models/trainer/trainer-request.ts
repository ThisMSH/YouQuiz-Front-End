import { Trainer } from "./trainer";

export interface TrainerRequest extends Trainer {
    quizIds?: number[] | null;
}
