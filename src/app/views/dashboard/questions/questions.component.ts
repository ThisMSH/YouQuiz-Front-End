import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { QuestionService } from 'src/app/services/questions/question.service';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent {
    questionService = inject(QuestionService);

    constructor() {
        this.questionService.getQuestions().pipe(take(1)).subscribe(q => {console.log(q);
        });
    }

    brrr() {
        console.log("GRRRRRRRRRRRRRRR");

    }
}
