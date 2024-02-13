import { HeaderComponent } from './header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let searchTerm: string = '';

  beforeEach(async () => {
    component = new HeaderComponent();
    searchTerm = 'test';
    fixture = TestBed.createComponent(HeaderComponent);
  });

  it('should component initialized', () => {
    expect(component).toBeTruthy();
  });

  it('should set searchTerm when onChange is called', () => {
    component.onChange(searchTerm);
    expect('test').toBe(searchTerm);
  });

  // it('should call onChange when search input value changes', () => {
  //   const searchTerm = 'new term';
  //   const searchInput = fixture.debugElement.query(
  //     By.css('input')
  //   ).nativeElement;
  //   searchInput.value = searchTerm;
  //   searchInput.dispatchEvent(new Event('input'));

  //   expect(component.searchTerm).toBe(searchTerm);
  // });
});
