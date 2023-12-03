import { Question } from "../question/question";
import { Subject } from "./subject";

export interface SubjectDTO extends Subject {
    questions: Question[];
    parent: Subject;
    children: Subject[];
}
