import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-west',
  templateUrl: './west.html',
  styleUrls: ['./west.css'],
  imports: [NgFor],
})
export class West {
  office = [
    { city: 'Los Angeles', call: '+1-213-555-1111', email: 'la-office@example.com' },
    { city: 'San Francisco', call: '+1-415-555-2222', email: 'sf-office@example.com' },
    { city: 'Seattle', call: '+1-206-555-3333', email: 'seattle-office@example.com' },
    { city: 'Portland', call: '+1-503-555-4444', email: 'portland-office@example.com' },
    { city: 'San Diego', call: '+1-619-555-5555', email: 'sandiego-office@example.com' },
    { city: 'Las Vegas', call: '+1-702-555-6666', email: 'vegas-office@example.com' }
  ];
}