import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-south',
  templateUrl: './south.html',
  styleUrls: ['./south.css'],
  imports: [NgFor],
})
export class South {
  office = [
    { city: 'Houston', call: '+1-713-555-1111', email: 'houston-office@example.com' },
    { city: 'Dallas', call: '+1-214-555-2222', email: 'dallas-office@example.com' },
    { city: 'Austin', call: '+1-512-555-3333', email: 'austin-office@example.com' },
    { city: 'San Antonio', call: '+1-210-555-4444', email: 'sanantonio-office@example.com' },
    { city: 'Tampa', call: '+1-813-555-5555', email: 'tampa-office@example.com' },
    { city: 'Orlando', call: '+1-407-555-6666', email: 'orlando-office@example.com' }
  ];
}