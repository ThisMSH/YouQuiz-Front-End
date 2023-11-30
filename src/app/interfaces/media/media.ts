import { MediaType } from 'src/app/types/types';

export interface Media {
    id: number;
    title: string;
    url: string;
    type: MediaType;
    'created-at': Date;
    'updated-at': Date;
    questionId?: number | null;
    'question-id'?: number | null;
}
