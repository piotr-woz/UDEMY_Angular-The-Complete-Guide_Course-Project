import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  imports: [RecipeList, RecipeDetail],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Recipes {
  protected readonly selectedRecipe = signal<Recipe | undefined>(undefined);

  protected onRecipeWasSelected(recipe: Recipe) {
    this.selectedRecipe.set(recipe);
  }
}
