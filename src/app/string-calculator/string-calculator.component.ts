import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-string-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './string-calculator.component.html',
  styleUrl: './string-calculator.component.scss'
})
export class StringCalculatorComponent { 
  public input: string = '';
  public result: number | string = 0;
  public error: string = ''

  public add(numbers: string): number {
  // Return 0 for empty input
  if (!numbers) {
    return 0;
  }

  // Default delimiters: comma and newline
  let delimiter = /,|\\n/; 
  if (numbers.startsWith('//')) {
    const parts = numbers.split('\\n', 2);
    delimiter = new RegExp(parts[0].substring(2)); // Extract custom delimiter
    numbers = parts[1];
  }

  // Splitting the string by delimiters and convert each part to a number
  const numberArray = numbers.split(delimiter).map(Number);
  const negatives = numberArray.filter(n => n < 0);

  // Check for negative numbers and throw an error if any are found
  if (negatives.length > 0) {
    this.result = '';
    this.error = `Negative numbers not allowed: ${negatives.join(', ')}`
    throw new Error(this.error);
  }

  this.error = '';
  // Using reduce to sum up the numbers
  return numberArray.reduce((sum, n) => sum + n, 0);
}
}
