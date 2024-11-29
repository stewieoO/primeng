import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/inplace/accessibilitydoc';
import { BasicDoc } from '@doc/inplace/basicdoc';
import { DataDoc } from '@doc/inplace/datadoc';
import { ImageDoc } from '@doc/inplace/imagedoc';
import { ImportDoc } from '@doc/inplace/importdoc';
import { InputDoc } from '@doc/inplace/inputdoc';
import { LazyDoc } from '@doc/inplace/lazydoc';
import { StyleDoc } from '@doc/inplace/styledoc';

@Component({
    templateUrl: './inplacedemo.html'
})
export class InplaceDemo {
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
            id: 'input',
            label: 'Input',
            component: InputDoc
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
        },
        {
            id: 'data',
            label: 'Data',
            component: DataDoc
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
