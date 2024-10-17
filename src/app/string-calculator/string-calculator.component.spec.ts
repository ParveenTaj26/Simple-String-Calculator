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
});
