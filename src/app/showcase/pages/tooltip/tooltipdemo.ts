import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/tooltip/accessibilitydoc';
import { AutoHideDoc } from '@doc/tooltip/autohidedoc';
import { CustomDoc } from '@doc/tooltip/customdoc';
import { DelayDoc } from '@doc/tooltip/delaydoc';
import { EventDoc } from '@doc/tooltip/eventdoc';
import { ImportDoc } from '@doc/tooltip/importdoc';
import { OptionsDoc } from '@doc/tooltip/optionsdoc';
import { PositionDoc } from '@doc/tooltip/positiondoc';
import { StyleDoc } from '@doc/tooltip/styledoc';

@Component({
    templateUrl: './tooltipdemo.html',
    standalone: false
})
export class TooltipDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'event',
            label: 'Event',
            component: EventDoc
        },
        {
            id: 'autohide',
            label: 'Auto Hide',
            component: AutoHideDoc
        },
        {
            id: 'delay',
            label: 'Delay',
            component: DelayDoc
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
        },
        {
            id: 'options',
            label: 'Tooltip Options',
            component: OptionsDoc
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
