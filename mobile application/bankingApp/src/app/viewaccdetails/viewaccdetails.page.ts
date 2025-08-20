import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-viewaccdetails',
  templateUrl: './viewaccdetails.page.html',
  styleUrls: ['./viewaccdetails.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ViewaccdetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
