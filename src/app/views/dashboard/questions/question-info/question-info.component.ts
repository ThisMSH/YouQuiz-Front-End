import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { QuestionDTO } from 'src/app/interfaces/question/question-dto';
import { Response } from 'src/app/interfaces/response/response';
import { QuestionService } from 'src/app/services/questions/question.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-question-info',
    templateUrl: './question-info.component.html',
    styleUrls: ['./question-info.component.css'],
})
export class QuestionInfoComponent implements OnInit, OnDestroy {
    private questionService = inject(QuestionService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private messageService = inject(MessageService);
    private paramSub!: Subscription;
    id = signal<number>(0);
    question = signal<Response<QuestionDTO> | null>(null);
    questionLoading = signal<boolean>(true);

    getQuestion(): void {
        this.paramSub = this.route.paramMap.subscribe((param) => {
            const id = param.get('id');
            this.questionLoading.set(true);

            if (id != null) {
                this.id.set(+id);
            }

            this.questionService
                .getQuestion(this.id())
                .pipe(take(1))
                .subscribe({
                    next: (q) => {
                        this.question.set(q);
                    },
                    error: (err) => {
                        if (err.error.status === 404) {
                            this.router.navigate(['/question-not-found']);
                        } else {
                            const error: string =
                                err.error.message ||
                                'An unknown error occurred.';
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Error occured',
                                detail: error,
                            });
                        }
                    },
                    complete: () => {
                        this.questionLoading.set(false);
                    },
                });
        });
    }
    ngOnInit(): void {
        this.getQuestion();
    }

    ngOnDestroy(): void {
        this.paramSub.unsubscribe();
    }
}
