import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { CheckboxModule } from '@stewie/primeng/checkbox';
import { InputSwitchModule } from '@stewie/primeng/inputswitch';
import { ColorsDoc } from './accessibility/colorsdoc';
import { FormControlsDoc } from './accessibility/formcontrolsdoc';
import { IntroductionDoc } from './accessibility/introductiondoc';
import { SemanticHTMLDoc } from './accessibility/semantichtmldoc';
import { WAIARIADoc } from './accessibility/waiariadoc';
import { WCAGDoc } from './accessibility/wcagdoc';
import { BootstrapDoc } from './csslayer/bootstrapdoc';
import { NormalizeDoc } from './csslayer/normalizedoc';
import { ResetDoc } from './csslayer/resetdoc';
import { SpecificityDoc } from './csslayer/specificitydoc';
import { TailwindDoc } from './csslayer/tailwinddoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, RouterModule, FormsModule, CheckboxModule, InputSwitchModule],
    exports: [AppDocModule],
    declarations: [ColorsDoc, FormControlsDoc, IntroductionDoc, SemanticHTMLDoc, WAIARIADoc, WCAGDoc, SpecificityDoc, ResetDoc, TailwindDoc, BootstrapDoc, NormalizeDoc]
})
export class GuidesDocModule {}
