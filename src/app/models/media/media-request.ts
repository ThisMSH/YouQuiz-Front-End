import { Media } from "./media";

export interface MediaRequest extends Media {
    questionId?: number | null;
}
