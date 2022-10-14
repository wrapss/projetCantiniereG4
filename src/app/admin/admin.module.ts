import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatSemaineComponent } from './plat-semaine/plat-semaine.component';
import { CarteComponent } from './carte/carte.component';
import { RecapCommandesComponent } from './recap-commandes/recap-commandes.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LayoutComponent } from './layout/layout.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    PlatSemaineComponent,
    CarteComponent,
    RecapCommandesComponent,
    ConfigurationComponent,
    LayoutComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatTableModule,
        MatTabsModule,
        MatIconModule
    ]
})
export class AdminModule { }
