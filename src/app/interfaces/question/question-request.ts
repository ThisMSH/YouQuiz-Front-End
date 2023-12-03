import { QuestionType } from "src/app/types/types";

export interface QuestionRequest {
    id?: number,
    question: string,
    description: string,
    type: QuestionType,
    levelId?: number,
    subjectId?: number,
}
