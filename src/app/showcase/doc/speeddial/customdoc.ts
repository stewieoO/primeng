import { Component, OnInit } from '@angular/core';
import { Code } from '@domain/code';
import { MenuItem, MessageService } from '@stewie/primeng/api';

@Component({
    selector: 'custom-doc',
    template: `
        <app-docsectiontext>
            <p>SpeedDial sample with an outlined button, custom icons and <i>transitionDelay</i>.</p>
        </app-docsectiontext>
        <div class="card">
            <div style="height: 500px" class="flex justify-content-center">
                <p-toast />
                <p-speedDial [model]="items" direction="up" transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
            </div>
        </div>
        <app-code [code]="code" selector="speed-dial-custom-demo"></app-code>
    `,
    providers: [MessageService],
    standalone: false
})
export class CustomDoc implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }

    code: Code = {
        basic: `<p-speedDial
    [model]="items"
    direction="up"
    transitionDelay="80"
    showIcon="pi pi-bars"
    hideIcon="pi pi-times"
    buttonClassName="p-button-outlined" />`,

        html: `<div class="card">
    <div style="height: 500px" class="flex justify-content-center">
        <p-toast />
        <p-speedDial
            [model]="items"
            direction="up"
            transitionDelay="80"
            showIcon="pi pi-bars"
            hideIcon="pi pi-times"
            buttonClassName="p-button-outlined" />
    </div>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from '@stewie/primeng/api';
import { SpeedDialModule } from '@stewie/primeng/speeddial';
import { ToastModule } from '@stewie/primeng/toast';

@Component({
    selector: 'speed-dial-custom-demo',
    templateUrl: './speed-dial-custom-demo.html',
    standalone: true,
    imports: [SpeedDialModule, ToastModule],
    providers: [MessageService]
})
export class SpeedDialCustomDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'http://angular.io'
            }
        ];
    }
}`
    };
}
