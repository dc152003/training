import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonList, IonLabel, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonThumbnail, IonChip, IonButtons } from '@ionic/angular/standalone';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonChip,IonHeader, IonToolbar, IonTitle, IonContent,IonButton,IonLabel,NgFor,IonIcon, IonCard, IonCardHeader,IonCardTitle, IonCardSubtitle,IonCardContent, RouterModule,RouterLink, IonButtons],
})
export class HomePage {
  constructor() {}
  developedBy='Devaanshi Chaturvedi';
  greetUser() {
    alert('Welcome to ShoppingApp!');
  }
  productList=[{pId:101,pName:'Bag',pBrand:'Nike',pPrice:1000},
  {pId:102,pName:'Shoes',pBrand:'Adidas',pPrice:2000},
  {pId:103,pName:'Watch',pBrand:'Titan',pPrice:3000},
  {pId:104,pName:'T-Shirt',pBrand:'Puma',pPrice:1500},
  {pId:105,pName:'Jeans',pBrand:'Levis',pPrice:2500}];
}