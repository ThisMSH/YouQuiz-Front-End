import { createReducer, on } from '@ngrx/store';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { Response } from 'src/app/interfaces/response/response';
import { StateInterface } from 'src/app/interfaces/state/state-interface';
import { QuestionResponse } from 'src/app/models/question/question-response';
import * as QuestionActions from './question.actions';

export const initialState: StateInterface<
    Response<QuestionResponse> | ListResponse<QuestionResponse> | null
> = {
    response: null,
    isLoading: false,
    error: null,
};

export const reducers = createReducer(
    initialState,
    on(QuestionActions.getAllQuestions, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(QuestionActions.getAllQuestionsSucceed, (state, action) => ({
        ...state,
        isLoading: false,
        response: action.data as unknown as ListResponse<QuestionResponse>,
    })),
    on(QuestionActions.getAllQuestionsFailed, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),
);
