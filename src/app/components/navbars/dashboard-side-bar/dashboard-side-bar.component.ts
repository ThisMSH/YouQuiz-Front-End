import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard-side-bar',
    templateUrl: './dashboard-side-bar.component.html',
    styleUrls: ['./dashboard-side-bar.component.css'],
})
export class DashboardSideBarComponent {
    sideNavContents: Record<string, string>[] = [
        {
            route: '/dashboard/questions',
            icon: 'question.png',
            alt: 'Question icon',
            label: 'Questions',
        },
        {
            route: '/dashboard/answers',
            icon: 'answer.png',
            alt: 'Answer icon',
            label: 'Answers',
        },
        {
            route: '/dashboard/subjects',
            icon: 'subject.png',
            alt: 'Subject icon',
            label: 'Subjects',
        },
        {
            route: '/dashboard/levels',
            icon: 'level.png',
            alt: 'Level icon',
            label: 'Levels',
        },
    ];
}
