import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DetailsComponent,
    EditComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule
    ]
})
export class UserModule { }
