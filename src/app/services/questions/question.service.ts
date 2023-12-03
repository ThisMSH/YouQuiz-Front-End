import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { QuestionDTO } from 'src/app/interfaces/question/question-dto';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { Response } from 'src/app/interfaces/response/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class QuestionService {
    http = inject(HttpClient);
    question = signal<QuestionDTO | undefined>(undefined);
    questions = signal<ListResponse<QuestionDTO> | undefined>(undefined);
    url = environment.apiUrl;

    getQuestions(): Observable<ListResponse<QuestionDTO>> {
        return this.http
            .get<ListResponse<QuestionDTO>>(`${this.url}/questions`)
            .pipe(
                tap((res) => {
                    if (res.status !== 200) {
                        throw new Error(`An error occured: ${res.message}`);
                    }

                    this.questions.set(res);
                }),
                catchError((err) => throwError(() => err)),
            );
    }

    getQuestion(id: number): Observable<Response<QuestionDTO>> {
        return this.http
            .get<Response<QuestionDTO>>(`${this.url}/questions/${id}`)
            .pipe(
                tap((res) => {
                    if (res.status !== 200) {
                        throw new Error(`An error occured: ${res.message}`);
                    }

                    this.question.set(res.data);
                }),
                catchError((err) => throwError(() => err)),
            );
    }

    createQuestion(question: QuestionDTO): Observable<Response<QuestionDTO>> {
        return this.http
            .post<Response<QuestionDTO>>(`${this.url}/questions/add`, question)
            .pipe(tap((res) => this.question.set(res.data)));
    }
}
