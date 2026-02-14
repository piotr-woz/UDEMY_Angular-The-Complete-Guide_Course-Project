import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingEdit } from './shopping-edit/shopping-edit';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEdit],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingList {}
