import { Question } from './question';

export interface QuestionRequest extends Question {
    levelId?: number | null;
    subjectId?: number | null;
    mediaIds?: number[] | null;
    answerValidationIds?: number[] | null;
    quizQuestionIds?: number[] | null;
}
