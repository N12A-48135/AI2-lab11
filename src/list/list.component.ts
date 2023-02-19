import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <h2>Lista elementów</h2>
    <form (ngSubmit)="addItem()" #form="ngForm">
      <input type="text" [(ngModel)]="newItem" name="newItem" required>
      <button type="submit">Dodaj</button>
    </form>
    <ul>
      <li *ngFor="let item of items; let i = index">
        {{ item }} 
        <button (click)="removeItem(i)">Usuń</button>
      </li>
    </ul>
  `,
})
export class ListComponent {
  newItem: string = '';
  items: string[] = [];

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
