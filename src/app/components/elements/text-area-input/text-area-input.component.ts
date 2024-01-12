import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/directives/control-value-accessor/control-value-accessor.directive';
import { InputType } from 'src/app/types/types';

@Component({
    selector: 'app-text-area-input',
    templateUrl: './text-area-input.component.html',
    styleUrls: ['./text-area-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextAreaInputComponent),
            multi: true,
        },
    ],
})
export class TextAreaInputComponent<T> extends ControlValueAccessorDirective<T> {
    @Input() inputId: string = '';
    @Input() label: string = '';
    @Input() inputType: InputType = 'text';
    @Input() errors: Record<string, string> = {};
}
