import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerRequest } from 'src/app/models/answer/answer-request';
import { AnswerResponse } from 'src/app/models/answer/answer-response';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { Response } from 'src/app/interfaces/response/response';
import { SortOrder } from 'src/app/types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class AnswersService {
    private http = inject(HttpClient);
    url = environment.apiUrl;

    getAnswer(id: number): Observable<Response<AnswerResponse>> {
        return this.http.get<Response<AnswerResponse>>(
            `${this.url}/answers/${id}`,
        );
    }

    getAllAnswers(
        size: number,
        sortBy: string,
        sortOrder: SortOrder,
        page: number = 0,
        answer: string = '',
    ): Observable<ListResponse<AnswerResponse>> {
        return this.http.get<ListResponse<AnswerResponse>>(
            `${this.url}/answers?page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}&text=${answer}`,
        );
    }

    createAnswer(answer: AnswerRequest): Observable<Response<AnswerResponse>> {
        return this.http.post<Response<AnswerResponse>>(
            `${this.url}/answers/add`,
            answer,
        );
    }

    updateAnswer(answer: AnswerRequest): Observable<Response<AnswerResponse>> {
        return this.http.put<Response<AnswerResponse>>(
            `${this.url}/answers/update`,
            answer,
        );
    }

    deleteAnswer(id: number): Observable<Response<AnswerResponse>> {
        return this.http.delete<Response<AnswerResponse>>(
            `${this.url}/answers/${id}`,
        );
    }
}
