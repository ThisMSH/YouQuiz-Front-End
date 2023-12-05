import { Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
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
export class QuestionsComponent {
    private questionService = inject(QuestionService);
    private formBuiler = inject(FormBuilder);
    questions = signal<ListResponse<QuestionDTO> | null>(null);
    showModal: boolean = false;
    questionTypeOptions: TypeOption<QuestionType>[] = [
        { name: 'Single Answer', code: 'SINGLE' },
        { name: 'Multi Answers', code: 'MULTI' },
        { name: 'Direct Answer', code: 'DIRECT' },
    ];
    mediaTypeOptions: TypeOption<MediaType>[] = [
        { name: 'Image', code: 'IMAGE' },
        { name: 'Audio', code: 'AUDIO' },
        { name: 'Video', code: 'VIDEO' },
    ];

    constructor() {
        this.questionService
            .getQuestions()
            .pipe(take(1))
            .subscribe((q) => {
                this.questions.set(q);
            });
    }

    questionForm = this.formBuiler.group({
        question: ['', [Validators.required, Validators.maxLength(255)]],
        description: ['', Validators.maxLength(1000)],
        type: ['', Validators.required],
        levelId: ['', Validators.required],
        subjectId: ['', Validators.required],
        mediaList: this.formBuiler.array([
            this.formBuiler.group({
                title: ['', [Validators.required, Validators.maxLength(255)]],
                type: ['', Validators.required],
                file: ['', Validators.required],
            }),
        ]),
    });

    questionErrors = {
        question: {
            required: 'Question is required.',
            maxlength: 'Question cannot exceed 255 characters.',
        },
        description: {
            maxlength: 'Description cannot exceed 1000 characters.',
        },
        type: {
            required: 'Question type is required.',
        },
        levelId: {
            required: 'You must assign a level to this question.',
        },
        subjectId: {
            required: 'You must assign a subject to this question.',
        },
        mediaList: {
            title: {
                required: 'Title is required.',
                maxlength: 'Title cannot exceed 255 characters.',
            },
            type: {
                required: 'Media type is required.',
            },
            file: {
                required: 'Media is required.',
            },
        },
    };

    get getMedia(): FormArray {
        return this.questionForm.get('mediaList') as FormArray;
    }

    addMedia(): void {
        this.getMedia.push(
            this.formBuiler.group({
                title: ['', [Validators.required, Validators.maxLength(255)]],
                type: ['', Validators.required],
                file: ['', Validators.required],
            }),
        );
    }

    removeMedia(idx: number): void {
        this.getMedia.removeAt(idx);
    }

    showDialog(): void {
        this.showModal = true;
    }

    submitQuestion(): void {
        if (this.questionForm.valid) {
            console.log(this.questionForm.value);
        } else {
            console.log('Form is invalid');
            console.log(this.questionForm.value);
        }
    }
}
