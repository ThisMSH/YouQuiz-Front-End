import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/question/question.reducer';
import { EffectsModule } from '@ngrx/effects';
import { QuestionEffects } from 'src/app/store/question/question.effects';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('questions', reducers),
        EffectsModule.forFeature([QuestionEffects]),
    ],
})
export class QuestionModule {}
