import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { IconPositionType, InputType } from 'src/app/types/types';

@Component({
    selector: 'app-two-way-input-module',
    templateUrl: './two-way-input-module.component.html',
    styleUrls: ['./two-way-input-module.component.css'],
})
export class TwoWayInputModuleComponent
{
    @Input() bindVal!: string;
    @Input() inputId: string = '';
    @Input() label: string = '';
    @Input() inputType: InputType = 'text';
    @Input() icon: string = '';
    @Input() iconPosition: IconPositionType = '';
    @Output() bindValChange = new EventEmitter<string>();
    @Output() onChangeFn = new EventEmitter<void>();

    onBindValChange(): void {
        this.bindValChange.emit(this.bindVal);
        this.onChangeFn.emit();
    }
}
