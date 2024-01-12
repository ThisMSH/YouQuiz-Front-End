import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlValueAccessorDirective } from './directives/control-value-accessor/control-value-accessor.directive';
import { HomeComponent } from './views/main/home/home.component';
import { QuestionsComponent } from './views/dashboard/questions/questions.component';
import { SubjectsComponent } from './views/dashboard/subjects/subjects.component';
import { LevelsComponent } from './views/dashboard/levels/levels.component';
import { AnswersComponent } from './views/dashboard/answers/answers.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MainComponent } from './views/main/main.component';
import { DefaultInputComponent } from './components/elements/default-input/default-input.component';
import { SideBarButtonComponent } from './components/elements/side-bar-button/side-bar-button.component';
import { DefaultButtonComponent } from './components/elements/default-button/default-button.component';
import { MainHeaderComponent } from './components/navbars/main-header/main-header.component';
import { MainFooterComponent } from './components/navbars/main-footer/main-footer.component';
import { DashboardSideBarComponent } from './components/navbars/dashboard-side-bar/dashboard-side-bar.component';
import { DashboardHeaderComponent } from './components/navbars/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './components/navbars/dashboard-footer/dashboard-footer.component';
import { QuestionInfoComponent } from './views/dashboard/questions/question-info/question-info.component';
import { QuestionCardComponent } from './components/cards/question-card/question-card.component';
import { DarkModeComponent } from './components/others/dark-mode/dark-mode.component';
import { TwoWayInputModuleComponent } from './components/elements/two-way-input-module/two-way-input-module.component';
import { HeadContainerComponent } from './components/containers/head-container/head-container.component';
import { BodyContainerComponent } from './components/containers/body-container/body-container.component';
import { InfoPageContainerComponent } from './components/containers/info-page-container/info-page-container.component';
import { VideoContainerComponent } from './components/containers/video-container/video-container.component';
import { AudioContainerComponent } from './components/containers/audio-container/audio-container.component';
import { ImageContainerComponent } from './components/containers/image-container/image-container.component';
import { TextAreaInputComponent } from './components/elements/text-area-input/text-area-input.component';
import { SelectInputComponent } from './components/elements/select-input/select-input.component';
import { CreateQuestionComponent } from './components/modals/create-question/create-question.component';
import { UpdateQuestionComponent } from './components/modals/update-question/update-question.component';
import { DeleteQuestionComponent } from './components/modals/delete-question/delete-question.component';
import { QuestionCardSkeletonComponent } from './components/skeletons/question-card-skeleton/question-card-skeleton.component';
import { ModalTemplateComponent } from './components/modals/modal-template/modal-template.component';
import { FileInputComponent } from './components/elements/file-input/file-input.component';
import {
    MAT_FORM_FIELD_DEFAULT_OPTIONS,
    MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CalendarModule } from 'primeng/calendar';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { QuestionModule } from './modules/question/question.module';
import { BreadcrumbComponent } from './components/others/breadcrumb/breadcrumb.component';
import { GeneralContainerComponent } from './components/containers/general-container/general-container.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DashboardFiltersComponent } from './components/navbars/dashboard-filters/dashboard-filters.component';
import { TwoWaySelectInputComponent } from './components/elements/two-way-select-input/two-way-select-input.component';
import { PrestigeButtonComponent } from './components/elements/prestige-button/prestige-button.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        QuestionsComponent,
        SubjectsComponent,
        LevelsComponent,
        AnswersComponent,
        PageNotFoundComponent,
        DashboardComponent,
        MainComponent,
        DefaultInputComponent,
        SideBarButtonComponent,
        DefaultButtonComponent,
        MainHeaderComponent,
        MainFooterComponent,
        DashboardSideBarComponent,
        DashboardHeaderComponent,
        DashboardFooterComponent,
        QuestionInfoComponent,
        QuestionCardComponent,
        DarkModeComponent,
        ControlValueAccessorDirective,
        TwoWayInputModuleComponent,
        HeadContainerComponent,
        BodyContainerComponent,
        InfoPageContainerComponent,
        VideoContainerComponent,
        AudioContainerComponent,
        ImageContainerComponent,
        TextAreaInputComponent,
        SelectInputComponent,
        CreateQuestionComponent,
        UpdateQuestionComponent,
        DeleteQuestionComponent,
        QuestionCardSkeletonComponent,
        ModalTemplateComponent,
        FileInputComponent,
        BreadcrumbComponent,
        GeneralContainerComponent,
        DashboardFiltersComponent,
        TwoWaySelectInputComponent,
        PrestigeButtonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        InputTextModule,
        ButtonModule,
        RippleModule,
        BadgeModule,
        TagModule,
        ToastModule,
        DialogModule,
        InputTextareaModule,
        DropdownModule,
        SkeletonModule,
        ProgressSpinnerModule,
        CalendarModule,
        BreadcrumbModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([]),
        QuestionModule,
    ],
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: 'outline' },
        },
        MessageService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
