import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbDocModule } from '@doc/breadcrumb/breadcrumbdoc.module';
import { BreadcrumbDemo } from './breadcrumbdemo';
import { BreadcrumbDemoRoutingModule } from './breadcrumbdemo-routing.module';

@NgModule({
    imports: [CommonModule, BreadcrumbDemoRoutingModule, BreadcrumbDocModule],
    declarations: [BreadcrumbDemo]
})
export class BreadcrumbDemoModule {}
