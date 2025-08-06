import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// export class App {
//   protected readonly title = signal('data_in_angular');
//   aapName = 'Introduction to data in angular'
//   type_of_data = ['primitive data type','primitive data array','json object','array of json object']
//   productDetails = {pid:101, pname:'pepsi',pprice:100,pqty:2,pcategory:'softdrink'}
// }

export class App {
  protected readonly title = signal('data_in_angular');
  aapName = 'Introduction to data in angular';
  
  //array
  type_of_data = ['primitive data type','primitive data array','json object','array of json object'];

  //json dictionary
  productDetails = {
    pid: 101,
    pname: 'Pepsi',
    pprice: 100,
    pqty: 2,
    pcategory: 'Soft Drink'
  };


  //JSON object array
  productList = [
    { pid: 101, pname: 'Pepsi', pprice: 100, pqty: 2, pcategory: 'Soft Drink' },
    { pid: 102, pname: 'Coca-Cola', pprice: 95, pqty: 3, pcategory: 'Soft Drink' },
    { pid: 103, pname: 'Lays Chips', pprice: 50, pqty: 5, pcategory: 'Snacks' },
    { pid: 104, pname: 'Oreo', pprice: 60, pqty: 4, pcategory: 'Biscuits' },
    { pid: 105, pname: 'Maggi', pprice: 40, pqty: 6, pcategory: 'Instant Food' },
    { pid: 106, pname: 'Red Bull', pprice: 150, pqty: 1, pcategory: 'Energy Drink' },
    { pid: 107, pname: 'Amul Milk', pprice: 30, pqty: 10, pcategory: 'Dairy' },
    { pid: 108, pname: 'Parle-G', pprice: 25, pqty: 8, pcategory: 'Biscuits' },
    { pid: 109, pname: 'Tropicana Juice', pprice: 120, pqty: 2, pcategory: 'Juice' },
    { pid: 110, pname: 'Kurkure', pprice: 45, pqty: 7, pcategory: 'Snacks' }
  ];
}
