import { MediaType } from "src/app/types/types";

export interface MediaFileRequest {
    title: string;
    type: MediaType;
    file: File;
    questionId: number;
}
