import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-flex justify-content-between align-items-center',
    '(click)': 'onRecipeSelected()',
  },
})
export class RecipeItem {
  public readonly recipe = input.required<Recipe>();
  public readonly recipeSelected = output<void>();

  protected onRecipeSelected() {
    this.recipeSelected.emit();
  }
}
