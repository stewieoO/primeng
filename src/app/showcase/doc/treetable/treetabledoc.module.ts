import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { TreeTableModule } from 'primeng/treetable';
import { DeferredDemo } from '../../demo/deferreddemo';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ColumnGroupDoc } from './columngroupdoc';
import { ResizeExpandDoc } from './columnresizeexpanddoc';
import { ResizeFitDoc } from './columnresizefitdoc';
import { ResizeScrollableDoc } from './columnresizescrollabledoc';
import { ColumnToggleDoc } from './columntoggledoc';
import { ConditionalStyleDoc } from './conditionalstyledoc';
import { ContextMenuDoc } from './contextmenudoc';
import { ControlledDoc } from './controlleddoc';
import { DynamicColumnsDoc } from './dynamiccolumnsdoc';
import { EditDoc } from './editdoc';
import { FilterDoc } from './filterdoc';
import { ScrollFlexibleDoc } from './flexiblescrolldoc';
import { GridlinesDoc } from './gridlinesdoc';
import { ImportDoc } from './importdoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { PaginatorBasicDoc } from './paginatorbasicdoc';
import { PaginatorLocaleDoc } from './paginatorlocaledoc';
import { PaginatorTemplateDoc } from './paginatortemplatedoc';
import { ReorderDoc } from './reorderdoc';
import { FrozenColumnsDoc } from './scrollfrozencolumnsdoc';
import { ScrollHorizontalDoc } from './scrollhorizontaldoc';
import { ScrollVerticalDoc } from './scrollverticaldoc';
import { SelectionCheckboxDoc } from './selectioncheckboxdoc';
import { SelectionEventsDoc } from './selectioneventscdoc';
import { SelectionMultipleDoc } from './selectionmultipledoc';
import { SelectionSingleDoc } from './selectionsingledoc';
import { SizeDoc } from './sizedoc';
import { SortMultipleColumnsDoc } from './sortmultiplecolumnsdoc';
import { SortRemovableDoc } from './sortremovabledoc';
import { SortSingleColumnDoc } from './sortsinglecolumndoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TreeTableModule, ButtonModule, RouterModule, InputTextModule, SelectButtonModule, FormsModule, InputSwitchModule, ToastModule, MultiSelectModule, ContextMenuModule, DialogModule, DeferredDemo],
    exports: [AppDocModule],
    declarations: [
        ImportDoc,
        BasicDoc,
        DynamicColumnsDoc,
        TemplateDoc,
        PaginatorBasicDoc,
        PaginatorTemplateDoc,
        SortSingleColumnDoc,
        SortMultipleColumnsDoc,
        SortRemovableDoc,
        FilterDoc,
        SelectionSingleDoc,
        SelectionMultipleDoc,
        SelectionCheckboxDoc,
        SelectionEventsDoc,
        ColumnGroupDoc,
        LazyLoadDoc,
        EditDoc,
        ScrollVerticalDoc,
        ScrollHorizontalDoc,
        ScrollFlexibleDoc,
        FrozenColumnsDoc,
        ResizeFitDoc,
        ResizeExpandDoc,
        ReorderDoc,
        ColumnToggleDoc,
        ConditionalStyleDoc,
        ContextMenuDoc,
        StyleDoc,
        AccessibilityDoc,
        PaginatorLocaleDoc,
        ResizeScrollableDoc,
        SizeDoc,
        GridlinesDoc,
        ControlledDoc
    ]
})
export class TreeTableDocModule {}
