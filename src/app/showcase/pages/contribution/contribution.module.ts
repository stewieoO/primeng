import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContributionDocModule } from '@doc/contribution/contribution.module';
import { ContributionComponent } from './contribution';
import { ContributionRoutingModule } from './contribution-routing.module';

@NgModule({
    imports: [CommonModule, ContributionRoutingModule, ContributionDocModule],
    declarations: [ContributionComponent]
})
export class ContributionModule {}
