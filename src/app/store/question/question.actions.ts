import { createAction, props } from '@ngrx/store';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { QuestionResponse } from 'src/app/models/question/question-response';
import { QuestionType, SortOrder } from 'src/app/types/types';

export const getAllQuestions = createAction(
    '[Question] Get All Questions',
    props<{
        params: {
            size: number;
            sortBy: string;
            sortOrder: SortOrder;
            page: number;
            question?: string;
            type?: QuestionType;
            levelId?: number;
            subjectId?: number;
        };
    }>(),
);
export const getAllQuestionsSucceed = createAction(
    '[Question] Get All Questions Successfully',
    props<ListResponse<QuestionResponse>>(),
);
export const getAllQuestionsFailed = createAction(
    '[Question] Get All Questions Failed',
    props<{ error: string }>(),
);
