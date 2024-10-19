import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCalculatorComponent } from './string-calculator.component';

describe('StringCalculatorComponent', () => {
  let component: StringCalculatorComponent;
  let fixture: ComponentFixture<StringCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TestCase 1: for Empty String return 0
  it('it should return 0 for the empty string',()=>{
    expect(component.add("")).toBe(0);
  })

  //TestCase 2: if just one number provided return the same number
  it("should return the same number if only one number provided",()=>{
  expect(component.add("2")).toBe(2);
  })

  //Testcase 3: if two numbers give its sum
  it("should return sum if its two number",()=>{
    expect(component.add("2,6")).toBe(8);
  })

  //Testcase 4: Allow the add method to handle any amount of numbers.
  it("should allow any amount of numbers.", () =>{
    expect(component.add("5,6,8,9,45,09,56,99,34,06,44")).toBe(321);
  })

  //Testcase 5:Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)
  it("should allow new line bettween numbers",() =>{
    expect(component.add("1\n2,3")).toBe(6);
    expect(component.add("1\n2\n3")).toBe(6);
    expect(component.add("10\n20,30")).toBe(60);
    expect(component.add("1,2\n3,4\n5")).toBe(15);
  })

  //Testcase 6:Support different delimiters
  it("should Support different delimiters",()=>{
    expect(component.add("//;\n1;2")).toBe(3);
  })

  //Testcase 7: Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".
  it('should throw an exception for negative numbers', () => {
    expect(() => component.add('1,-2')).toThrow(new Error('Negative numbers not allowed: -2'));
  });

  //Testcase 8: If there are multiple negative numbers, show all of them in the exception message, separated by commas.
  it('should throw an exception with all negative numbers listed', () => {
    expect(() => component.add('1,-2,3,-4')).toThrow(new Error('Negative numbers not allowed: -2, -4'));
  });
});
