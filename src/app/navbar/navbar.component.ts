import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public name : string;
  public hideMenu: boolean=true;
  menuItems: any =[
    {name:"Home",link:"/"},
    {name:"About Us",link:"/About"},
    {name:"Contact",link:"/contact"},
  ]

  ngOnInit(): void {
    this.name = "Angular";
  }

  buttonClick(e){
    this.hideMenu = !this.hideMenu;
  }

}
