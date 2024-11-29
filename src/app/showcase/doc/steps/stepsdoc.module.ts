import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { TicketService } from '@service/ticketservice';
import { ButtonModule } from '@stewie/primeng/button';
import { CardModule } from '@stewie/primeng/card';
import { CheckboxModule } from '@stewie/primeng/checkbox';
import { DropdownModule } from '@stewie/primeng/dropdown';
import { InputMaskModule } from '@stewie/primeng/inputmask';
import { InputTextModule } from '@stewie/primeng/inputtext';
import { StepsModule } from '@stewie/primeng/steps';
import { ToastModule } from '@stewie/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ConfirmationDemo } from './confirmationdemo';
import { ControlledDoc } from './controlleddoc';
import { ImportDoc } from './importdoc';
import { InteractiveDoc } from './interactivedoc';
import { PaymentDemo } from './paymentdemo';
import { PersonalDemo } from './personaldemo';
import { RoutingDoc } from './routingdoc';
import { SeatDemo } from './seatdemo';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, StepsModule, ToastModule, AppDocModule, FormsModule, DropdownModule, InputTextModule, InputMaskModule, CheckboxModule, CardModule, ButtonModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, InteractiveDoc, ConfirmationDemo, PaymentDemo, PersonalDemo, SeatDemo, RoutingDoc, ControlledDoc, AccessibilityDoc],
    exports: [AppDocModule],
    providers: [TicketService]
})
export class StepsDocModule {}
