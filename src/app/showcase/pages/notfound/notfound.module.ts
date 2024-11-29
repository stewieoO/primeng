import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@stewie/primeng/button';
import { NotFoundRoutingModule } from './notfound-routing.module';
import { NotFoundComponent } from './notfound.component';

@NgModule({
    imports: [CommonModule, NotFoundRoutingModule, ButtonModule],
    declarations: [NotFoundComponent]
})
export class NotFoundModule {}
