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
    let numberList = number.split(',').map(Number);
    const result : number = numberList.reduce((sum, current) => 
     sum + current
    ,0)
    return result;
  }
}
