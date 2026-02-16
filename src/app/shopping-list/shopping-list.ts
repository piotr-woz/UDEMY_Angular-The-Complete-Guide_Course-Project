import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ShoppingEdit } from './shopping-edit/shopping-edit';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEdit],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingList {
  ingredients = signal<Ingredient[]>([
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ]);
}
