import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-general-container',
    templateUrl: './general-container.component.html',
    styleUrls: ['./general-container.component.css'],
})
export class GeneralContainerComponent {
    @Input() customClass: string = '';
    @Input() bgStyle: string = 'bg-zinc-100 dark:bg-zinc-900';
}
