import { Component, Input, WritableSignal, signal } from '@angular/core';

@Component({
    selector: 'app-side-bar-button',
    templateUrl: './side-bar-button.component.html',
    styleUrls: ['./side-bar-button.component.css'],
})
export class SideBarButtonComponent {
    @Input() route!: string;
    @Input() icon!: string;
    @Input() alt!: string;
    @Input() label!: string;
    isActive: WritableSignal<boolean> = signal<boolean>(false);

    activeRouter(evt: boolean): void {
        this.isActive.set(evt);
    }
}
