import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: ` <app-code [code]="code" [hideToggleCode]="true"></app-code> `,
    standalone: false
})
export class ImportDoc {
    code: Code = {
        html: `import { AvatarModule } from '@stewie/primeng/avatar';
import { AvatarGroupModule } from '@stewie/primeng/avatargroup';`
    };
}
