import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { CalendarModule } from '@stewie/primeng/calendar';
import { FloatLabelModule } from '@stewie/primeng/floatlabel';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ButtonBarDoc } from './buttonbardoc';
import { DateTemplateDoc } from './datetemplatedoc';
import { DisabledDoc } from './disableddoc';
import { EventsDoc } from './eventsdoc';
import { FilledDoc } from './filleddoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { FormatDoc } from './formatdoc';
import { IconDoc } from './icondoc';
import { ImportDoc } from './importdoc';
import { InlineDoc } from './inlinedoc';
import { InvalidDoc } from './invaliddoc';
import { LocaleDoc } from './localedoc';
import { MethodsDoc } from './methodsdoc';
import { MinMaxDoc } from './minmaxdox';
import { MonthDoc } from './monthdoc';
import { MultipleDoc } from './multipledoc';
import { MultipleMonthDoc } from './multiplemonths.doc';
import { RangeDoc } from './rangedoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { TemplatesDoc } from './templatesdoc';
import { TimeDoc } from './timedoc';
import { TouchUIDoc } from './touchuidoc';
import { YearDoc } from './yeardoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, CalendarModule, ReactiveFormsModule, FloatLabelModule],
    exports: [AppDocModule],
    declarations: [
        ImportDoc,
        BasicDoc,
        FormatDoc,
        LocaleDoc,
        IconDoc,
        MinMaxDoc,
        MultipleDoc,
        RangeDoc,
        ButtonBarDoc,
        TimeDoc,
        MonthDoc,
        YearDoc,
        MultipleMonthDoc,
        TemplateDoc,
        InlineDoc,
        TouchUIDoc,
        DateTemplateDoc,
        StyleDoc,
        EventsDoc,
        MethodsDoc,
        TemplatesDoc,
        AccessibilityDoc,
        ReactiveFormsDoc,
        FloatLabelDoc,
        FilledDoc,
        InvalidDoc,
        DisabledDoc
    ]
})
export class CalendarDocModule {}
