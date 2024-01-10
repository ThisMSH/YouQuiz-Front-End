import { createAction, props } from '@ngrx/store';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { Response } from 'src/app/interfaces/response/response';
import { QuestionRequest } from 'src/app/models/question/question-request';
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

export const getQuestion = createAction(
    '[Question] Get Question',
    props<{ id: number }>(),
);

export const getQuestionSucceed = createAction(
    '[Question] Get Question Successfully',
    props<Response<QuestionResponse>>(),
);

export const getQuestionFailed = createAction(
    '[Question] Get Question Failed',
    props<{ error: string }>(),
);

export const createQuestion = createAction(
    '[Question] Create Question',
    props<{ question: QuestionRequest }>(),
);

export const createQuestionSucceed = createAction(
    '[Question] Create Question Successfully',
    props<Response<QuestionResponse>>(),
);

export const createQuestionFailed = createAction(
    '[Question] Create Question Failed',
    props<{ error: string }>(),
);

export const updateQuestion = createAction(
    '[Question] Update Question',
    props<{ question: QuestionRequest }>(),
);

export const updateQuestionSucceed = createAction(
    '[Question] Update Question Successfully',
    props<Response<QuestionResponse>>(),
);

export const updateQuestionFailed = createAction(
    '[Question] Update Question Failed',
    props<{ error: string }>(),
);

export const deleteQuestion = createAction(
    '[Question] Delete Question',
    props<{ id: number }>(),
);

export const deleteQuestionSucceed = createAction(
    '[Question] Delete Question Successfully',
);

export const deleteQuestionFailed = createAction(
    '[Question] Delete Question Failed',
    props<{ error: string }>(),
);
