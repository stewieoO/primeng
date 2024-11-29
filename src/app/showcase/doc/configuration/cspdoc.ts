import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'csp-doc',
    template: `
        <app-docsectiontext>
            <p>The <i>nonce</i> value to use on dynamically generated style elements in core.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>
    `,
    standalone: false
})
export class CspDoc {
    code: Code = {
        basic: `constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.csp.set({nonce: '...'});
}
        `
    };
}
