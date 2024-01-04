import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/directives/control-value-accessor/control-value-accessor.directive';

@Component({
    selector: 'app-file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FileInputComponent),
            multi: true,
        },
    ],
})
export class FileInputComponent<T>
    extends ControlValueAccessorDirective<T>
    implements AfterViewInit
{
    @ViewChild('labelContainer') inputEle!: ElementRef;
    @ViewChild('errorsContainer') errDiv!: ElementRef;
    @Input() inputId!: string;
    @Input() label: string = 'Click to choose a file';
    @Input() errors: Record<string, string> = {};
    @Output() fileChange = new EventEmitter();

    onClick(): void {
        if (this.errDiv && this.errDiv.nativeElement) {
            if (Object.keys(this.errors).length > 0) {
                this.errDiv.nativeElement.classList.remove('hidden');
            } else {
                this.errDiv.nativeElement.classList.add('hidden');
            }
        }

        if (this.control().invalid) {
            this.inputEle.nativeElement.classList.add('invalid-input');
        } else {
            this.inputEle.nativeElement.classList.remove('invalid-input')
        }
    }

    onChange(e: any): void {
        this.label = e.target.files[0]?.name ?? 'Click to choose a file';

        if (this.errDiv && this.errDiv.nativeElement) {
            if (Object.keys(this.errors).length > 0) {
                this.errDiv.nativeElement.classList.remove('hidden');
            } else {
                this.errDiv.nativeElement.classList.add('hidden');
            }
        }

        if (this.control().invalid) {
            this.inputEle.nativeElement.classList.add('invalid-input');
        } else {
            this.inputEle.nativeElement.classList.remove('invalid-input')
        }
    }

    onFileChange(e: any) {
        this.fileChange.emit(e);
    }

    ngAfterViewInit(): void {
    }
}
