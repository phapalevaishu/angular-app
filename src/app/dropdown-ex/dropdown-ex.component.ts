import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-ex',
  templateUrl: './dropdown-ex.component.html',
  styleUrls: ['./dropdown-ex.component.css']
})
export class DropdownExComponent implements OnInit {
  states=["option1","option2"];
  country:string="Country";
 
 constructor(){}

 ngOnInit(){

 }
setState(){
  if(this.country=="India"){
    this.states=["maharashtra","delhi","M.P","Karnataka"];
  }
  if(this.country=="US"){
    this.states=["Texas","California","Washington"];
  }
}
}
