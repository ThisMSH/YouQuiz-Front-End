import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { QuestionDTO } from 'src/app/interfaces/question/question-dto';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { QuestionService } from 'src/app/services/questions/question.service';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent {
    private questionService = inject(QuestionService);
    questions = signal<ListResponse<QuestionDTO> | null>(null);

    constructor() {
        this.questionService
            .getQuestions()
            .pipe(take(1))
            .subscribe((q) => {
                this.questions.set(q);
            });
    }
}
