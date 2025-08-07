


import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrls: ['./home.css']  // Note: should be `styleUrls` not `styleUrl`
})


export class Home {
  service: string[] = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Services',
    'Technical Support'
  ];
}