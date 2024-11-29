import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/steps/accessibilitydoc';
import { BasicDoc } from '@doc/steps/basicdoc';
import { ControlledDoc } from '@doc/steps/controlleddoc';
import { ImportDoc } from '@doc/steps/importdoc';
import { InteractiveDoc } from '@doc/steps/interactivedoc';
import { RoutingDoc } from '@doc/steps/routingdoc';
import { StyleDoc } from '@doc/steps/styledoc';

@Component({
    templateUrl: './stepsdemo.html',
    styleUrls: ['stepsdemo.scss']
})
export class StepsDemo {
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
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
        },
        {
            id: 'interactive',
            label: 'Interactive',
            component: InteractiveDoc
        },
        {
            id: 'routing',
            label: 'Routing',
            component: RoutingDoc
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
