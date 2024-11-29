import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Directive, DoCheck, ElementRef, HostListener, Input, NgModule, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Nullable } from 'primeng/ts-helpers';

/**
 * InputText directive is an extension to standard input element with theming.
 * @group Components
 */
@Directive({
    selector: '[pInputText]',
    host: {
        class: 'p-inputtext p-component p-element',
        '[class.p-filled]': 'filled',
        '[class.p-variant-filled]': 'variant === "filled" || config.inputStyle() === "filled"'
    },
    standalone: false
})
export class InputText implements DoCheck, AfterViewInit {
    /**
     * Specifies the input variant of the component.
     * @group Props
     */
    @Input() variant: 'filled' | 'outlined' = 'outlined';

    filled: Nullable<boolean>;

    constructor(
        public el: ElementRef,
        @Optional() public ngModel: NgModel,
        private cd: ChangeDetectorRef,
        public config: PrimeNGConfig
    ) {}

    ngAfterViewInit() {
        this.updateFilledState();
        this.cd.detectChanges();
    }

    ngDoCheck() {
        this.updateFilledState();
    }

    @HostListener('input', ['$event'])
    onInput() {
        this.updateFilledState();
    }

    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [InputText],
    declarations: [InputText]
})
export class InputTextModule {}
