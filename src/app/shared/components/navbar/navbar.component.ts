import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public items: MenuItem[] =[]

    constructor() { }


    ngOnInit() {
        this.items = [
            {
                label: 'Stock Y -> Z',
                routerLink: ['/']
            },
            {
                label: 'Accueil',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/home']
            },
            {
                label: 'Stocks',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/stocks']
            },
            {
                label: 'Produits',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/produits']
            }
        ];
    }


}
