import { Component } from '@angular/core';

@Component({
  selector: 'app-templatr-driven-form',
  templateUrl: './templatr-driven-form.component.html',
  styleUrls: ['./templatr-driven-form.component.css']
})
export class TemplatrDrivenFormComponent {
  employeeList:any = [
    {empName:"John",designation:"Angular Developer",salary:50000},
    {empName:"Sam",designation:"Java Developer",salary:60000},
    {empName:"Mike",designation:"React JS Developer",salary:70000},
    {empName:"David",designation:"Devops Eng",salary:80000},
 ]
}
