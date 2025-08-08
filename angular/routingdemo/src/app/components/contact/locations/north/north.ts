import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-north',
  templateUrl: './north.html',
  imports: [NgFor],
  styleUrls: ['./north.css']
})
export class North {
  office = [
    { city: 'Chicago', call: '+1-312-555-1111', email: 'chicago-office@example.com' },
    { city: 'Detroit', call: '+1-313-555-2222', email: 'detroit-office@example.com' },
    { city: 'Minneapolis', call: '+1-612-555-3333', email: 'minneapolis-office@example.com' },
    { city: 'Milwaukee', call: '+1-414-555-4444', email: 'milwaukee-office@example.com' },
    { city: 'Cleveland', call: '+1-216-555-5555', email: 'cleveland-office@example.com' },
    { city: 'Buffalo', call: '+1-716-555-6666', email: 'buffalo-office@example.com' }
  ];
}