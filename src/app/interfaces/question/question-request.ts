import { QuestionType } from 'src/app/types/types';
import { MediaRequest } from '../media/media-request';

export interface QuestionRequest {
    id?: number;
    question: string;
    description: string;
    type: QuestionType;
    levelId: number;
    subjectId: number;
}
