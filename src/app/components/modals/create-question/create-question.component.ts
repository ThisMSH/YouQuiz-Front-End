import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs';
import { Question } from 'src/app/interfaces/question/question';
import { QuestionDTO } from 'src/app/interfaces/question/question-dto';
import { QuestionRequest } from 'src/app/interfaces/question/question-request';
import { Response } from 'src/app/interfaces/response/response';
import { LevelService } from 'src/app/services/levels/level.service';
import { MediaService } from 'src/app/services/media/media.service';
import { QuestionService } from 'src/app/services/questions/question.service';
import { SubjectService } from 'src/app/services/subjects/subject.service';
import { TypeOption, QuestionType, MediaType } from 'src/app/types/types';

@Component({
    selector: 'app-create-question',
    templateUrl: './create-question.component.html',
    styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
    @Output() creationCompleted = new EventEmitter<void>();
    private questionService = inject(QuestionService);
    private subjectService = inject(SubjectService);
    private levelService = inject(LevelService);
    private mediaService = inject(MediaService);
    private messageService = inject(MessageService);
    private formBuiler = inject(FormBuilder);
    subjectsLoading = signal<boolean>(true);
    levelsLoading = signal<boolean>(true);
    isLoading = signal<boolean>(false);
    question = signal<Response<Question> | undefined>(undefined);
    showModal: boolean = true;
    selectedNodes: any = '';
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
    subjectOptions: TypeOption<string>[] = [];
    levelOptions: TypeOption<string>[] = [];

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
                fileObj: [null, Validators.required],
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
                fileObj: [null, Validators.required],
            }),
        );
    }

    removeMedia(idx: number): void {
        this.getMedia.removeAt(idx);
    }

    setMedia(evt: any, i: number): void {
        const media: FormGroup = (
            this.questionForm.get('mediaList') as FormArray
        ).at(i) as FormGroup;

        if (evt.target.files.length > 0) {
            media.get('fileObj')?.setValue(evt.target.files[0]);
        } else {
            media.get('fileObj')?.setValue(null);
        }
    }

    toggleModal(): void {
        this.showModal = !this.showModal;
    }

    getAllSubjects(): void {
        this.subjectsLoading.set(true);

        this.subjectService
            .getSubjects({ size: 999 })
            .pipe(take(1))
            .subscribe({
                next: (s) => {
                    s.data.content.forEach((sbj) => {
                        this.subjectOptions.push({
                            name: sbj.title,
                            code: sbj.id.toString(),
                        });
                    });
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
                    this.subjectsLoading.set(false);
                },
            });
    }

    getAllLevels(): void {
        this.levelsLoading.set(true);

        this.levelService
            .getLevels({ size: 999 })
            .pipe(take(1))
            .subscribe({
                next: (l) => {
                    l.data.content.forEach((lvl) => {
                        this.levelOptions.push({
                            name: lvl.title,
                            code: lvl.id.toString(),
                        });
                    });
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
                    this.levelsLoading.set(false);
                },
            });
    }

    toFormData(med: FormArray, id: number): FormData[] {
        const arrFormData: FormData[] = [];

        med.controls.forEach((m) => {
            const formData: FormData = new FormData();

            formData.append(`title`, m.get('title')?.value);
            formData.append(`type`, m.get('type')?.value);
            formData.append(`file`, m.get('fileObj')?.value);
            formData.append(`questionId`, id.toString());

            arrFormData.push(formData);
        });

        return arrFormData;
    }

    createQuestion(ques: QuestionRequest, medList: FormArray): void {
        this.questionService
            .createQuestion(ques)
            .pipe(take(1))
            .subscribe({
                next: (q) => {
                    this.creationCompleted.emit();

                    this.question.set(q);

                    const formData = this.toFormData(
                        medList,
                        q?.data?.id as number,
                    );
                    this.createMedia(formData);
                },
                error: (err) => {
                    const error: string =
                        err.error.message ||
                        'An error occured while creating question.';

                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error occured',
                        detail: error,
                    });

                    console.log(err);
                },
                complete: () => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Question created!',
                        detail: this.question()?.message,
                    });
                }
            });
    }

    createMedia(med: FormData[]): void {
        med.forEach((m) => {
            this.mediaService
                .createMedia(m)
                .pipe(take(1))
                .subscribe({
                    error: (err) => {
                        const error: string =
                            err.error.message ||
                            'An error occured while creating media.';

                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error occured',
                            detail: error,
                        });

                        console.log(err);
                    },
                });
        });
    }

    submitQuestion(): void {
        if (this.questionForm.valid) {
            const { mediaList: del, ...questionObj } = this.questionForm.value;
            const { mediaList } = this.questionForm.controls;

            this.createQuestion(
                questionObj as unknown as QuestionRequest,
                mediaList as unknown as FormArray,
            );

            console.log(questionObj);
        } else {
            this.messageService.add({
                severity: 'warn',
                summary: 'Invalid submition',
                detail: 'Please fill all the required fields.',
            });
        }
    }

    ngOnInit(): void {
        this.getAllSubjects();
        this.getAllLevels();
    }
}
