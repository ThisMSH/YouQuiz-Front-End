import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    ButtonBgStyle,
    ButtonIconPosition,
    ButtonSize,
    ButtonType,
} from 'src/app/types/types';

@Component({
    selector: 'app-default-button',
    templateUrl: './default-button.component.html',
    styleUrls: ['./default-button.component.css'],
})
export class DefaultButtonComponent {
    @Input() customClass: string = '';
    @Input() bgStyle: ButtonBgStyle = 'sky';
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
    @Output() onClickEvent = new EventEmitter<MouseEvent>();

    onClick(): void {
        this.onClickEvent.emit();
    }

    get getClasses(): Record<string, boolean> {
        let classes: Record<string, boolean> = {
            sky: this.bgStyle === 'sky',
            indigo: this.bgStyle === 'indigo',
            red: this.bgStyle === 'red',
            zinc: this.bgStyle === 'zinc',
        };

        this.customClass.split(' ').forEach((c) => {
            classes[c] = true;
        });

        return classes;
    }
}
