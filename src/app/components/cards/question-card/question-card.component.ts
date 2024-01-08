import { Component, Input, OnInit, signal } from '@angular/core';
import { LevelRequest } from 'src/app/models/level/level-request';
import { Media } from 'src/app/models/media/media';
import { MediaResponse } from 'src/app/models/media/media-response';
import { QuestionResponse } from 'src/app/models/question/question-response';
import { SubjectRequest } from 'src/app/models/subject/subject-request';
import { QuestionType } from 'src/app/types/types';
import { environment } from 'src/environments/environment.development';

@Component({
    selector: 'app-question-card',
    templateUrl: './question-card.component.html',
    styleUrls: ['./question-card.component.css'],
})
export class QuestionCardComponent implements OnInit {
    @Input() questionObj!: QuestionResponse;

    id = signal<string>('');
    question = signal<string>('');
    type = signal<QuestionType | ''>('');
    images = signal<MediaResponse[]>([]);
    subject = signal<string>('');
    level = signal<string>('');
    imageUrl = signal<string>('assets/images/other/question-quiz.jpg');
    imageAlt = signal<string>('Default question image');

    ngOnInit(): void {
        this.id.set(`${this.questionObj.id}`);
        this.question.set("Question then: " + this.questionObj.question);
        this.type.set(this.questionObj.type);
        this.images.set(this.questionObj.medias as MediaResponse[]);
        this.subject.set((this.questionObj.subject as SubjectRequest).title);
        this.level.set((this.questionObj.level as LevelRequest).title);

        for (const img of this.images()) {
            if (img.type === 'IMAGE') {
                this.imageUrl.set(`${environment.apiUrl}/medias/get/${img.url}`);
                this.imageAlt.set(img.title);
                break;
            }
        }
    }
}
