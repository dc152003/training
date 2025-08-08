import { Component } from '@angular/core';
import { Greetings } from '../../services/greetings';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  _greetingsObj: Greetings;     //object
  
    constructor(_greetingsREF:Greetings){
      this._greetingsObj=_greetingsREF;
    }
}
