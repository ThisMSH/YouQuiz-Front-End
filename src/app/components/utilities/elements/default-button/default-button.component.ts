import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonIconPosition, ButtonSize, ButtonType } from 'src/app/types/types';

@Component({
    selector: 'app-default-button',
    templateUrl: './default-button.component.html',
    styleUrls: ['./default-button.component.css'],
})
export class DefaultButtonComponent {
    @Input() customClass!: string | undefined;
    @Input() label!: string;
    @Input() type: ButtonType = 'submit';
    @Input() icon!: string;
    @Input() iconPosition: ButtonIconPosition = 'left';
    @Input() loading: boolean = false;
    @Input() loadingIcon!: string;
    @Input() disabled: boolean = false;
    @Input() raised: boolean = false;
    @Input() rounded: boolean = false;
    @Input() size: ButtonSize = undefined;
    @Output() onClickEvent = new EventEmitter<void>();

    onClick(): void {
        this.onClickEvent.emit();
    }
}
