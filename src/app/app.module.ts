import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StocksComponent } from './components/pages/stocks/stocks.component';
import { ProduitComponent } from './components/pages/produit/produit.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { ConnectedLayoutComponent } from './components/connected-layout/connected-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    ProduitComponent,
    HomeComponent,
    SignInComponent,
    ConnectedLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
