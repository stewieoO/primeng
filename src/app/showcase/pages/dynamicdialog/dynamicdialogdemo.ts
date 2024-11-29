import { Component } from '@angular/core';
import { CloseDoc } from '@doc/dynamicdialog/closedoc';
import { CustomizationDoc } from '@doc/dynamicdialog/customizationdoc';
import { ExampleDoc } from '@doc/dynamicdialog/exampledoc';
import { ImportDoc } from '@doc/dynamicdialog/importdoc';
import { OpenDoc } from '@doc/dynamicdialog/opendoc';
import { PassingDataDoc } from '@doc/dynamicdialog/passingdatadoc';
import { StyleDoc } from '@doc/dynamicdialog/styledoc';
import { UsageDoc } from '@doc/dynamicdialog/usagedoc';

@Component({
    templateUrl: './dynamicdialogdemo.html'
})
export class DynamicDialogDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'usage',
            label: 'Usage',
            component: UsageDoc
        },
        {
            id: 'open',
            label: 'Opening a Dialog',
            component: OpenDoc
        },
        {
            id: 'customization',
            label: 'Customization',
            component: CustomizationDoc
        },
        {
            id: 'passingdata',
            label: 'Passing Data',
            component: PassingDataDoc
        },
        {
            id: 'close',
            label: 'Closing a Dialog',
            component: CloseDoc
        },
        {
            id: 'example',
            label: 'Example',
            component: ExampleDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        }
    ];
}
