import { Component, OnInit, inject } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: ['./dashboard-header.component.css'],
})
export class DashboardHeaderComponent implements OnInit {
    private router = inject(Router);
    label!: string;
    urlArr!: string[];
    items: MenuItem[] = [{ label: 'Dashboard', styleClass: 'text-zinc-500' }];
    home: MenuItem = {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
        styleClass: 'text-zinc-500 hover:text-indigo-400 hover:dark:text-indigo-500 child:flex child:gap-1',
    };
    itemsLabels: Record<string, string> = {
        questions: 'Questions',
        answers: 'Answers',
        subjects: 'Subjects',
        levels: 'Levels',
    };

    initItems(): void {
        this.urlArr = this.router.url.split('/');
        this.label = this.itemsLabels[this.urlArr[2]];

        this.items.push({
            label: this.label,
            routerLink: this.urlArr.slice(0, 3).join('/'),
            styleClass: 'text-zinc-800 dark:text-zinc-200',
        });
    }

    routerChange(): void {
        this.router.events.subscribe((e: Event) => {
            if (e instanceof NavigationEnd) {
                this.urlArr = this.router.url.split('/');
                this.label = this.itemsLabels[this.urlArr[2]];
                this.items.pop();

                this.items.push({
                    label: this.label,
                    routerLink: this.urlArr.slice(0, 3).join('/'),
                    styleClass: 'text-zinc-800 dark:text-zinc-200',
                });
            }
        });
    }

    ngOnInit(): void {
        this.initItems();
        this.routerChange();
    }
}
