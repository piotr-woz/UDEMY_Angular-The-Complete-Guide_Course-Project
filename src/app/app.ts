import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';

type FeatureNames = 'Recipes' | 'Shopping List';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Recipes, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly featureName = signal<FeatureNames>('Recipes');

  protected onSelectFeature(feature: string): void {
    this.featureName.set(feature as FeatureNames);
  }
}
