import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/menubar/accessibilitydoc';
import { BasicDoc } from '@doc/menubar/basicdoc';
import { CommandDoc } from '@doc/menubar/commanddoc';
import { ImportDoc } from '@doc/menubar/importdoc';
import { RouterDoc } from '@doc/menubar/routerdoc';
import { StyleDoc } from '@doc/menubar/styledoc';
import { TemplateDoc } from '@doc/menubar/templatedoc';

@Component({
    templateUrl: './menubardemo.html',
    standalone: false
})
export class MenubarDemo {
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
            id: 'command',
            label: 'Command',
            component: CommandDoc
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
