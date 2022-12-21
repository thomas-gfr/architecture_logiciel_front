import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    public items: any[] = [
        { name: 'Test 1', description: 'Description 1', price: 10 },
        { name: 'Test 2', description: 'Description 2', price: 20 },
        { name: 'Test 3', description: 'Description 3', price: 30 },
        { name: 'Test 4', description: 'Description 4', price: 40 },
        { name: 'Test 5', description: 'Description 5', price: 50 },
        { name: 'Test 6', description: 'Description 6', price: 60 },
        { name: 'Test 7', description: 'Description 7', price: 70 },
        { name: 'Test 8', description: 'Description 8', price: 80 },
        { name: 'Test 9', description: 'Description 9', price: 90 },
        { name: 'Test 10', description: 'Description 10', price: 100 },
    ];


    constructor() { }

    ngOnInit(): void {
    }

}
