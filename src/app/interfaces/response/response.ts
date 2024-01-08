export interface Response<T> {
    data?: T;
    cause?: object;
    errors?: Record<string, string>;
    message: string;
    status: number;
}
