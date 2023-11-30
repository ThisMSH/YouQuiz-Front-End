import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/main/home/home.component';
import { QuestionsComponent } from './views/dashboard/questions/questions.component';
import { AnswersComponent } from './views/dashboard/answers/answers.component';
import { SubjectsComponent } from './views/dashboard/subjects/subjects.component';
import { LevelsComponent } from './views/dashboard/levels/levels.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { QuestionInfoComponent } from './views/dashboard/questions/question-info/question-info.component';
import { MainComponent } from './views/main/main.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                title: 'YouQuiz',
            },
        ],
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'questions',
                pathMatch: 'full',
            },
            {
                path: 'questions',
                children: [
                    {
                        path: '',
                        component: QuestionsComponent,
                        title: 'Questions Dashboard - YouQuiz',
                    },
                    {
                        path: ':id',
                        component: QuestionInfoComponent,
                    },
                ],
            },
            {
                path: 'answers',
                component: AnswersComponent,
                title: 'Answers Dashboard - YouQuiz',
            },
            {
                path: 'subjects',
                component: SubjectsComponent,
                title: 'Subjects Dashboard - YouQuiz',
            },
            {
                path: 'levels',
                component: LevelsComponent,
                title: 'Levels Dashboard - YouQuiz',
            },
        ],
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Page Not Found - YouQuiz',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
