import { Subject } from "./subject";

export interface SubjectRequest extends Subject {
    questionIds?: number[] | null;
    parentId?: number | null;
    childrenIds?: number[] | null;
}
