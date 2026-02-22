import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-flex justify-content-between align-items-center',
  },
})
export class RecipeItem {
  public readonly recipe = input.required<Recipe>();
}

// click: 'onSelectedRecipe()',
