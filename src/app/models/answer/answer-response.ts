import { AnswerValidationResponse } from "../answer-validation/answer-validation-response";
import { Answer } from "./answer";

export interface AnswerResponse extends Answer {
    answerValidations: AnswerValidationResponse[] | null;
}
