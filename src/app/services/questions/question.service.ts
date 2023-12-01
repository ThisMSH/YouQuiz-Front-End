import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { QuestionDTO } from 'src/app/interfaces/question/question-dto';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { Response } from 'src/app/interfaces/response/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
    http = inject(HttpClient);
    question = signal<Response<QuestionDTO> | null>(null);
    questions = signal<ListResponse<QuestionDTO> | null>(null);
    url = environment.apiUrl;

    getQuestions(): Observable<ListResponse<QuestionDTO>> {
        return this.http
            .get<ListResponse<QuestionDTO>>(`${this.url}/questions`)
            .pipe(tap((res) => this.questions.set(res)));
    }

    getQuestion(id: number): Observable<Response<QuestionDTO>> {
        return this.http
            .get<Response<QuestionDTO>>(`${this.url}/questions/${id}`)
            .pipe(tap((res) => this.question.set(res)));
    }

    createQuestion(question: QuestionDTO): Observable<Response<QuestionDTO>> {
        return this.http
            .post<Response<QuestionDTO>>(`${this.url}/questions/add`, question)
            .pipe(tap((res) => this.question.set(res)));
    }
}
