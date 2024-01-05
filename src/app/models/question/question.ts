import { QuestionType } from 'src/app/types/types';

export interface Question {
    id?: number;
    question: string;
    description: string;
    type: QuestionType;
    answersCount?: number;
    correctAnswersCount?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
