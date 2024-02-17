import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let fixture: ComponentFixture<HostComponent>;

  // This function returns the text element from the fixture.
  const getTextElement = (): HTMLElement =>
    fixture.debugElement.query(By.css('.text'))
      ? fixture.debugElement.query(By.css('.text')).nativeElement
      : null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardComponent],
      declarations: [HostComponent],
    });
  });

  it('should display the text passed in', () => {
    const text = 'my-text';
    const template = `<app-card [text]="'my-text'">Alert</app-card>`;
    fixture = createHostComponent(template);
    expect(getTextElement().textContent?.trim()).toBe(text);
  });

  it('should emit an event when the button delete is clicked', () => {
    const template = `<app-card [text]="'my-text'">Alert</app-card>`;
    fixture = createHostComponent(template);

    const cardComponent = fixture.debugElement.query(
      By.directive(CardComponent)
    ) as DebugElement;

    const button = cardComponent.query(By.css('.delete')) as DebugElement;
    let event$: string = '';
    cardComponent.componentInstance.onAction.subscribe((action: string) => {
      event$ = action;
    });

    // button.nativeElement.click();
    button.triggerEventHandler('click', null);
    expect(event$).toEqual('delete');
  });

  it('should emit an event when the edit button is clicked', () => {
    const template = `<app-card [text]="'my-text'">Alert</app-card>`;
    fixture = createHostComponent(template);

    const cardComponent = fixture.debugElement.query(
      By.directive(CardComponent)
    ) as DebugElement;

    const button = cardComponent.query(By.css('.edit')) as DebugElement;
    let event$: string = '';
    cardComponent.componentInstance.onAction.subscribe((action: string) => {
      event$ = action;
    });

    // button.nativeElement.click();
    button.triggerEventHandler('click', null);
    expect(event$).toEqual('edit');
  });
});

@Component({ selector: 'host-for-test', template: '' })
class HostComponent {}

//This function provides a way to create a component fixture with a template.
function createHostComponent(
  template: string
): ComponentFixture<HostComponent> {
  TestBed.overrideComponent(HostComponent, { set: { template: template } });
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return fixture as ComponentFixture<HostComponent>;
}
