import { CommonModule } from '@angular/common';
import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, inject, Input, NgModule, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem, SharedModule } from '@stewie/primeng/api';
import { BaseComponent } from '@stewie/primeng/basecomponent';
import { ChevronRightIcon, HomeIcon } from '@stewie/primeng/icons';
import { TooltipModule } from '@stewie/primeng/tooltip';
import { BreadcrumbItemClickEvent } from './breadcrumb.interface';
import { BreadCrumbStyle } from './style/breadcrumbstyle';

/**
 * Breadcrumb provides contextual information about page hierarchy.
 * @group Components
 */
@Component({
    selector: 'p-breadcrumb',
    imports: [CommonModule, RouterModule, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule],
    template: `
        <nav [class]="styleClass" [ngStyle]="style" [ngClass]="'p-breadcrumb p-component'" [attr.data-pc-name]="'breadcrumb'" [attr.data-pc-section]="'root'">
            <ol [attr.data-pc-section]="'menu'" class="p-breadcrumb-list">
                <li
                    [class]="home.styleClass"
                    [attr.id]="home.id"
                    [ngClass]="{ 'p-breadcrumb-home-item': true, 'p-disabled': home.disabled }"
                    [ngStyle]="home.style"
                    *ngIf="home"
                    pTooltip
                    [tooltipOptions]="home.tooltipOptions"
                    [attr.data-pc-section]="'home'"
                >
                    <a
                        [href]="home.url ? home.url : null"
                        *ngIf="!home.routerLink"
                        [attr.aria-label]="homeAriaLabel"
                        class="p-breadcrumb-item-link"
                        (click)="onClick($event, home)"
                        [target]="home.target"
                        [attr.title]="home.title"
                        [attr.tabindex]="home.disabled ? null : '0'"
                    >
                        <span *ngIf="home.icon" class="p-breadcrumb-item-icon" [ngClass]="home.icon" [ngStyle]="home?.style"></span>
                        <HomeIcon *ngIf="!home.icon" [styleClass]="'p-breadcrumb-item-icon'" />
                        <ng-container *ngIf="home.label">
                            <span *ngIf="home.escape !== false; else htmlHomeLabel" class="p-breadcrumb-item-label">{{ home.label }}</span>
                            <ng-template #htmlHomeLabel><span class="p-breadcrumb-item-label" [innerHTML]="home.label"></span></ng-template>
                        </ng-container>
                    </a>
                    <a
                        *ngIf="home.routerLink"
                        [routerLink]="home.routerLink"
                        [attr.aria-label]="homeAriaLabel"
                        [queryParams]="home.queryParams"
                        [routerLinkActiveOptions]="home.routerLinkActiveOptions || { exact: false }"
                        class="p-breadcrumb-item-link"
                        (click)="onClick($event, home)"
                        [target]="home.target"
                        [attr.title]="home.title"
                        [attr.tabindex]="home.disabled ? null : '0'"
                        [fragment]="home.fragment"
                        [queryParamsHandling]="home.queryParamsHandling"
                        [preserveFragment]="home.preserveFragment"
                        [skipLocationChange]="home.skipLocationChange"
                        [replaceUrl]="home.replaceUrl"
                        [state]="home.state"
                    >
                        <span *ngIf="home.icon" class="p-breadcrumb-item-icon" [ngClass]="home.icon" [ngStyle]="home.iconStyle"></span>
                        <HomeIcon *ngIf="!home.icon" [styleClass]="'p-breadcrumb-item-icon'" />
                        <ng-container *ngIf="home.label">
                            <span *ngIf="home.escape !== false; else htmlHomeRouteLabel" class="p-breadcrumb-item-label">{{ home.label }}</span>
                            <ng-template #htmlHomeRouteLabel><span class="p-breadcrumb-item-label" [innerHTML]="home.label"></span></ng-template>
                        </ng-container>
                    </a>
                </li>
                <li *ngIf="model && home" class="p-breadcrumb-separator" [attr.data-pc-section]="'separator'">
                    <ChevronRightIcon *ngIf="!separator" />
                    <ng-template *ngTemplateOutlet="separator"></ng-template>
                </li>
                <ng-template ngFor let-menuitem let-end="last" [ngForOf]="model">
                    <li
                        [class]="menuitem.styleClass"
                        [attr.id]="menuitem.id"
                        [ngStyle]="menuitem.style"
                        [ngClass]="{ 'p-breadcrumb-item': true, 'p-disabled': menuitem.disabled }"
                        pTooltip
                        [tooltipOptions]="menuitem.tooltipOptions"
                        [attr.data-pc-section]="'menuitem'"
                    >
                        @if (item) {
                            <ng-template *ngTemplateOutlet="item; context: { $implicit: menuitem }"></ng-template>
                        } @else {
                            <a
                                *ngIf="!menuitem?.routerLink"
                                [attr.href]="menuitem?.url ? menuitem?.url : null"
                                class="p-breadcrumb-item-link"
                                (click)="onClick($event, item)"
                                [target]="menuitem?.target"
                                [attr.title]="menuitem?.title"
                                [attr.tabindex]="menuitem?.disabled ? null : '0'"
                            >
                                <ng-container *ngIf="!item">
                                    <span *ngIf="menuitem?.icon" class="p-breadcrumb-item-icon" [ngClass]="menuitem?.icon" [ngStyle]="menuitem?.iconStyle"></span>
                                    <ng-container *ngIf="menuitem?.label">
                                        <span *ngIf="menuitem?.escape !== false; else htmlLabel" class="p-breadcrumb-item-label'">{{ menuitem?.label }}</span>
                                        <ng-template #htmlLabel><span class="p-breadcrumb-item-label'" [innerHTML]="menuitem?.label"></span></ng-template>
                                    </ng-container>
                                </ng-container>
                            </a>
                            <a
                                *ngIf="menuitem?.routerLink"
                                [routerLink]="menuitem?.routerLink"
                                [queryParams]="menuitem?.queryParams"
                                [routerLinkActiveOptions]="menuitem?.routerLinkActiveOptions || { exact: false }"
                                class="p-breadcrumb-item-link"
                                (click)="onClick($event, item)"
                                [target]="menuitem?.target"
                                [attr.title]="menuitem?.title"
                                [attr.tabindex]="menuitem?.disabled ? null : '0'"
                                [fragment]="menuitem?.fragment"
                                [queryParamsHandling]="menuitem?.queryParamsHandling"
                                [preserveFragment]="menuitem?.preserveFragment"
                                [skipLocationChange]="menuitem?.skipLocationChange"
                                [replaceUrl]="menuitem?.replaceUrl"
                                [state]="menuitem?.state"
                            >
                                <span *ngIf="menuitem?.icon" class="p-breadcrumb-item-icon" [ngClass]="menuitem?.icon" [ngStyle]="menuitem?.iconStyle"></span>
                                <ng-container *ngIf="menuitem?.label">
                                    <span *ngIf="menuitem?.escape !== false; else htmlRouteLabel" class="p-breadcrumb-item-label'">{{ menuitem?.label }}</span>
                                    <ng-template #htmlRouteLabel><span class="p-breadcrumb-item-label'" [innerHTML]="menuitem?.label"></span></ng-template>
                                </ng-container>
                            </a>
                        }
                    </li>
                    <li *ngIf="!end" class="p-breadcrumb-separator" [attr.data-pc-section]="'separator'">
                        <ChevronRightIcon *ngIf="!separator" />
                        <ng-template *ngTemplateOutlet="separator"></ng-template>
                    </li>
                </ng-template>
            </ol>
        </nav>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [BreadCrumbStyle]
})
export class Breadcrumb extends BaseComponent implements AfterContentInit {
    /**
     * An array of menuitems.
     * @group Props
     */
    @Input() model: MenuItem[] | undefined;
    /**
     * Inline style of the component.
     * @group Props
     */
    @Input() style: { [klass: string]: any } | null | undefined;
    /**
     * Style class of the component.
     * @group Props
     */
    @Input() styleClass: string | undefined;
    /**
     * MenuItem configuration for the home icon.
     * @group Props
     */
    @Input() home: MenuItem | undefined;
    /**
     * Defines a string that labels the home icon for accessibility.
     * @group Props
     */
    @Input() homeAriaLabel: string | undefined;
    /**
     * Fired when an item is selected.
     * @param {BreadcrumbItemClickEvent} event - custom click event.
     * @group Emits
     */
    @Output() onItemClick: EventEmitter<BreadcrumbItemClickEvent> = new EventEmitter<BreadcrumbItemClickEvent>();

    _componentStyle = inject(BreadCrumbStyle);

    constructor(private router: Router) {
        super();
    }

    onClick(event: MouseEvent, item: MenuItem) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url && !item.routerLink) {
            event.preventDefault();
        }

        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }

        this.onItemClick.emit({
            originalEvent: event,
            item: item
        });
    }

    onHomeClick(event: MouseEvent | any) {
        if (this.home) {
            this.onClick(event, this.home);
        }
    }

    /**
     * Defines template option for item.
     * @group Templates
     */
    @ContentChild('item') item: TemplateRef<any> | undefined;

    /**
     * Defines template option for separator.
     * @group Templates
     */
    @ContentChild('separator') separator: TemplateRef<any> | undefined;
}

@NgModule({
    imports: [Breadcrumb, SharedModule],
    exports: [Breadcrumb, SharedModule]
})
export class BreadcrumbModule {}
