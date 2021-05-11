import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleAngular';
  item = {name:"services",link:"/service"}

  sendOutput(e){
    alert(e);
  }
}
