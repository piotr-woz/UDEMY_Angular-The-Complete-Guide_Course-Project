import { Component, ChangeDetectionStrategy, output } from '@angular/core';

type Feature = 'recipes' | 'shopping-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  public readonly featureSelected = output<Feature>();

  protected onSelectFeature(feature: Feature): void {
    this.featureSelected.emit(feature);
  }
}
