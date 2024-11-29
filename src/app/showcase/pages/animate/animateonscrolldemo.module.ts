import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimateOnScrollDocModule } from '@doc/animateonscroll/animateonscrolldoc.module';
import { AnimateOnScrollDemo } from './animateonscrolldemo';
import { AnimateOnScrollDemoRoutingModule } from './animateonscrolldemo-routing.module';

@NgModule({
    imports: [CommonModule, AnimateOnScrollDemoRoutingModule, AnimateOnScrollDocModule],
    declarations: [AnimateOnScrollDemo]
})
export class AnimateOnScrollDemoModule {}
