// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-east',
//   imports: [],
//   templateUrl: './east.html',
//   styleUrl: './east.css'
// })
// export class East {

// }


import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-east', // change per component
  imports:[NgFor],
  templateUrl: './east.html', // change per component
  styleUrls: ['./east.css'] // change per component
})
export class East { // change per component
  office = [
    { city: 'New York', call: '+1-212-555-1234', email: 'ny-office@example.com' },
    { city: 'Boston', call: '+1-617-555-5678', email: 'boston-office@example.com' },
    { city: 'Philadelphia', call: '+1-215-555-9012', email: 'philly-office@example.com' },
    { city: 'Atlanta', call: '+1-404-555-3456', email: 'atlanta-office@example.com' },
    { city: 'Miami', call: '+1-305-555-7890', email: 'miami-office@example.com' },
    { city: 'Charlotte', call: '+1-704-555-2345', email: 'charlotte-office@example.com' }
  ];
}