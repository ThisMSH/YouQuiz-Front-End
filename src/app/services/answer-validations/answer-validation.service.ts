import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerValidationRequest } from 'src/app/models/answer-validation/answer-validation-request';
import { AnswerValidationResponse } from 'src/app/models/answer-validation/answer-validation-response';
import { Response } from 'src/app/interfaces/response/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class AnswerValidationService {
    private http = inject(HttpClient);
    url = environment.apiUrl;

    getAnswerValidationById(
        id: number,
    ): Observable<Response<AnswerValidationResponse>> {
        return this.http.get<Response<AnswerValidationResponse>>(
            `${this.url}/answers-assignment/pk/${id}`,
        );
    }

    getAnswerValidationByFk(
        questionId: number,
        answerId: number,
    ): Observable<Response<AnswerValidationResponse>> {
        return this.http.get<Response<AnswerValidationResponse>>(
            `${this.url}/answers-assignment/fk/${questionId}/${answerId}`,
        );
    }

    getAnswerValidationsByQuestion(
        questionId: number,
    ): Observable<Response<AnswerValidationResponse[]>> {
        return this.http.get<Response<AnswerValidationResponse[]>>(
            `${this.url}/answers-assignment/by-question/${questionId}`,
        );
    }

    getAnswerValidationsByAnswer(
        answerId: number,
    ): Observable<Response<AnswerValidationResponse[]>> {
        return this.http.get<Response<AnswerValidationResponse[]>>(
            `${this.url}/answers-assignment/by-answer/${answerId}`,
        );
    }

    assignAnswer(
        answerValidation: AnswerValidationRequest,
    ): Observable<Response<AnswerValidationResponse>> {
        return this.http.post<Response<AnswerValidationResponse>>(
            `${this.url}/answers-assignment/add`,
            answerValidation,
        );
    }

    deleteById(id: number): Observable<Response<AnswerValidationResponse>> {
        return this.http.delete<Response<AnswerValidationResponse>>(
            `${this.url}/answers-assignment/pk/${id}`,
        );
    }

    deleteByFk(
        questionId: number,
        answerId: number,
    ): Observable<Response<AnswerValidationResponse>> {
        return this.http.delete<Response<AnswerValidationResponse>>(
            `${this.url}/answers-assignment/fk/${questionId}/${answerId}`,
        );
    }
}
