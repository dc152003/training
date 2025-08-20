import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAccordionGroup, IonAccordion,IonItem,IonLabel,IonCard,IonButton,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent, IonButton, IonIcon]
})
// export class ProductsPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }



export class ProductsPage {
  Mens = [
    { id: 1, name: 'T-Shirt', brand: 'Puma', price: 1200 },
    { id: 2, name: 'Jeans', brand: 'Levis', price: 2500 },
    { id: 3, name: 'Shoes', brand: 'Nike', price: 3000 },
    { id: 4, name: 'Watch', brand: 'Fossil', price: 4500 },
    { id: 5, name: 'Jacket', brand: 'Zara', price: 3500 }
  ];

  Womens = [
    { id: 6, name: 'Dress', brand: 'H&M', price: 2200 },
    { id: 7, name: 'Handbag', brand: 'Coach', price: 5000 },
    { id: 8, name: 'Heels', brand: 'Aldo', price: 2800 },
    { id: 9, name: 'Scarf', brand: 'Gucci', price: 1500 },
    { id: 10, name: 'Top', brand: 'Forever 21', price: 1300 }
  ];

  Kids = [
    { id: 11, name: 'Toy Car', brand: 'Hot Wheels', price: 800 },
    { id: 12, name: 'T-Shirt', brand: 'Gap Kids', price: 900 },
    { id: 13, name: 'Shoes', brand: 'Crocs', price: 1200 },
    { id: 14, name: 'Puzzle', brand: 'Ravensburger', price: 700 },
    { id: 15, name: 'Cap', brand: 'Disney', price: 600 }
  ];

  Electronics = [
    { id: 16, name: 'Smartphone', brand: 'Samsung', price: 25000 },
    { id: 17, name: 'Laptop', brand: 'Dell', price: 55000 },
    { id: 18, name: 'Headphones', brand: 'Sony', price: 4000 },
    { id: 19, name: 'Smartwatch', brand: 'Apple', price: 30000 },
    { id: 20, name: 'Tablet', brand: 'Lenovo', price: 18000 }
  ];
}

