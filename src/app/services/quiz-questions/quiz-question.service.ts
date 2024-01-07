import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizQuestionRequest } from 'src/app/models/quiz-question/quiz-question-request';
import { QuizQuestionResponse } from 'src/app/models/quiz-question/quiz-question-response';
import { Response } from 'src/app/models/response/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class QuizQuestionService {
    private http = inject(HttpClient);
    url = environment.apiUrl;

    getQuizQuestion(
        quizId: number,
        questionId: number,
    ): Observable<Response<QuizQuestionResponse>> {
        return this.http.get<Response<QuizQuestionResponse>>(
            `${this.url}/quiz-questions/${quizId}/${questionId}`,
        );
    }

    getQuizQuestionsByQuiz(
        quizId: number,
    ): Observable<Response<QuizQuestionResponse[]>> {
        return this.http.get<Response<QuizQuestionResponse[]>>(
            `${this.url}/quiz-questions/quiz/${quizId}`,
        );
    }

    getQuizQuestionsByQuestion(
        questionId: number,
    ): Observable<Response<QuizQuestionResponse[]>> {
        return this.http.get<Response<QuizQuestionResponse[]>>(
            `${this.url}/quiz-questions/question/${questionId}`,
        );
    }

    createQuizQuestion(quizQuestion: QuizQuestionRequest): Observable<Response<QuizQuestionResponse>> {
        return this.http.post<Response<QuizQuestionResponse>>(
            `${this.url}/quiz-questions/add`,
            quizQuestion,
        );
    }

    deleteQuizQuestion(quizId: number, questionId: number): Observable<Response<QuizQuestionResponse>> {
        return this.http.delete<Response<QuizQuestionResponse>>(
            `${this.url}/quiz-questions/${quizId}/${questionId}`,
        );
    }
}
