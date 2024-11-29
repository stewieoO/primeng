import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { BenefitsDoc } from './benefitsdoc';
import { ClaDoc } from './cladoc';
import { CommunicationDoc } from './communicationdoc';
import { HelpNeededDoc } from './helpneededdoc';
import { IntroductionDoc } from './introductiondoc';
import { KeyPointsDoc } from './keypoints';
import { PathwayDoc } from './pathwaydoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule],
    declarations: [IntroductionDoc, HelpNeededDoc, KeyPointsDoc, CommunicationDoc, PathwayDoc, BenefitsDoc, ClaDoc],
    exports: [AppDocModule]
})
export class ContributionDocModule {}
