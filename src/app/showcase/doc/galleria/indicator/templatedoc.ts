import { Component, OnInit } from '@angular/core';
import { Code } from '@domain/code';
import { PhotoService } from '@service/photoservice';

@Component({
    selector: 'template-doc',
    template: `
        <app-docsectiontext>
            <p>Indicator content can be customized with the <i>indicator</i> template.</p>
        </app-docsectiontext>
        <div class="card">
            <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [responsiveOptions]="responsiveOptions" [containerStyle]="{ maxWidth: '640px' }">
                <ng-template pTemplate="item" let-item>
                    <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
                </ng-template>
                <ng-template pTemplate="indicator" let-index>
                    <span style="color: #e9ecef; cursor: pointer">
                        {{ index + 1 }}
                    </span>
                </ng-template>
            </p-galleria>
        </div>
        <app-code [code]="code" selector="galleria-indicator-template-demo"></app-code>
    `,
    standalone: false
})
export class TemplateDoc implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }

    code: Code = {
        basic: `<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '100%', 'margin-top': '2em' }">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="indicator" let-index>
        <span style="color: #e9ecef; cursor: pointer">
            {{ index + 1 }}
        </span>
    </ng-template>
</p-galleria>`,
        html: `
 <div class="card">
    <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '100%','margin-top': '2em' }">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template pTemplate="indicator" let-index>
            <span style="color: #e9ecef; cursor: pointer">
                {{index + 1}}
            </span>
        </ng-template>
    </p-galleria>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '@service/photoservice';

@Component({
    selector: 'galleria-indicator-template-demo',
    templateUrl: './galleria-indicator-template-demo.html'
})
export class GalleriaIndicatorTemplateDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,
        service: ['PhotoService']
    };
}
