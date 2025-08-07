


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactus.html',
  styleUrls: ['./contactus.css']
})
export class Contact {
  contactList = [
    {
      officeName: 'Powai',
      contactNo: '+91-9876543210',
      email: 'powai@devaanshibank.com'
    },
    {
      officeName: 'Pune',
      contactNo: '+91-9123456780',
      email: 'pune@devaanshibank.com'
    },
    {
      officeName: 'Cyberhub',
      contactNo: '+91-9988776655',
      email: 'cyberhub@devaanshibank.com'
    },
    {
      officeName: 'New Jersey',
      contactNo: '+1-201-555-0123',
      email: 'newjersey@devaanshibank.com'
    },
    {
      officeName: 'Paris',
      contactNo: '+33-1-2345-6789',
      email: 'paris@devaanshibank.com'
    },
    {
      officeName: 'London',
      contactNo: '+44-20-7946-0958',
      email: 'london@devaanshibank.com'
    },
    {
      officeName: 'Berlin',
      contactNo: '+49-30-123456',
      email: 'berlin@devaanshibank.com'
    },
    {
      officeName: 'Tokyo',
      contactNo: '+81-3-1234-5678',
      email: 'tokyo@devaanshibank.com'
    },
    {
      officeName: 'Sydney',
      contactNo: '+61-2-9876-5432',
      email: 'sydney@devaanshibank.com'
    },
    {
      officeName: 'Toronto',
      contactNo: '+1-416-555-0199',
      email: 'toronto@devaanshibank.com'
    }
  ];
}