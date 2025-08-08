import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Greetings {
  cartValue =0;
  developerName ='Devaanshi';
  greetings(){
    alert('hey and welcome to our store '+this.developerName);
  }
}
