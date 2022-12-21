import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text-stock-x-y',
  templateUrl: './input-text-stock-x-y.component.html',
  styleUrls: ['./input-text-stock-x-y.component.scss']
})
export class InputTextStockXYComponent implements OnInit {
    @Input() label: string | undefined;
    @Input() type: string | undefined;

    constructor() { }

    ngOnInit(): void {
    }

}
