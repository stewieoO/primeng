import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/breadcrumb/accessibilitydoc';
import { BasicDoc } from '@doc/breadcrumb/basicdoc';
import { ImportDoc } from '@doc/breadcrumb/importdoc';
import { RouterDoc } from '@doc/breadcrumb/routerdoc';
import { StyleDoc } from '@doc/breadcrumb/styledoc';
import { TemplateDoc } from '@doc/breadcrumb/templatedoc';

@Component({
    templateUrl: './breadcrumbdemo.html',
    standalone: false
})
export class BreadcrumbDemo {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'router',
            label: 'Router',
            component: RouterDoc
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
