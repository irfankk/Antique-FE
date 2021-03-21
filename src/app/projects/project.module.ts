import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProjectRoutingModule } from './project.routing.module';
import { Interceptor } from '../interceptors/ interceptor';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

import { HomeService } from '../services/home.service';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ProductComponent,
    WhishlistComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HomeService,
    // { provide: HTTP_INTERCEPTORS, useClass: Ints erceptor, multi: true }  
  ],
})
export class ProjectModule { }
