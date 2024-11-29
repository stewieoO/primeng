import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@stewie/primeng/button';
import { InputSwitchModule } from '@stewie/primeng/inputswitch';
import { RadioButtonModule } from '@stewie/primeng/radiobutton';
import { SelectButtonModule } from '@stewie/primeng/selectbutton';
import { SidebarModule } from '@stewie/primeng/sidebar';
import { AppConfigComponent } from './app.config.component';

@NgModule({
    imports: [CommonModule, FormsModule, SidebarModule, InputSwitchModule, ButtonModule, RadioButtonModule, SelectButtonModule],
    exports: [AppConfigComponent],
    declarations: [AppConfigComponent]
})
export class AppConfigModule {}
