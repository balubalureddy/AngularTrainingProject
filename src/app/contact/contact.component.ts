import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  name:string="balu";
  empReg :any = {fname:"",lname:"",email:"",gender:"",loc:""}
  empRegistration:FormGroup =new FormGroup({
    "firstName":new FormControl(),
    "lastName": new FormControl(),
    "email": new FormControl(),
    "gender":new FormControl()
  });

  ngOnInit(): void {
  }

  submitEmpReg(){
    console.log(this.empRegistration.value);
  }

}
