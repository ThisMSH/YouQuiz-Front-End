import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionRequest } from 'src/app/models/question/question-request';
import { QuestionResponse } from 'src/app/models/question/question-response';
import { ListResponse } from 'src/app/models/response/list-response';
import { Response } from 'src/app/models/response/response';
import { QuestionType, SortOrder } from 'src/app/types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class QuestionService {
    private http = inject(HttpClient);
    url = environment.apiUrl;

    getQuestion(id: number): Observable<Response<QuestionResponse>> {
        return this.http.get<Response<QuestionResponse>>(
            `${this.url}/questions/${id}`,
        );
    }

    getQuestions(
        size: number,
        sortBy: string,
        sortOrder: SortOrder,
        page: number = 0,
        question: string = '',
        type: QuestionType | '' = '',
        levelId: number = 0,
        subjectId: number = 0,
    ): Observable<ListResponse<QuestionResponse>> {
        return this.http.get<ListResponse<QuestionResponse>>(
            `${this.url}/questions?page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}&question=${question}&type=${type}&level=${levelId}&subject=${subjectId}`,
        );
    }

    createQuestion(
        question: QuestionRequest,
    ): Observable<Response<QuestionResponse>> {
        return this.http.post<Response<QuestionResponse>>(
            `${this.url}/questions/add`,
            question,
        );
    }

    updateQuestion(
        question: QuestionRequest,
    ): Observable<Response<QuestionResponse>> {
        return this.http.put<Response<QuestionResponse>>(
            `${this.url}/questions/update`,
            question,
        );
    }

    deleteQuestion(id: number): Observable<Response<QuestionResponse>> {
        return this.http.delete<Response<QuestionResponse>>(
            `${this.url}/questions/${id}`,
        );
    }
}
