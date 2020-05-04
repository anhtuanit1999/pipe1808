import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bdate = new Date();
  name = 'anH TuaN';
  age = Promise.resolve(10);
  car = { price: 2000, color: 'red' };
  users = [
    { name: 'Tuan', age: 22, height: 170 },
    { name: 'Cuc', age: 21, height: 160 },
    { name: 'Tra', age: 20, height: 158 }
  ];
  propSort = 'name';
  setPropSort(type) {
    this.propSort = type;
  }
}
