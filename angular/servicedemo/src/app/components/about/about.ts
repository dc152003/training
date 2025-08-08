import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for Angular directives
import { Greetings } from '../../services/greetings';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']  // Corrected from styleUrl to styleUrls
})
export class About {
  _greetingsObj: Greetings;

  constructor(_greetingsREF: Greetings) {
    this._greetingsObj = _greetingsREF;
  }
}