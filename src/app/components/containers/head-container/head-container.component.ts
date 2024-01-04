import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-head-container',
    templateUrl: './head-container.component.html',
    styleUrls: ['./head-container.component.css'],
})
export class HeadContainerComponent {
    @Input() count: number | undefined = 0;
    @Input() title!: string;
}
