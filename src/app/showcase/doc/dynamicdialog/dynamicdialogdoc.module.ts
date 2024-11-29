import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { DialogModule } from '@stewie/primeng/dialog';
import { TableModule } from '@stewie/primeng/table';
import { TagModule } from '@stewie/primeng/tag';
import { ToastModule } from '@stewie/primeng/toast';
import { CloseDoc } from './closedoc';
import { CustomizationDoc } from './customizationdoc';
import { ExampleDoc } from './exampledoc';
import { Footer } from './footer';
import { ImportDoc } from './importdoc';
import { InfoDemo } from './infodemo';
import { OpenDoc } from './opendoc';
import { PassingDataDoc } from './passingdatadoc';
import { ProductListDemo } from './productlistdemo';
import { StyleDoc } from './styledoc';
import { UsageDoc } from './usagedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, FormsModule, TagModule, DialogModule, ButtonModule, AppDocModule, ToastModule, TableModule],
    declarations: [OpenDoc, Footer, ImportDoc, StyleDoc, ExampleDoc, ProductListDemo, UsageDoc, PassingDataDoc, CloseDoc, StyleDoc, InfoDemo, CustomizationDoc],
    exports: [AppDocModule]
})
export class DynamicDialogDocModule {}
