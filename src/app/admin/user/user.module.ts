import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UListComponent } from './u-list/u-list.component';
import { UEditComponent } from './u-edit/u-edit.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import {FormsModule} from "@angular/forms";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    UListComponent,
    UEditComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatTableModule,
        MatIconModule,
        FormsModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ]
})
export class UserModule { }
