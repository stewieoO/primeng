import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/menu/accessibilitydoc';
import { BasicDoc } from '@doc/menu/basicdoc';
import { CommandDoc } from '@doc/menu/commanddoc';
import { GroupDoc } from '@doc/menu/groupdoc';
import { ImportDoc } from '@doc/menu/importdoc';
import { PopupDoc } from '@doc/menu/popupdoc';
import { RouterDoc } from '@doc/menu/routerdoc';
import { StyleDoc } from '@doc/menu/styledoc';
import { TemplateDoc } from '@doc/menu/templatedoc';

@Component({
    templateUrl: './menudemo.html'
})
export class MenuDemo {
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
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'popup',
            label: 'Popup',
            component: PopupDoc
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
