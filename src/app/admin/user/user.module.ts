import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UListComponent } from './u-list/u-list.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";

/* Renvoyés dans le général "app.module.ts" pour s'appliquer dans tous les modules de l'app
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
*/

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
  ]/*,
  providers: [
    // { provide: LOCALE_ID, useValue: 'fr-FR'},  // cf. ci-dessus
  ]*/
})
export class UserModule { }
