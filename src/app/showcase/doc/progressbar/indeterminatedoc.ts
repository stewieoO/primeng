import { Component } from '@angular/core';
import { Code } from '@domain/code';
import { MessageService } from '@stewie/primeng/api';

@Component({
    selector: 'indeterminate-doc',
    template: `
        <app-docsectiontext>
            <p>For progresses with no value to track, set the <i>mode</i> property to <i>indeterminate</i>.</p>
        </app-docsectiontext>
        <div class="card">
            <p-progressBar mode="indeterminate" [style]="{ height: '6px' }" />
        </div>
        <app-code [code]="code" selector="progress-bar-indeterminate-demo"></app-code>
    `,
    providers: [MessageService],
    standalone: false
})
export class IndeterminateDoc {
    code: Code = {
        basic: `<p-progressBar mode="indeterminate" [style]="{ height: '6px' }" />`,
        html: `<div class="card">
    <p-progressBar mode="indeterminate" [style]="{'height': '6px'}" />
</div>`,
        typescript: `import { Component } from '@angular/core';
import { MessageService } from '@stewie/primeng/api';
import { ProgressBarModule } from '@stewie/primeng/progressbar';

@Component({
    selector: 'progress-bar-indeterminate-demo',
    templateUrl: './progress-bar-indeterminate-demo.html',
    standalone: true,
    imports: [ProgressBarModule],
    providers: [MessageService]
})
export class ProgressBarIndeterminateDemo {}`
    };
}
