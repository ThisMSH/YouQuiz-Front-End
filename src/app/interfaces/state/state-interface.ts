export interface StateInterface<T> {
    response: T;
    isLoading: boolean;
    error: string | null;
}
