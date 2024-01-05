import { QuestionResponse } from "../question/question-response";
import { Subject } from "./subject";
import { SubjectRequest } from "./subject-request";

export interface SubjectResponse extends Subject {
    questions: QuestionResponse[] | null;
    parent: SubjectRequest | null;
    children: SubjectResponse[] | null;
}
