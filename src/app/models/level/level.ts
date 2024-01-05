export interface Level {
    id?: number;
    title: string;
    description: string;
    maxPoints: number;
    minPoints: number;
    createdAt?: Date;
    updatedAt?: Date;
}
