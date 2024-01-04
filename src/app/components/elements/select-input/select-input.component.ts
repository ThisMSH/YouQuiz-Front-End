import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild,
    forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/directives/control-value-accessor/control-value-accessor.directive';
import { InputType, TypeOption } from 'src/app/types/types';

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
export class SelectInputComponent<T, A extends string>
    extends ControlValueAccessorDirective<T>
    implements AfterViewInit
{
    @ViewChild('selectInput') inputEle!: ElementRef;
    @ViewChild('errorsContainer') errDiv!: ElementRef;
    @ViewChild('labelElement') labelEle!: ElementRef;
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

    onBlur(): void {
        if (this.errDiv && this.errDiv.nativeElement) {
            if (Object.keys(this.errors).length > 0) {
                this.errDiv.nativeElement.classList.remove('hidden');
            } else {
                this.errDiv.nativeElement.classList.add('hidden');
            }
        }

        if (this.control().invalid) {
            this.inputEle.nativeElement.children[0].classList.add('ng-invalid');
            this.labelEle.nativeElement.classList.remove('label');
        } else {
            this.labelEle.nativeElement.classList.add('label');
        }
    }

    ngAfterViewInit(): void {
        if (
            this.inputEle.nativeElement.children[0].classList.contains(
                'ng-invalid',
            )
        ) {
            this.inputEle.nativeElement.children[0].classList.remove(
                'ng-invalid',
            );
        }
    }
}
