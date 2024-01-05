import { Level } from "./level";

export interface LevelRequest extends Level {
    questionIds?: number[] | null;
}
