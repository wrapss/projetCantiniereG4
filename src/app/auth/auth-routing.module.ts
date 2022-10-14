import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "../public/layout/layout.component";


const routes: Routes = [

    { path: '', component: LayoutComponent, children: [
            {
                path: 'user', loadChildren: () => import('./user/user.module')
                    .then(m => m.UserModule)
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
