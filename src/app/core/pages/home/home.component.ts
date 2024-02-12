import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderComponent, CardComponent, FooterComponent],
})
export class HomeComponent {
  isOpen = false;

  open() {
    this.isOpen = !this.isOpen;
  }
}
