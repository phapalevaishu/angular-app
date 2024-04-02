import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodel-ex',
  templateUrl: './ngmodel-ex.component.html',
  styleUrls: ['./ngmodel-ex.component.css']
})
export class NgmodelExComponent {

  totalPrice:number=0;
  price:number=0;
  quantity:number=0;

  calcultateTotalPrice(){
    this.totalPrice = this.price * this.quantity;
  }
}
