import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/directives/control-value-accessor/control-value-accessor.directive';
import { TypeOption } from 'src/app/types/types';

@Component({
    selector: 'app-select-input',
    templateUrl: './select-input.component.html',
    styleUrls: ['./select-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectInputComponent),
            multi: true,
        },
    ],
})
export class SelectInputComponent<
    T,
    A extends string,
> extends ControlValueAccessorDirective<T> {
    @Input() options: TypeOption<A>[] = [];
    @Input() showClear: boolean = true;
    @Input() filter: boolean = true;
    @Input() inputId: string = '';
    @Input() label: string = '';
    @Input() errors: Record<string, string> = {};

    get optionsObj(): Record<string, string | number> {
        return this.options.reduce(
            (obj, opt) => {
                obj[opt.code] = opt.name;
                return obj;
            },
            {} as Record<string, string | number>,
        );
    }
}
