import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutoFocusDemo } from './autofocusdemo';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: AutoFocusDemo }])],
    exports: [RouterModule]
})
export class AutoFocusDemoRoutingModule {}
