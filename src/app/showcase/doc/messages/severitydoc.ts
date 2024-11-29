import { Component, OnInit } from '@angular/core';
import { Code } from '@domain/code';
import { Message } from '@stewie/primeng/api';

@Component({
    selector: 'severity-doc',
    template: `
        <app-docsectiontext>
            <p>The <i>severity</i> option specifies the type of the message.</p>
        </app-docsectiontext>
        <div class="card">
            <p-messages [(value)]="messages" [enableService]="false" />
        </div>
        <app-code [code]="code" selector="messages-severity-demo"></app-code>
    `,
    standalone: false
})
export class SeverityDoc implements OnInit {
    messages: Message[] | undefined;

    ngOnInit() {
        this.messages = [
            { severity: 'info', detail: 'Info Message' },
            { severity: 'success', detail: 'Success Message' },
            { severity: 'warn', detail: 'Warning Message' },
            { severity: 'error', detail: 'Error Message' },
            { severity: 'secondary', detail: 'Secondary Message' },
            { severity: 'contrast', detail: 'Contrast Message' }
        ];
    }

    code: Code = {
        basic: `<p-messages [(value)]="messages" [enableService]="false" />`,
        html: `<div class="card">
    <p-messages [(value)]="messages" [enableService]="false" />
</div>`,
        typescript: `import { Component, OnInit } from '@angular/core';
import { Message } from '@stewie/primeng/api';
import { MessagesModule } from '@stewie/primeng/messages';

@Component({
    selector: 'messages-severity-demo',
    templateUrl: './messages-severity-demo.html',
    standalone: true,
    imports: [MessagesModule]
})
export class MessagesSeverityDemo implements OnInit {
    messages: Message[] | undefined;

    ngOnInit() {
        this.messages = [
            { severity: 'info', detail: 'Info Message' },
            { severity: 'success', detail: 'Success Message' },
            { severity: 'warn', detail: 'Warning Message' },
            { severity: 'error', detail: 'Error Message' },
            { severity: 'secondary', detail: 'Secondary Message' },
            { severity: 'contrast', detail: 'Contrast Message' }
        ];
    }
}`
    };
}
