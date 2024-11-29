import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { AccessibilityDoc } from './accessibilitydoc';
import { AnimationDoc } from './animationdoc';
import { BasicDoc } from './basicdoc';
import { ClosableDoc } from './closabledoc';
import { DynamicDoc } from './dynamicdoc';
import { ImportDoc } from './importdoc';
import { InlineDoc } from './inlinedoc';
import { MessagesStyleDoc } from './messagesstyledoc';
import { MessageStyleDoc } from './messagestyledoc';
import { ServiceDoc } from './servicedoc';
import { SeverityDoc } from './severitydoc';
import { StaticDoc } from './staticdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, FormsModule, RouterModule, MessagesModule, ButtonModule, MessageModule, InputTextModule, AvatarModule, AppDocModule],
    declarations: [BasicDoc, ImportDoc, ClosableDoc, StaticDoc, DynamicDoc, ServiceDoc, SeverityDoc, InlineDoc, MessagesStyleDoc, AnimationDoc, MessageStyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MessagesDocModule {}
