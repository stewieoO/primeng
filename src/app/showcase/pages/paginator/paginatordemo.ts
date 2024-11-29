import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/paginator/accessibilitydoc';
import { BasicDoc } from '@doc/paginator/basicdoc';
import { CurrentPageReportDoc } from '@doc/paginator/currentpagereportdoc';
import { ImportDoc } from '@doc/paginator/importdoc';
import { LocaleDoc } from '@doc/paginator/localedoc';
import { StyleDoc } from '@doc/paginator/styledoc';
import { TemplateDoc } from '@doc/paginator/templatedoc';

@Component({
    templateUrl: './paginatordemo.html',
    styleUrls: ['./paginatordemo.scss'],
    standalone: false
})
export class PaginatorDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'current-page-report',
            label: 'Current Page Report',
            component: CurrentPageReportDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
