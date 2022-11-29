import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarteComponent} from "./carte/carte.component";
import {PanierComponent} from "./panier/panier.component";
import {PlatSemaineComponent} from "./plat-semaine/plat-semaine.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'platSemaine', pathMatch: 'full'},
      { path: 'home', component: CarteComponent},
      { path: 'panier', component: PanierComponent},
      { path: 'platSemaine', component: PlatSemaineComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
