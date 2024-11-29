import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconFieldDocModule } from '@doc/iconfield/iconfielddoc.module';
import { IconFieldDemo } from './iconfielddemo';
import { IconFieldDemoRoutingModule } from './iconfielddemo-routing.module';

@NgModule({
    imports: [CommonModule, IconFieldDocModule, IconFieldDemoRoutingModule],
    declarations: [IconFieldDemo]
})
export class IconFieldDemoModule {}
