import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) text: string = '';
  @Output() onAction: EventEmitter<string> = new EventEmitter();

  onSubmit(action: string) {
    this.onAction.emit(action);
  }
}
