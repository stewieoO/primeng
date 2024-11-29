import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { ButtonModule } from '@stewie/primeng/button';
import { OverlayModule } from '@stewie/primeng/overlay';
import { AccessibilityDoc } from './accessibilitydoc';
import { AppendToDoc } from './appendtodoc';
import { AutoZIndexDoc } from './autozindexdoc';
import { BaseZIndexDoc } from './basezindexdoc';
import { OverlayBasicDemo } from './basicdoc';
import { EventsDoc } from './eventsdoc';
import { HideOnEscapeDoc } from './hideonescapedoc';
import { ImportDoc } from './importdoc';
import { ModeDoc } from './modedoc';
import { ResponsiveDoc } from './responsivedoc';
import { StyleDoc } from './styledoc';
import { TargetDoc } from './targetdoc';
import { OverlayTemplateDemo } from './templatedoc';
import { TransitionOptionsDoc } from './transitionoptionsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, OverlayModule, ButtonModule, AppDocModule],
    exports: [AppDocModule],
    declarations: [AppendToDoc, AutoZIndexDoc, BaseZIndexDoc, OverlayBasicDemo, EventsDoc, HideOnEscapeDoc, ImportDoc, ModeDoc, ResponsiveDoc, StyleDoc, TargetDoc, OverlayTemplateDemo, TransitionOptionsDoc, AccessibilityDoc]
})
export class OverlayDocModule {}
