import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('myfirstngapp');
  fn ="devaanshi";
  ln="chaturvedi";
  age=22;
  gender="female";
  email="dc@gmail.com";

  hobbies =['swimming','travelling','singing','watching movies','sleeping']

  greetUser(){
    alert('welcme bro');
  }


  addHobby(hobby: string){
    this.hobbies.push(hobby);
    //this.hobbies = [...this.hobbies, hobby];
  }
}





