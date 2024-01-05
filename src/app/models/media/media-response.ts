import { QuestionRequest } from "../question/question-request";
import { Media } from "./media";

export interface MediaResponse extends Media {
    question: QuestionRequest | null;
}
