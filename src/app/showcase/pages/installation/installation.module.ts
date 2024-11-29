import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InstallationDocModule } from '@doc/installation/installationdoc.module';
import { InstallationComponent } from './installation';
import { InstallationRoutingModule } from './installation-routing.module';

@NgModule({
    imports: [CommonModule, InstallationRoutingModule, InstallationDocModule],
    declarations: [InstallationComponent]
})
export class InstallationModule {}
