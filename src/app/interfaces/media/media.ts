import { MediaType } from 'src/app/types/types';

export interface Media {
    id: number;
    title: string;
    url: string;
    type: MediaType;
    createdAt: Date;
    updatedAt: Date;
    questionId?: number | null;
}
