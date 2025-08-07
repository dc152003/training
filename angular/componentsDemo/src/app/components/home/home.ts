import { NgFor } from '@angular/common';
import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home {
  ourServices=['insurance','brokerage','riskmanagment','invesment advisor','management consultant','asset managment','faculty']
}
