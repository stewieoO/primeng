import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableDocModule } from '@doc/table/tabledoc.module';
import { TableDemo } from './tabledemo';
import { TableDemoRoutingModule } from './tabledemo-routing.module';

@NgModule({
    imports: [CommonModule, TableDemoRoutingModule, TableDocModule],
    declarations: [TableDemo]
})
export class TableDemoModule {}
