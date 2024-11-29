import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/carousel/accessibilitydoc';
import { BasicDoc } from '@doc/carousel/basicdoc';
import { CircularDoc } from '@doc/carousel/circulardoc';
import { ImportDoc } from '@doc/carousel/importdoc';
import { NumScrollDoc } from '@doc/carousel/numscrolldoc';
import { ResponsiveDoc } from '@doc/carousel/responsivedoc';
import { StyleDoc } from '@doc/carousel/styledoc';
import { TemplateDoc } from '@doc/carousel/templatedoc';
import { VerticalDoc } from '@doc/carousel/verticaldoc';

@Component({
    templateUrl: './carouseldemo.html',
    styleUrls: ['./carouseldemo.scss'],
    standalone: false
})
export class CarouselDemo {
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
            id: 'circular',
            label: 'Circular',
            component: CircularDoc
        },
        {
            id: 'numscroll',
            label: 'Num Scroll',
            component: NumScrollDoc
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: TemplateDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
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
