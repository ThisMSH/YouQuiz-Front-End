export interface Response<T> {
    data?: T;
    cause?: any;
    message: string;
    status: number;
}
