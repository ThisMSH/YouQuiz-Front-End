import { AnswerValidation } from "../answer-validation/answer-validation";
import { Answer } from "./answer";

export interface AnswerDTO extends Answer {
    answerValidations: AnswerValidation[];
}
