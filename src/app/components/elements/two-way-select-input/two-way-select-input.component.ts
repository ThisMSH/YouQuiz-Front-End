import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeOption } from 'src/app/types/types';

@Component({
    selector: 'app-two-way-select-input',
    templateUrl: './two-way-select-input.component.html',
    styleUrls: ['./two-way-select-input.component.css'],
})
export class TwoWaySelectInputComponent {
    @Input() bindVal!: string | number;
    @Input() options: TypeOption<string>[] = [];
    @Input() selectedOption!: string | number;
    @Input() showClear: boolean = true;
    @Input() filter: boolean = true;
    @Input() inputId: string = '';
    @Input() label: string = '';
    @Input() errors: Record<string, string> = {};
    @Output() bindValChange = new EventEmitter<string | number>();

    get optionsObj(): Record<string, string | number> {
        return this.options.reduce(
            (obj, opt) => {
                obj[opt.code] = opt.name;
                return obj;
            },
            {} as Record<string, string | number>,
        );
    }

    onBindValChange(evt: string | number): void {
        this.bindVal = evt;
        this.bindValChange.emit(this.bindVal);
    }
}
