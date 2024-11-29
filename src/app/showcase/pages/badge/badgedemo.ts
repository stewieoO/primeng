import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/badge/accessibilitydoc';
import { BasicDoc } from '@doc/badge/basicdoc';
import { ButtonDoc } from '@doc/badge/buttondoc';
import { DirectiveDoc } from '@doc/badge/directivedoc';
import { ImportDoc } from '@doc/badge/importdoc';
import { PositionDoc } from '@doc/badge/positiondoc';
import { SeverityDoc } from '@doc/badge/severitydoc';
import { SizeDoc } from '@doc/badge/sizedoc';
import { StyleDoc } from '@doc/badge/styledoc';

@Component({
    templateUrl: './badgedemo.html'
})
export class BadgeDemo {
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
            id: 'directive',
            label: 'Directive',
            component: DirectiveDoc
        },
        {
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'button',
            label: 'Button',
            component: ButtonDoc
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
