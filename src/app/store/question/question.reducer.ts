import { createReducer, on } from '@ngrx/store';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { Response } from 'src/app/interfaces/response/response';
import { StateInterface } from 'src/app/interfaces/state/state-interface';
import { QuestionResponse } from 'src/app/models/question/question-response';
import * as QuestionActions from './question.actions';

export const initialState: StateInterface<
    Response<QuestionResponse>,
    ListResponse<QuestionResponse>
> = {
    responseList: null,
    mainResponse: null,
    altResponse: null,
    getLoading: false,
    isLoading: false,
    error: null,
};

export const reducers = createReducer(
    initialState,
    on(QuestionActions.getAllQuestions, (state) => ({
        ...state,
        getLoading: true,
    })),
    on(QuestionActions.getAllQuestionsSucceed, (state, action) => ({
        ...state,
        getLoading: false,
        responseList: action,
    })),
    on(QuestionActions.getAllQuestionsFailed, (state, action) => ({
        ...state,
        getLoading: false,
        error: action.error,
    })),
    on(QuestionActions.getQuestion, (state) => ({
        ...state,
        getLoading: true,
    })),
    on(QuestionActions.getQuestionSucceed, (state, action) => ({
        ...state,
        getLoading: false,
        mainResponse: action,
    })),
    on(QuestionActions.getQuestionFailed, (state, action) => ({
        ...state,
        getLoading: false,
        error: action.error,
    })),
    on(QuestionActions.createQuestion, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(QuestionActions.createQuestionSucceed, (state, action) => ({
        ...state,
        isLoading: false,
        altResponse: action,
    })),
    on(QuestionActions.createQuestionFailed, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),
    on(QuestionActions.updateQuestion, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(QuestionActions.updateQuestionSucceed, (state, action) => ({
        ...state,
        isLoading: false,
        altResponse: action,
    })),
    on(QuestionActions.updateQuestionFailed, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),
    on(QuestionActions.deleteQuestion, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(QuestionActions.deleteQuestionSucceed, (state, action) => ({
        ...state,
        isLoading: false,
        altResponse: action,
    })),
    on(QuestionActions.deleteQuestionFailed, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),
);
