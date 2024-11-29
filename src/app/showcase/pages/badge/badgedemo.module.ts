import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeDocModule } from '@doc/badge/badgedoc.module';
import { BadgeDemo } from './badgedemo';
import { BadgeDemoRoutingModule } from './badgedemo-routing.module';

@NgModule({
    imports: [CommonModule, BadgeDemoRoutingModule, BadgeDocModule],
    declarations: [BadgeDemo]
})
export class BadgeDemoModule {}
