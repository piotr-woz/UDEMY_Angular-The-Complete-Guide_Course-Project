import { Component, ChangeDetectionStrategy, output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  public readonly featureSelected = output<string>();

  protected onSelectFeature(event: Event): void {
    this.featureSelected.emit((<HTMLAnchorElement>event.target).textContent);
  }
}
