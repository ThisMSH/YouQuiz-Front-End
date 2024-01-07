import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizRequest } from 'src/app/models/quiz/quiz-request';
import { QuizResponse } from 'src/app/models/quiz/quiz-response';
import { ListResponse } from 'src/app/models/response/list-response';
import { Response } from 'src/app/models/response/response';
import { SortOrder } from 'src/app/types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class QuizService {
    private http = inject(HttpClient);
    url = environment.apiUrl;

    getQuiz(id: number): Observable<Response<QuizResponse>> {
        return this.http.get<Response<QuizResponse>>(
            `${this.url}/quizzes/${id}`,
        );
    }

    getAllQuizzes(
        size: number,
        sortBy: string,
        sortOrder: SortOrder,
        page: number = 0,
        title: string = '',
    ): Observable<ListResponse<QuizResponse>> {
        return this.http.get<ListResponse<QuizResponse>>(
            `${this.url}/quizzes?title=${title}&page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
        );
    }

    createQuiz(quiz: QuizRequest): Observable<Response<QuizResponse>> {
        return this.http.post<Response<QuizResponse>>(
            `${this.url}/quizzes/add`,
            quiz,
        );
    }

    updateQuiz(quiz: QuizRequest): Observable<Response<QuizResponse>> {
        return this.http.put<Response<QuizResponse>>(
            `${this.url}/quizzes/update`,
            quiz,
        );
    }

    deleteQuiz(id: number): Observable<Response<QuizResponse>> {
        return this.http.delete<Response<QuizResponse>>(
            `${this.url}/quizzes/${id}`,
        );
    }
}
