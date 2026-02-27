import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetail {
  public readonly recipe = input.required<Recipe | undefined>();
}
