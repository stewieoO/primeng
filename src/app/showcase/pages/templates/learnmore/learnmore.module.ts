import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateConfigurationModule } from 'src/app/showcase/layout/templates/templateconfiguration';
import { TemplateFeaturesModule } from 'src/app/showcase/layout/templates/templatefeatures';
import { TemplateFeaturesAnimationModule } from 'src/app/showcase/layout/templates/templatefeaturesanimation/templatefeaturesanimation';
import { TemplateFeaturesAnimationInlineModule } from 'src/app/showcase/layout/templates/templatefeaturesanimation/templatefeaturesanimationinline';
import { TemplateHeroModule } from 'src/app/showcase/layout/templates/templatehero/templatehero';
import { TemplateLicenseModule } from 'src/app/showcase/layout/templates/templatelicense';
import { TemplateRelatedModule } from 'src/app/showcase/layout/templates/templaterelated';
import { TemplateSeparatorModule } from 'src/app/showcase/layout/templates/templateseparator';
import { TemplateYoutubeModule } from 'src/app/showcase/layout/templates/templateyoutube';

import { LearnMoreRoutingModule } from './learnmore-routing.module';
import { LearnMoreComponent } from './learnmore.component';

@NgModule({
    declarations: [LearnMoreComponent],
    imports: [
        CommonModule,
        LearnMoreRoutingModule,
        TemplateHeroModule,
        TemplateSeparatorModule,
        TemplateYoutubeModule,
        TemplateLicenseModule,
        TemplateFeaturesModule,
        TemplateFeaturesAnimationModule,
        TemplateConfigurationModule,
        TemplateRelatedModule,
        TemplateFeaturesAnimationInlineModule
    ]
})
export class LearnMoreModule {}
