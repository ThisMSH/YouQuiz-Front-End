import { QuestionResponse } from "../question/question-response";
import { Level } from "./level";

export interface LevelResponse extends Level {
    questions: QuestionResponse[] | null;
}
