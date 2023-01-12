import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductComponent } from './pages/product/product.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product', component: ProductComponent },
    ],
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'signIn', pathMatch: 'full' },
      { path: 'signIn', component: SignInComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    FooterComponent,
    CartComponent,
    ProductComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
