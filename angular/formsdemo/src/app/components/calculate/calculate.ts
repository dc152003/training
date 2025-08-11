import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  imports: [FormsModule],
  templateUrl: './calculate.html',
  styleUrl: './calculate.css'
})
export class Calculate {
  firstNumber: number = 0;
  secondNumber: number = 0;
  additionResult: number = 0;
  subtractionResult: number = 0;
  multiplicationResult: number = 0;
  divisionResult: number = 0;

  calculate() {
    this.additionResult = this.firstNumber + this.secondNumber;
    this.subtractionResult = this.firstNumber - this.secondNumber;
    this.multiplicationResult = this.firstNumber * this.secondNumber;
    if (this.secondNumber !== 0) 
      this.divisionResult = this.firstNumber / this.secondNumber;
    else 
      this.divisionResult = NaN; // Handle division by zero
    
  }



}