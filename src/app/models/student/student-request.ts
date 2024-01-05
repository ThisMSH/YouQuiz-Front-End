import { Student } from "./student";

export interface StudentRequest extends Student {
    quizAssignmentIds?: number[] | null;
}
