import {
    Component,
    OnInit,
    WritableSignal,
    inject,
    signal,
} from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Observable, of, take } from 'rxjs';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { QuestionResponse } from 'src/app/models/question/question-response';
import { QuestionService } from 'src/app/services/questions/question.service';
import { MediaType, QuestionType, TypeOption } from 'src/app/types/types';
import * as QuestionActions from 'src/app/store/question/question.actions';
import { isLoadingSelector } from 'src/app/store/question/question.selector';
import { AppStateInterface } from 'src/app/interfaces/app-state/app-state-interface';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
    private store = inject(Store<AppStateInterface>);
    private questionService = inject(QuestionService);
    private messageService = inject(MessageService);
    questions = signal<ListResponse<QuestionResponse> | null>(null);
    questionsLoading = signal<Observable<boolean>>(of(true));

    constructor() {
        this.questionsLoading.set(this.store.select(isLoadingSelector));
        this.questionsLoading().subscribe({
            next: (isLoading) => {
                console.log(isLoading);
            },
        });
    }

    getAllQuestions(): void {
        // this.questionsLoading.set(true);
        // this.questionService
        //     .getAllQuestions()
        //     .pipe(take(1))
        //     .subscribe({
        //         next: (q) => {
        //             this.questions.set(q);
        //         },
        //         error: (err) => {
        //             const error: string =
        //                 err.error.message || 'An unknown error occurred.';
        //             this.messageService.add({
        //                 severity: 'error',
        //                 summary: 'Error occured',
        //                 detail: error,
        //             });
        //         },
        //         complete: () => {
        //             this.questionsLoading.set(false);
        //         },
        //     });
    }

    range() {
        return Array(12);
    }

    ngOnInit(): void {
        this.store.dispatch(
            QuestionActions.getAllQuestions({
                params: { size: 10, sortBy: 'id', sortOrder: 'ASC', page: 0 },
            }),
        );

        this.questionService.getAllQuestions(10, 'id', 'ASC', 0).subscribe({
            next: (q) => {
                console.log(q);
            },
        });
    }
}
