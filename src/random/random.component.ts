import { Component, Input } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent {
  randomNumber: number;
  message: string;
  @Input() max: number;

  constructor(private randomService: RandomService) {}

  generateRandom() {
    this.randomNumber = this.randomService.getRandomNumber(this.max);
    this.message =
      this.randomNumber <= 0.5 * this.max
        ? 'Mniejsza połowa wartości'
        : 'Większa połowa wartości';
  }
}
