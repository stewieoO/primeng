import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { TagModule } from 'primeng/tag';
import { LTSRoutingModule } from './lts-routing.module';
import { LTSComponent } from './lts.component';

@NgModule({
    imports: [CommonModule, LTSRoutingModule, TagModule, AppCodeModule],
    declarations: [LTSComponent]
})
export class LTSModule {}
