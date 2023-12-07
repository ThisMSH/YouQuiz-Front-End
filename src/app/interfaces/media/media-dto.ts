import { QuestionDTO } from "../question/question-dto";
import { Media } from "./media";

export interface MediaDTO extends Media {
    question: QuestionDTO
}
