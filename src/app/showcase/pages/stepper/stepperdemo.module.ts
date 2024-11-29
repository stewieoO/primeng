import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StepperDocModule } from '@doc/stepper/stepperdoc.module';
import { StepperDemo } from './stepperdemo';
import { StepperDemoRoutingModule } from './stepperdemo-routing.module';

@NgModule({
    imports: [CommonModule, StepperDemoRoutingModule, StepperDocModule],
    declarations: [StepperDemo]
})
export class StepperDemoModule {}
