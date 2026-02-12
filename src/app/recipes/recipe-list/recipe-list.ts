import { Component, signal } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipes = signal<Recipe[]>([]);
}
