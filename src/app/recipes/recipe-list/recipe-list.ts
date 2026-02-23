import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeList {
  public readonly recipeWasSelected = output<Recipe>();

  protected readonly recipes = signal<Recipe[]>([
    {
      id: '1',
      name: 'A Test Recipe 1',
      description: 'This is simply a test!',
      imagePath: 'recipe1.jpg',
    },
    {
      id: '2',
      name: 'A Test Recipe 2',
      description: 'This is simply a test!',
      imagePath: 'recipe1.jpg',
    },
    {
      id: '3',
      name: 'A Test Recipe 3',
      description: 'This is simply a test!',
      imagePath: 'recipe1.jpg',
    },
  ]);

  protected onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
