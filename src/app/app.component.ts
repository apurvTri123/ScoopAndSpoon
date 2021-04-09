import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scoopNspoon';
  pages: Array<{ title: string; component: any; }> = [];
  constructor( ) { }
  

}
