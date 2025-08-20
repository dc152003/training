import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductsSerService } from './products-ser';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCard,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader]
})


export class BrowsePage implements OnInit {
  products: any[] = [];

  constructor(private productsSer: ProductsSerService) {}

  ngOnInit() {
    this.productsSer.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
