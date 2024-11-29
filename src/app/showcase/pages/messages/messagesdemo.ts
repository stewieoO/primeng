import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/messages/accessibilitydoc';
import { AnimationDoc } from '@doc/messages/animationdoc';
import { BasicDoc } from '@doc/messages/basicdoc';
import { ClosableDoc } from '@doc/messages/closabledoc';
import { DynamicDoc } from '@doc/messages/dynamicdoc';
import { ImportDoc } from '@doc/messages/importdoc';
import { MessagesStyleDoc } from '@doc/messages/messagesstyledoc';
import { MessageStyleDoc } from '@doc/messages/messagestyledoc';
import { ServiceDoc } from '@doc/messages/servicedoc';
import { SeverityDoc } from '@doc/messages/severitydoc';
import { StaticDoc } from '@doc/messages/staticdoc';

@Component({
    templateUrl: './messagesdemo.html'
})
export class MessagesDemo {
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
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'closable',
            label: 'Closable',
            component: ClosableDoc
        },
        {
            id: 'service',
            label: 'Message Service',
            component: ServiceDoc
        },
        {
            id: 'static',
            label: 'Static Content',
            component: StaticDoc
        },
        {
            id: 'animation',
            label: 'Animation',
            component: AnimationDoc
        },
        {
            id: 'messagesstyle',
            label: 'Styling for Messages',
            component: MessagesStyleDoc
        },
        {
            id: 'messagestyle',
            label: 'Styling for Message',
            component: MessageStyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
