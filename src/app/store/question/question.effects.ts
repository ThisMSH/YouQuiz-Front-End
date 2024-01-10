import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as QuestionActions from './question.actions';
import { QuestionService } from 'src/app/services/questions/question.service';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { QuestionResponse } from 'src/app/models/question/question-response';

@Injectable()
export class QuestionEffects {
    constructor(
        private actions$: Actions,
        private questionService: QuestionService,
    ) {}

    loadAllQuestions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(QuestionActions.getAllQuestions),
            mergeMap((action) =>
                this.questionService
                    .getAllQuestions(
                        action.params.size,
                        action.params.sortBy,
                        action.params.sortOrder,
                        action.params.page,
                        action.params.question,
                        action.params.type,
                        action.params.levelId,
                        action.params.subjectId,
                    )
                    .pipe(
                        map((response: ListResponse<QuestionResponse>) =>
                            QuestionActions.getAllQuestionsSucceed(response),
                        ),
                        catchError((error) =>
                            of(
                                QuestionActions.getAllQuestionsFailed({
                                    error: error.error,
                                }),
                            ),
                        ),
                    ),
            ),
        ),
    );
}
