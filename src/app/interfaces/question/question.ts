import { QuestionType } from 'src/app/types/types';

export interface Question {
    id: number;
    question: string;
    description: string;
    type: QuestionType;
    'answers-count': number;
    'correct-answers-count': number;
    'created-at': Date;
    'updated-at': Date;
    levelId?: number | null;
    subjectId?: number | null;
    'level-id'?: number | null;
    'subject-id'?: number | null;
    'media-ids'?: number[] | null;
    'answer-validation-ids'?: number[] | null;
}
