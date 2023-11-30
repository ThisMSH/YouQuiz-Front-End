export interface Answer {
    id: number;
    answer: string;
    'created-at': Date;
    'updated-at': Date;
    'answer-validation-ids'?: number[] | null;
}
