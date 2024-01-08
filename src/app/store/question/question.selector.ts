import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/interfaces/app-state/app-state-interface';

export const selectFeature = (state: AppStateInterface) => state.questions;

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading,
);

export const getAllQuestionsSelector = createSelector(
    selectFeature,
    (state) => state.response,
);

export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error,
);
