import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/directives/control-value-accessor/control-value-accessor.directive';
import { IconPositionType, InputType } from 'src/app/types/types';

@Component({
    selector: 'app-default-input',
    templateUrl: './default-input.component.html',
    styleUrls: ['./default-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DefaultInputComponent),
            multi: true,
        },
    ],
})
export class DefaultInputComponent<T> extends ControlValueAccessorDirective<T> {
    @Input() inputId: string = '';
    @Input() label: string = '';
    @Input() inputType: InputType = 'text';
    @Input() icon: string = '';
    @Input() iconPosition: IconPositionType = '';
    @Input() errors: Record<string, string> = {};
}
