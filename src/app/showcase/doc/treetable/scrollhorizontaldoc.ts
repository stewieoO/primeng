import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Code } from '@domain/code';
import { NodeService } from '@service/nodeservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'scroll-horizontal-doc',
    template: `
        <app-docsectiontext>
            <p>Horizontal scrolling is enabled when the total width of columns exceeds table width.</p>
        </app-docsectiontext>
        <div class="card">
            <p-deferred-demo (load)="loadDemoData()">
                <p-tree-table
                    [value]="files"
                    [columns]="cols"
                    [scrollable]="true"
                    scrollHeight="200px"
                    [scrollable]="true"
                    [tableStyle]="{ 'min-width': '50rem' }"
                >
                    <ng-template pTemplate="colgroup" let-columns>
                        <colgroup>
                            <col *ngFor="let col of columns" style="width:500px" />
                        </colgroup>
                    </ng-template>
                    <ng-template pTemplate="header" let-columns>
                        <tr>
                            <th *ngFor="let col of columns">
                                {{ col.header }}
                            </th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
                        <tr [ttRow]="rowNode">
                            <td *ngFor="let col of columns; let i = index">
                                <p-tree-tableToggler [rowNode]="rowNode" *ngIf="i === 0"></p-tree-tableToggler>
                                {{ rowData[col.field] }}
                            </td>
                        </tr>
                    </ng-template>
                </p-tree-table>
            </p-deferred-demo>
        </div>
        <app-code [code]="code" selector="tree-table-scroll-horizontal-demo"></app-code>
    `,
})
export class ScrollHorizontalDoc {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    loadDemoData() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' },
        ];
    }

    code: Code = {
        basic: `<p-tree-table [value]="files" [columns]="cols" [scrollable]="true" scrollHeight="200px" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template pTemplate="colgroup" let-columns>
        <colgroup>
            <col *ngFor="let col of columns" style="width:500px" />
        </colgroup>
    </ng-template>
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-tree-tableToggler [rowNode]="rowNode" *ngIf="i === 0"></p-tree-tableToggler>
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-tree-table>`,

        html: `
<div class="card">
    <p-tree-table [value]="files" [columns]="cols" [scrollable]="true" scrollHeight="200px" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template pTemplate="colgroup" let-columns>
            <colgroup>
                <col *ngFor="let col of columns" style="width:500px" />
            </colgroup>
        </ng-template>
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-tree-tableToggler [rowNode]="rowNode" *ngIf="i === 0"></p-tree-tableToggler>
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-tree-table>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@service/nodeservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-scroll-horizontal-demo',
    templateUrl: './tree-table-scroll-horizontal-demo.html'
})
export class TreeTableScrollHorizontalDemo implements OnInit {
    files!: TreeNode[];

    cols!: Column[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((files) => (this.files = files));
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`,

        service: ['NodeService'],
    };
}
