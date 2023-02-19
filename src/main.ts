import 'zone.js/dist/zone';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RandomComponent } from './random/random.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [RandomComponent, ListComponent],
  imports: [BrowserModule],
  providers: [],

})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

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