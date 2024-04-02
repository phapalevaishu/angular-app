import { Component } from '@angular/core';

@Component({
  selector: 'app-event-ex',
  templateUrl: './event-ex.component.html',
  styleUrls: ['./event-ex.component.css']
})
export class EventExComponent {
counter:number=0;
firstName:string="vaishnavi"

performAction(action:string){
 if(action=='increment'){
  this.counter++;
 }else{
  this.counter--
 }
}

printMesage(){
  console.log("Hello Everyone");
}

productprice:number=0;
quantity:number=0;
totalprice:number=0;

productpricechange(event:any){

  console.log("product price is ",event.target.value);
  if(event!=null && event.target !=null){
    this.productprice=event.target.value;
    this.totalprice=Number(this.productprice)*Number(this.quantity)
  }

}

quantitychange(event:any){
  console.log("quantity change");
  if(event!=null && event.target !=null){
    this.quantity=event.target.value;
    this.totalprice=Number(this.productprice)*Number(this.quantity)
  }

  
}
FNameChange(event:any){
  console.log(event.target.value)
  this.firstName=event.target.value;
}


  }

  