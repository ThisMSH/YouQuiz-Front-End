import { Component, OnInit, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs';
import { QuestionDTO } from 'src/app/interfaces/question/question-dto';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { QuestionService } from 'src/app/services/questions/question.service';
import { MediaType, QuestionType, TypeOption } from 'src/app/types/types';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
    private questionService = inject(QuestionService);
    private messageService = inject(MessageService);
    questions = signal<ListResponse<QuestionDTO> | null>(null);
    questionsLoading = signal<boolean>(true);

    getAllQuestions(): void {
        this.questionsLoading.set(true);

        this.questionService
            .getQuestions()
            .pipe(take(1))
            .subscribe({
                next: (q) => {
                    this.questions.set(q);
                },
                error: (err) => {
                    const error: string =
                        err.error.message || 'An unknown error occurred.';

                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error occured',
                        detail: error,
                    });
                },
                complete: () => {
                    this.questionsLoading.set(false);
                },
            });
    }

    range() {
        return Array(12);
    }

    ngOnInit(): void {
        this.getAllQuestions();
    }
}
