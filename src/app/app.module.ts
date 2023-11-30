import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/main/home/home.component';
import { QuestionsComponent } from './views/dashboard/questions/questions.component';
import { SubjectsComponent } from './views/dashboard/subjects/subjects.component';
import { LevelsComponent } from './views/dashboard/levels/levels.component';
import { AnswersComponent } from './views/dashboard/answers/answers.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MainComponent } from './views/main/main.component';
import { DefaultInputComponent } from './components/utilities/elements/default-input/default-input.component';
import { SideBarButtonComponent } from './components/utilities/elements/side-bar-button/side-bar-button.component';
import { DefaultButtonComponent } from './components/utilities/elements/default-button/default-button.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { DashboardSideBarComponent } from './components/dashboard-side-bar/dashboard-side-bar.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { QuestionInfoComponent } from './views/dashboard/questions/question-info/question-info.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import {
    MAT_FORM_FIELD_DEFAULT_OPTIONS,
    MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ControlValueAccessorDirective } from './directives/control-value-accessor/control-value-accessor.directive';
import { InputTextModule } from 'primeng/inputtext';
import { TwoWayInputModuleComponent } from './components/utilities/elements/two-way-input-module/two-way-input-module.component';

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
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        InputTextModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { appearance: 'outline' },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
