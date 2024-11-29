import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';

@NgModule({
    imports: [CommonModule, SupportRoutingModule],
    declarations: [SupportComponent]
})
export class SupportModule {}
