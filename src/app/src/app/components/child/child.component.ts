import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() amount: number;
  @Output() amountChange = new EventEmitter();
  constructor() { }

  

  withdraw(){
    console.log("amount from parent: "+this.amount);
    this.amount -= 100;
    this.amountChange.emit(this.amount);
  }
  ngOnInit() {
  }

}

/** -- another form with setters and getters
 amountValue: number;
  @Output() amountChange = new EventEmitter();
  constructor() { }

  @Input()
  get amount(){
    return this.amountValue;
  }

  set amount(val) {
    this.amountValue=val;
    
  }

  withdraw(){
    console.log("amount from parent: "+this.amountValue);
    this.amountValue -= 100;
    this.amountChange.emit(this.amountValue);
  }
  ngOnInit() {
  }

 */
