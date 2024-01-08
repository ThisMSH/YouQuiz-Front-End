import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizAssignmentRequest } from 'src/app/models/quiz-assignment/quiz-assignment-request';
import { QuizAssignmentResponse } from 'src/app/models/quiz-assignment/quiz-assignment-response';
import { Response } from 'src/app/interfaces/response/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class QuizAssignmentService {
    private http = inject(HttpClient);
    url = environment.apiUrl;

    getQuizAssignment(
        id: number,
    ): Observable<Response<QuizAssignmentResponse>> {
        return this.http.get<Response<QuizAssignmentResponse>>(
            `${this.url}/quiz-assignments/${id}`,
        );
    }

    getQuizAssignmentWithResult(
        id: number,
    ): Observable<Response<QuizAssignmentResponse>> {
        return this.http.get<Response<QuizAssignmentResponse>>(
            `${this.url}/quiz-assignments/with-results/${id}`,
        );
    }

    getQuizAssignmentsByStudent(
        studentId: number,
    ): Observable<Response<QuizAssignmentResponse[]>> {
        return this.http.get<Response<QuizAssignmentResponse[]>>(
            `${this.url}/quiz-assignments/by-student/${studentId}`,
        );
    }

    getQuizAssignmentsByStudentWithResult(
        studentId: number,
    ): Observable<Response<QuizAssignmentResponse[]>> {
        return this.http.get<Response<QuizAssignmentResponse[]>>(
            `${this.url}/quiz-assignments/by-student-with-results/${studentId}`,
        );
    }

    createQuizAssignment(
        quizAssignment: QuizAssignmentRequest,
    ): Observable<Response<QuizAssignmentResponse>> {
        return this.http.post<Response<QuizAssignmentResponse>>(
            `${this.url}/quiz-assignments/add`,
            quizAssignment,
        );
    }

    saveSelectedAnswer(
        quizAssignmentId: number,
        answerValidationId: number,
    ): Observable<Response<QuizAssignmentResponse>> {
        return this.http.post<Response<QuizAssignmentResponse>>(
            `${this.url}/quiz-assignments/selected-answer/${quizAssignmentId}/${answerValidationId}`,
            null,
        );
    }

    closeQuizAssignment(
        quizAssignmentId: number,
    ): Observable<Response<QuizAssignmentResponse>> {
        return this.http.post<Response<QuizAssignmentResponse>>(
            `${this.url}/quiz-assignments/close-quiz-assignment/${quizAssignmentId}`,
            null,
        );
    }

    deleteQuizAssignment(
        id: number,
    ): Observable<Response<QuizAssignmentResponse>> {
        return this.http.delete<Response<QuizAssignmentResponse>>(
            `${this.url}/quiz-assignments/${id}`,
        );
    }
}
