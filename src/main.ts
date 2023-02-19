import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RandomService } from './random.service';
import { RandomComponent } from './random/random.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{title}}</h1>
  `,
})
export class App {
  title = 'Oto moja aplikacja';
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Moja aplikacja</h1>
    <app-random [max]="100"></app-random>
    <app-random [max]="200"></app-random>
    <app-list></app-list>
  `,
})
export class AppComponent {}

bootstrapApplication(App);
