import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GuidesDocModule } from '@doc/guides/guidesdoc.module';
import { AccessibilityDemoComponent } from './accessibility/accessibilitydemo.component';
import { CssLayerDemoComponent } from './csslayer/csslayerdemo.component';
import { GuidesRoutingModule } from './guides-routing.module';
import { TemplateUpdateDemoComponent } from './templateupdate/templateupdatedemo.component';

@NgModule({
    imports: [CommonModule, GuidesRoutingModule, GuidesDocModule],
    declarations: [AccessibilityDemoComponent, TemplateUpdateDemoComponent, CssLayerDemoComponent]
})
export class GuidesModule {}
