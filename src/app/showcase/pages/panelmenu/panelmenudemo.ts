import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/panelmenu/accessibilitydoc';
import { BasicDoc } from '@doc/panelmenu/basicdoc';
import { CommandDoc } from '@doc/panelmenu/commanddoc';
import { ControlledDoc } from '@doc/panelmenu/controlleddoc';
import { ImportDoc } from '@doc/panelmenu/importdoc';
import { MultipleDoc } from '@doc/panelmenu/multipledoc';
import { RouterDoc } from '@doc/panelmenu/routerdoc';
import { StyleDoc } from '@doc/panelmenu/styledoc';
import { TemplateDoc } from '@doc/panelmenu/templatedoc';

@Component({
    templateUrl: './panelmenudemo.html',
    standalone: false
})
export class PanelMenuDemo {
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
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
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
