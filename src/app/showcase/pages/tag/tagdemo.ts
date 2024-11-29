import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/tag/accessibilitydoc';
import { BasicDoc } from '@doc/tag/basicdoc';
import { IconDoc } from '@doc/tag/icondoc';
import { ImportDoc } from '@doc/tag/importdoc';
import { PillDoc } from '@doc/tag/pilldoc';
import { SeverityDoc } from '@doc/tag/severitydoc';
import { StyleDoc } from '@doc/tag/styledoc';
import { TemplateDoc } from '@doc/tag/templatedoc';

@Component({
    templateUrl: './tagdemo.html'
})
export class TagDemo {
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
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'pill',
            label: 'Pill',
            component: PillDoc
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
