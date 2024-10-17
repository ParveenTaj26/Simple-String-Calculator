import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-string-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './string-calculator.component.html',
  styleUrl: './string-calculator.component.scss'
})
export class StringCalculatorComponent { 
public add(number: string){
    if(!number){
      return 0;
    }

    // Splitting the string by commas and convert each part to a number
    let numberList = number.split(/[\n,]/).map(Number);

    // Using reduce to sum up the numbers
    const result : number = numberList.reduce((sum, current) => 
     sum + current
    ,0)
    console.log(result);
    return result;
  }
}
