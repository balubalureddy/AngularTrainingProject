import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  @Input() menuItem:any;
  @Output() handelOutput = new EventEmitter<string>();
  public name : string;
  public hideMenu: boolean=true;
  menuItems: any =[
    {name:"Home",link:"/"},
    {name:"About Us",link:"/About"},
    {name:"Contact",link:"/contact"},
  ]
  arr=[1,2,3,4]

  ngOnInit(): void {
    this.name = "Angular";
    console.log(this.menuItem);
    this.menuItems.push(this.menuItem);
  }

  buttonClick(e){
    this.handelOutput.emit("am from navbar");
  }

}
