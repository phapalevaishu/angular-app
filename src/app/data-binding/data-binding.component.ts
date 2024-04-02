import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  vaishnavi:string="data binding"
  firstName:string="sachin";
  lastName:string="tendulkar";
  employee:any={
    companyName:"google",
    designation:"software developer"
  }

  skill:string[]=["angular","html","css"];
  instalink:string="https://www.facebook.com/";
  message:string="Welcome";
  

    isbtndisabled:boolean=false;
  
  
}
