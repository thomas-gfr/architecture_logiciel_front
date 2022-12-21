import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectedLayoutComponent } from './components/connected-layout/connected-layout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProduitComponent } from './components/pages/produit/produit.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { StocksComponent } from './components/pages/stocks/stocks.component';

const routes: Routes = [
    { path: '', component: SignInComponent },
    { path: '', component: ConnectedLayoutComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'produits', component: ProduitComponent },
        { path: 'stocks', component: StocksComponent }

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
