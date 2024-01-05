import { Answer } from "./answer";

export interface AnswerRequest extends Answer {
    answerValidationIds?: number[] | null;
}
