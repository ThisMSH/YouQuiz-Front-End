export interface Subject {
    id: number;
    title: string;
    'created-at': Date;
    'updated-at': Date;
    'question-ids'?: number[] | null;
    'parent-subject-id'?: number | null;
    'children-subject-ids'?: number[] | null;
}
