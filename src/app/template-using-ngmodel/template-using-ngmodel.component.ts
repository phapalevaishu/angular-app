import { Component } from '@angular/core';

@Component({
  selector: 'app-template-using-ngmodel',
  templateUrl: './template-using-ngmodel.component.html',
  styleUrls: ['./template-using-ngmodel.component.css']
})
export class TemplateUsingNgmodelComponent {

  userObj :User=new User();

  ngOnInit(){

  }
  submitForm(Form:any){
    console.log(Form.value)
    console.log(this.userObj)
  }
}
export class User{
name:string="";
mobileno:string="";
email:string="";
city:string="";

}

