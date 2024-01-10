import { Response } from "../response/response";

export interface StateInterface<T, L> {
    responseList: L | null;
    mainResponse: T | null;
    altResponse: T | null;
    getLoading: boolean;
    isLoading: boolean;
    error: Response | null;
}
