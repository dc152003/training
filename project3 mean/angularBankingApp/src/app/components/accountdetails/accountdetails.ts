import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accountdetails',
  imports: [NgFor],
  templateUrl: './accountdetails.html',
  styleUrl: './accountdetails.css'
})
export class Accountdetails {
 account = {
    name: 'John Doe',
    number: '1234567890',
    balance: 2500.75
  };

  transactions = [
    { date: '2025-08-20', description: 'Deposit', amount: 1000 },
    { date: '2025-08-18', description: 'Withdrawal', amount: -200 }
  ];

}
