import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/sidebar/accessibilitydoc';
import { BasicDoc } from '@doc/sidebar/basicdoc';
import { FullScreenDoc } from '@doc/sidebar/fullscreendoc';
import { HeadlessDoc } from '@doc/sidebar/headlessdoc';
import { ImportDoc } from '@doc/sidebar/importdoc';
import { PositionDoc } from '@doc/sidebar/positiondoc';
import { SizeDoc } from '@doc/sidebar/sizedoc';
import { StyleDoc } from '@doc/sidebar/styledoc';
import { TemplateDoc } from '@doc/sidebar/templatedoc';

@Component({
    templateUrl: './sidebardemo.html',
    standalone: false
})
export class SidebarDemo {
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
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'fullscreen',
            label: 'Full Screen',
            component: FullScreenDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'headless',
            label: 'Headless',
            component: HeadlessDoc
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
