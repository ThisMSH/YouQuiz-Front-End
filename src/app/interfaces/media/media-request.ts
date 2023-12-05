import { MediaType } from 'src/app/types/types';

export interface MediaRequest {
    title: string;
    type: MediaType;
    file: File;
    questionId?: number;
}
