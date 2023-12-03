export interface Response<T> {
    data?: T;
    cause?: object;
    message: string;
    status: number;
}
