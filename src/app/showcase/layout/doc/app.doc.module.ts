import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { AppCodeModule } from './app.code.component';
import { AppDevelopmentSection } from './app.developmentsection.component';
import { AppDoc } from './app.doc.component';
import { AppDocApiSection } from './app.docapisection.component';
import { AppDocApiTable } from './app.docapitable.component';
import { AppDocSectionNavComponent } from './app.docsection-nav.component';
import { AppDocSectionsComponent } from './app.docsection.component';
import { AppDocSectionTextComponent } from './app.docsectiontext.component';

@NgModule({
    imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TooltipModule, AppCodeModule, RouterModule],
    exports: [AppDocSectionTextComponent, AppDocApiSection, AppDocSectionNavComponent, AppDocSectionsComponent, AppDevelopmentSection, AppDoc, AppDocApiTable],
    declarations: [AppDocSectionTextComponent, AppDocApiSection, AppDocSectionNavComponent, AppDocSectionsComponent, AppDevelopmentSection, AppDoc, AppDocApiTable]
})
export class AppDocModule {}
