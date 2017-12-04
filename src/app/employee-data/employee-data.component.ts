import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  empName:string;
  id:string;
  company:string;
  empObject:any =[];
  submit():void {
    
    let obj1:any={};
    obj1.name = this.empName;
    obj1.id=this.id;
    obj1.company=this.company;
    this.empObject.push(obj1);
    
this.empName ="";
this.id="";
this.company='';
  }

  deleteRowHomeForm(index:number):void{
    this.empObject.splice(index, 1);
  }

}
