import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelDocModule } from '@doc/floatlabel/floatlabeldoc.module';
import { FloatLabelDemo } from './floatlabeldemo';
import { FloatLabelDemoRoutingModule } from './floatlabeldemo-routing.module';

@NgModule({
    imports: [CommonModule, FloatLabelDemoRoutingModule, FormsModule, FloatLabelDocModule],
    declarations: [FloatLabelDemo]
})
export class FloatLabelDemoModule {}
