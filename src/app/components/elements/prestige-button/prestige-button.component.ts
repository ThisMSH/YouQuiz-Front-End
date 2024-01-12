import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType, PrestigeButtonBgStyle } from 'src/app/types/types';

@Component({
    selector: 'app-prestige-button',
    templateUrl: './prestige-button.component.html',
    styleUrls: ['./prestige-button.component.css'],
})
export class PrestigeButtonComponent {
    @Input() customClass: string = '';
    @Input() icon: string | undefined;
    @Input() iconClass: string | undefined;
    @Input() label!: string;
    @Input() labelClass: string = '';
    @Input() btnType: ButtonType = 'submit';
    @Input() bgStyle: PrestigeButtonBgStyle = 'indigo';
    @Output() onClick = new EventEmitter();

    btnClicked(): void {
        this.onClick.emit();
    }
}
