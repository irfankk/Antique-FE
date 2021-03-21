import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '', component: HomeComponent,
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        {path: 'list', component: ProductComponent},
        {path: 'whishlist', component: WhishlistComponent},
        {path: 'cart', component: CartComponent},
        {path: 'login', component: LoginComponent},
      ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
