import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/chip/accessibilitydoc';
import { BasicDoc } from '@doc/chip/basicdoc';
import { IconDoc } from '@doc/chip/icondoc';
import { ImageDoc } from '@doc/chip/imagedoc';
import { ImportDoc } from '@doc/chip/importdoc';
import { StyleDoc } from '@doc/chip/styledoc';
import { TemplateDoc } from '@doc/chip/templatedoc';

@Component({
    templateUrl: './chipdemo.html',
    styleUrls: ['chipdemo.scss']
})
export class ChipDemo {
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
            id: 'icon',
            label: 'Icon',
            component: IconDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        },
        {
            id: 'custom',
            label: 'Custom Content',
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
