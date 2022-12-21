import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormProduitComponent } from './components/forms/form-produit/form-produit.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { TwoColsLayoutComponent } from './components/layout/two-cols-layout/two-cols-layout.component';
import { Directive1Directive } from './directives/directive-1.directive';
import { Directive2Directive } from './directives/directive-2.directive';
import { Pipe1Pipe } from './services/pipes/pipe-1.pipe';
import { Pipe2Pipe } from './services/pipes/pipe-2.pipe';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { InputTextStockXYComponent } from './components/forms/input-text-stock-x-y/input-text-stock-x-y.component';
import { ButtonStockXYComponent } from './components/button-stock-x-y/button-stock-x-y.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { TableComponent } from './components/table/table.component';
import {TableModule} from 'primeng/table';

const COMPONENTS = [
    FormProduitComponent, 
    MainLayoutComponent, 
    TwoColsLayoutComponent,
    InputTextStockXYComponent,  
    ButtonStockXYComponent,
    NavbarComponent,
    TableComponent,
];

const PRIME_NG = [
    InputTextModule,
    ButtonModule,
    MenubarModule,
    TableModule,

];  // all component of PrimeNG components

const DIRECTIVES = [
    Directive1Directive, 
    Directive2Directive,
];

const PIPES = [
    Pipe1Pipe,
    Pipe2Pipe
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ...PRIME_NG,
  ],
  providers: [...PIPES],
  declarations: [...COMPONENTS, ...DIRECTIVES, PIPES],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PRIME_NG, PIPES],
})
export class SharedModule {}
