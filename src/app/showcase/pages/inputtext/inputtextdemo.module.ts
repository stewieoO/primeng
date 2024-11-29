import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputtextDocModule } from '@doc/inputtext/inputtextdoc.module';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { InputTextModule } from 'primeng/inputtext';

import { InputTextDemo } from './inputtextdemo';
import { InputTextDemoRoutingModule } from './inputtextdemo-routing.module';

@NgModule({
    imports: [CommonModule, InputTextDemoRoutingModule, FormsModule, InputTextModule, InputtextDocModule, AppDocModule],
    declarations: [InputTextDemo]
})
export class InputTextDemoModule {}
