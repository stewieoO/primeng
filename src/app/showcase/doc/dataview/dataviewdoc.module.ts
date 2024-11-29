import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { DataViewModule } from '@stewie/primeng/dataview';
import { DropdownModule } from '@stewie/primeng/dropdown';
import { RatingModule } from '@stewie/primeng/rating';
import { SkeletonModule } from '@stewie/primeng/skeleton';
import { TagModule } from '@stewie/primeng/tag';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { LayoutDoc } from './layoutdoc';
import { LoadingDoc } from './loadingdoc';
import { PaginationDoc } from './paginationdoc';
import { SortingDoc } from './sortingdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DataViewModule, DropdownModule, ButtonModule, RouterModule, RatingModule, TagModule, FormsModule, SkeletonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, PaginationDoc, SortingDoc, LayoutDoc, LoadingDoc, StyleDoc, AccessibilityDoc]
})
export class DataViewDocModule {}
