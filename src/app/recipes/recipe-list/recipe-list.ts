import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
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
  protected readonly recipes = signal<Recipe[]>([
    {
      id: '1',
      name: 'A Test Recipe',
      description: 'This is simply a test!',
      imagePath: 'recipe1.jpg',
    },
    {
      id: '2',
      name: 'A Test Recipe',
      description: 'This is simply a test!',
      imagePath:
        'https://www.foodiesfeed.com/_next/image?url=https%3A%2F%2Fpub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev%2Flegacy%2Fwebp%2Fburger-with-melted-cheese-m-Y1i3jpYYJZYfOEfX5dX.webp&w=3840&q=75',
    },
  ]);
}
