import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UListComponent } from './u-list/u-list.component';
import { UEditComponent } from './u-edit/u-edit.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    UListComponent,
    UEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class UserModule { }
