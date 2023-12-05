import { AfterViewInit, Component, ElementRef, Input, ViewChild, forwardRef } from '@angular/core';
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
export class TextAreaInputComponent<T>
extends ControlValueAccessorDirective<T>
implements AfterViewInit {
    @ViewChild('defaultTextArea') inputEle!: ElementRef;
    @ViewChild('errorsContainer') errDiv!: ElementRef;
    @ViewChild('labelElement') labelEle!: ElementRef;
    @Input() inputId: string = '';
    @Input() label: string = '';
    @Input() inputType: InputType = 'text';
    @Input() errors: Record<string, string> = {};

    onBlur(): void {
        if (this.errDiv && this.errDiv.nativeElement) {
            if (Object.keys(this.errors).length > 0) {
                this.errDiv.nativeElement.classList.remove('hidden');
            } else {
                this.errDiv.nativeElement.classList.add('hidden');
            }
        }

        if (this.control().invalid) {
            this.inputEle.nativeElement.classList.add('ng-invalid');
            this.labelEle.nativeElement.classList.remove('label');
        } else {
            this.labelEle.nativeElement.classList.add('label');
        }
    }

    ngAfterViewInit(): void {
        if (this.inputEle.nativeElement.classList.contains('ng-invalid')) {
            this.inputEle.nativeElement.classList.remove('ng-invalid');
        }
    }
}
