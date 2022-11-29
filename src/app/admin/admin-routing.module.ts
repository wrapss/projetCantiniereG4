import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarteComponent} from "./carte/carte.component";
import {LayoutComponent} from "./layout/layout.component";
import {RecapCommandesComponent} from "./recap-commandes/recap-commandes.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {PlatSemaineComponent} from "./plat-semaine/plat-semaine.component";

const routes: Routes = [

  { path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'recapCommande', pathMatch: 'full'},
      { path: 'recapCommande', component: RecapCommandesComponent},
      { path: 'configuration', component: ConfigurationComponent},


          {
              path: 'user', loadChildren: () => import('./user/user.module')
                  .then(m => m.UserModule)
          },
       { path: 'carte', component: CarteComponent},
      { path: 'platSemaine', component:PlatSemaineComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
