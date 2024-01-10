export interface Response<T = null> {
    data?: T;
    cause?: object;
    errors?: Record<string, string>;
    message: string;
    status: number;
}
