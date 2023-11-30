import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
    forwardRef,
} from '@angular/core';
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
export class DefaultInputComponent<T>
    extends ControlValueAccessorDirective<T>
    implements AfterViewInit
{
    @ViewChild('defaultInput') inputEle!: ElementRef;
    @ViewChild('errorsContainer') errDiv!: ElementRef;
    @Input() inputId: string = '';
    @Input() label: string = '';
    @Input() inputType: InputType = 'text';
    @Input() icon: string = '';
    @Input() iconPosition: IconPositionType = '';
    @Input() errors: Record<string, string> = {};

    onBlur(): void {
        if (Object.keys(this.errors).length > 0) {
            this.errDiv.nativeElement.classList.remove('hidden');
        } else {
            this.errDiv.nativeElement.classList.add('hidden');
        }
    }

    ngAfterViewInit(): void {
        if (this.inputEle.nativeElement.classList.contains('ng-invalid')) {
            this.inputEle.nativeElement.classList.remove('ng-invalid');
        }
    }
}
