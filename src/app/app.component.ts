import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './primeng.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrimeNGModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter = signal(0);

  onClick() {
    this.counter.update((x) => x + 1);
  }
}
