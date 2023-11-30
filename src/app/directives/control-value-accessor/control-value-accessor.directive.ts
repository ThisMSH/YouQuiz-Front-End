import { Directive } from '@angular/core';
import { OnInit, signal, Inject, Injector } from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    FormControlDirective,
    FormControlName,
    FormGroupDirective,
    NgControl,
    Validators,
} from '@angular/forms';
import { Subject, distinctUntilChanged, startWith, takeUntil, tap } from 'rxjs';

@Directive({
    selector: '[appControlValueAccessor]',
})
export class ControlValueAccessorDirective<T>
    implements OnInit, ControlValueAccessor
{
    control = signal<FormControl>(new FormControl());
    isRequired = signal<boolean>(false);
    isDisabled = signal<boolean>(false);

    private destroy$ = new Subject<void>();
    private onTouched!: () => T;

    constructor(@Inject(Injector) private injector: Injector) {}

    writeValue(val: T): void {
        this.control()
            ? this.control().setValue(val)
            : this.control.set(new FormControl(val));
    }

    registerOnChange(fn: (val: T | null) => T): void {
        this.control()
            ?.valueChanges.pipe(
                takeUntil(this.destroy$),
                startWith(this.control().value),
                distinctUntilChanged(),
                tap((val) => fn(val)),
            )
            .subscribe(() => this.control()?.markAsUntouched());
    }

    registerOnTouched(fn: () => T): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled.set(isDisabled);
    }

    setFormControl(): void {
        const formControl = this.injector.get(NgControl);

        switch (formControl.constructor) {
            case FormControlName:
                this.control?.set(
                    this.injector
                        .get(FormGroupDirective)
                        .getControl(formControl as FormControlName),
                );
                break;
            default:
                this.control?.set(
                    (formControl as FormControlDirective).form as FormControl,
                );
                break;
        }
    }

    ngOnInit(): void {
        this.setFormControl();
        this.isRequired.set(
            this.control()?.hasValidator(Validators.required) ?? false,
        );
    }
}
