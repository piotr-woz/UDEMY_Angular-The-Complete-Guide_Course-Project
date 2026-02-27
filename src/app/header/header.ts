import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';

type Feature = 'recipes' | 'shopping-list';

@Component({
  selector: 'app-header',
  imports: [DropdownDirective],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  public readonly featureSelected = output<Feature>();

  protected onSelectFeature(feature: Feature): void {
    this.featureSelected.emit(feature);
  }
}
