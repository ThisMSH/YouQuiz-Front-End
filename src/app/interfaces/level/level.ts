export interface Level {
    id: number;
    title: string;
    description: string;
    'max-points': number;
    'min-points': number;
    'created-at': Date;
    'updated-at': Date;
    'question-ids'?: number[] | null;
}
