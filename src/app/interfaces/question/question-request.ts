import { QuestionType } from "src/app/types/types";

export interface QuestionRequest {
    id?: number,
    question: string,
    description: string,
    type: QuestionType,
    "level-id"?: number,
    "subject-id"?: number,
    levelId?: number,
    subjectId?: number,
}
