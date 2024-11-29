import { Component, ViewEncapsulation } from '@angular/core';
import { AccessibilityDoc } from '@doc/inputotp/accessibilitydoc';
import { BasicDoc } from '@doc/inputotp/basicdoc';
import { ImportDoc } from '@doc/inputotp/importdoc';
import { IntegerOnlyDoc } from '@doc/inputotp/integeronlydoc';
import { MaskDoc } from '@doc/inputotp/maskdoc';
import { SampleDoc } from '@doc/inputotp/sampledoc';
import { TemplateDoc } from '@doc/inputotp/templatedoc';

@Component({
    templateUrl: './inputotp.html',
    encapsulation: ViewEncapsulation.None
})
export class InputOtpDemo {
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
            id: 'mask',
            label: 'Mask',
            component: MaskDoc
        },
        {
            id: 'integeronly',
            label: 'Integer Only',
            component: IntegerOnlyDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'sample',
            label: 'Sample',
            component: SampleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
