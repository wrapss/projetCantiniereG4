import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatSemaineComponent } from './plat-semaine/plat-semaine.component';
import { PanierComponent } from './panier/panier.component';
import { CarteComponent } from './carte/carte.component';
import {PublicRoutingModule} from "./public-routing.module";
import { LayoutComponent } from './layout/layout.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PlatSemaineComponent,
    PanierComponent,
    CarteComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
})
export class PublicModule { }
