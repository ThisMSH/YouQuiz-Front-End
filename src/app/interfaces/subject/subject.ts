export interface Subject {
    id: number;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    questionIds?: number[] | null;
    parentId?: number | null;
    childrenIds?: number[] | null;
}
