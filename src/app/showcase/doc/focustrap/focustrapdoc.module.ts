import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { DropdownModule } from '@stewie/primeng/dropdown';
import { FocusTrapModule } from '@stewie/primeng/focustrap';
import { InputTextModule } from '@stewie/primeng/inputtext';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, FocusTrapModule],
    declarations: [ImportDoc, BasicDoc],
    exports: [AppDocModule]
})
export class FocusTrapDocModule {}
