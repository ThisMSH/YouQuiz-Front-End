import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { QuestionDTO } from 'src/app/interfaces/question/question-dto';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class QuestionServiceService {
    http = inject(HttpClient);
    questions = signal<QuestionDTO[]>([]);
    url = environment.apiUrl;

    getQuestions(): Observable<QuestionDTO[]> {
        return this.http
            .get<QuestionDTO[]>(this.url)
            .pipe(tap((res) => this.questions.set(res)));
    }

    createQuestion
}
