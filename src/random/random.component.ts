import { Component, Input } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent {
  randomNumber: number;
  @Input() max: number;

  constructor(private randomService: RandomService) {}

  generateRandom() {
    this.randomNumber = this.randomService.getRandomNumber(this.max);
    this.randomNumber <= 0.5 * this.max
      ? (this.message = 'Mniejsza połowa wartości')
      : (this.message = 'Większa połowa wartości');
  }
}
