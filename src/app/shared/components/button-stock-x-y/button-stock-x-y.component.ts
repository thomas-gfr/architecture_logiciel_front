import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-stock-x-y',
  templateUrl: './button-stock-x-y.component.html',
  styleUrls: ['./button-stock-x-y.component.scss']
})
export class ButtonStockXYComponent implements OnInit {
    @Input() label: string | undefined;

    @Output() onClick = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    public click(): void {
        this.onClick.emit();
    }
}
