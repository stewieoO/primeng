import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { CalendarModule } from '@stewie/primeng/calendar';
import { ConfirmDialogModule } from '@stewie/primeng/confirmdialog';
import { ContextMenuModule } from '@stewie/primeng/contextmenu';
import { DialogModule } from '@stewie/primeng/dialog';
import { DropdownModule } from '@stewie/primeng/dropdown';
import { FileUploadModule } from '@stewie/primeng/fileupload';
import { IconFieldModule } from '@stewie/primeng/iconfield';
import { InputIconModule } from '@stewie/primeng/inputicon';
import { InputNumberModule } from '@stewie/primeng/inputnumber';
import { InputSwitchModule } from '@stewie/primeng/inputswitch';
import { InputTextModule } from '@stewie/primeng/inputtext';
import { InputTextareaModule } from '@stewie/primeng/inputtextarea';
import { MultiSelectModule } from '@stewie/primeng/multiselect';
import { ProgressBarModule } from '@stewie/primeng/progressbar';
import { RadioButtonModule } from '@stewie/primeng/radiobutton';
import { RatingModule } from '@stewie/primeng/rating';
import { SelectButtonModule } from '@stewie/primeng/selectbutton';
import { SkeletonModule } from '@stewie/primeng/skeleton';
import { SliderModule } from '@stewie/primeng/slider';
import { TableModule } from '@stewie/primeng/table';
import { TabViewModule } from '@stewie/primeng/tabview';
import { TagModule } from '@stewie/primeng/tag';
import { ToastModule } from '@stewie/primeng/toast';
import { ToggleButtonModule } from '@stewie/primeng/togglebutton';
import { ToolbarModule } from '@stewie/primeng/toolbar';
import { TooltipModule } from '@stewie/primeng/tooltip';
import { AppCodeModule } from 'src/app/showcase/layout/doc/app.code.component';
import { DeferredDemo } from '../../demo/deferreddemo';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CellEditDoc } from './celleditdoc';
import { CheckboxSelectionDoc } from './checkboxselectiondoc';
import { ColumnGroupDoc } from './columngroupdoc';
import { ColumnResizeExpandModeDoc } from './columnresizeexpandmodedoc';
import { ColumnResizeFitModeDoc } from './columnresizefitmodedoc';
import { ColumnResizeScrollableModeDoc } from './columnresizescrollablemodedoc';
import { ColumnSelectionDoc } from './columnselectiondoc';
import { ColumnToggleDoc } from './columntoggledoc';
import { ContextMenuDoc } from './contextmenudoc';
import { ControlledSelectionDoc } from './controlledselectiondoc';
import { CustomersDoc } from './customersdoc';
import { CustomSortDoc } from './customsortdoc';
import { DynamicDoc } from './dynamicdoc';
import { ExpandableRowGroupDoc } from './expandablerowgroupdoc';
import { ExportDoc } from './exportdoc';
import { FilterAdvancedDoc } from './filteradvanceddoc';
import { FilterBasicDoc } from './filterbasic';
import { FilterSortEditDoc } from './filtersorteditdoc';
import { FlexibleScrollDoc } from './flexiblescrolldoc';
import { FrozenColumnsDoc } from './frozencolumnsdoc';
import { FrozenRowsDoc } from './frozenrowsdoc';
import { GridlinesDoc } from './gridlinesdoc';
import { HorizontalScrollDoc } from './horizontalscrolldoc';
import { ImportDoc } from './importdoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { MultipleColumnsSortDoc } from './multiplecolumnssortdoc';
import { MultipleSelectionDoc } from './multipleselectiondoc';
import { PageOnlySelectionDoc } from './pageonlyselectiondoc';
import { PaginatorBasicDoc } from './paginatorbasicdoc';
import { PaginatorLocaleDoc } from './paginatorlocaledoc';
import { PaginatorProgrammaticDoc } from './paginatorprogrammaticdoc';
import { PreSortDoc } from './presortdoc';
import { ProductsDoc } from './productsdoc';
import { RadioButtonSelectionDoc } from './radiobuttonselectiondoc';
import { RemovableSortDoc } from './removablesortdoc';
import { ReorderDoc } from './reorderdoc';
import { ResponsiveScrollDoc } from './responsivescrolldoc';
import { ResponsiveStackDoc } from './responsivestackdoc';
import { RowEditDoc } from './roweditdoc';
import { RowExpansionDoc } from './rowexpansiondoc';
import { RowspanGroupingDoc } from './rowspangroupingdoc';
import { SelectionEventsDoc } from './selectioneventsdoc';
import { SingleColumnSortDoc } from './singlecolumnsortdoc';
import { SingleSelectionDoc } from './singleselectiondoc';
import { SizeDoc } from './sizedoc';
import { StatefulDoc } from './statefuldoc';
import { StripedDoc } from './stripeddoc';
import { StyleDoc } from './styledoc';
import { StylingDoc } from './stylingdoc';
import { SubheaderGroupingDoc } from './subheadergroupingdoc';
import { TemplateDoc } from './templatedoc';
import { VerticalScrollDoc } from './verticalscrolldoc';
import { VirtualScrollDoc } from './virtualscrolldoc';
import { VirtualScrollLazyDoc } from './virtualscrolllazydoc';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        TagModule,
        ToastModule,
        InputTextModule,
        InputSwitchModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        SelectButtonModule,
        AppCodeModule,
        AppDocModule,
        DeferredDemo,
        IconFieldModule,
        InputIconModule
    ],
    declarations: [
        ImportDoc,
        BasicDoc,
        DynamicDoc,
        CellEditDoc,
        CheckboxSelectionDoc,
        ColumnGroupDoc,
        ColumnResizeExpandModeDoc,
        ColumnResizeScrollableModeDoc,
        ColumnResizeFitModeDoc,
        ColumnSelectionDoc,
        ColumnToggleDoc,
        ContextMenuDoc,
        ControlledSelectionDoc,
        CustomersDoc,
        CustomSortDoc,
        DynamicDoc,
        ExpandableRowGroupDoc,
        ExportDoc,
        FilterBasicDoc,
        FilterAdvancedDoc,
        FlexibleScrollDoc,
        FrozenColumnsDoc,
        FrozenRowsDoc,
        GridlinesDoc,
        HorizontalScrollDoc,
        LazyLoadDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorBasicDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorProgrammaticDoc,
        ProductsDoc,
        RadioButtonSelectionDoc,
        ReorderDoc,
        ResponsiveScrollDoc,
        ResponsiveStackDoc,
        RowEditDoc,
        FilterSortEditDoc,
        RowExpansionDoc,
        RowspanGroupingDoc,
        SingleColumnSortDoc,
        MultipleColumnsSortDoc,
        SingleSelectionDoc,
        SizeDoc,
        StatefulDoc,
        StripedDoc,
        StyleDoc,
        SubheaderGroupingDoc,
        TemplateDoc,
        VerticalScrollDoc,
        VirtualScrollDoc,
        VirtualScrollLazyDoc,
        StylingDoc,
        SelectionEventsDoc,
        AccessibilityDoc,
        PaginatorLocaleDoc,
        PreSortDoc,
        RemovableSortDoc
    ],
    exports: [AppDocModule]
})
export class TableDocModule {}
