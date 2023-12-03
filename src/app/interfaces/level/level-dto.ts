import { Question } from "../question/question";
import { Level } from "./level";

export interface LevelDTO extends Level {
    questions: Question[];
}
