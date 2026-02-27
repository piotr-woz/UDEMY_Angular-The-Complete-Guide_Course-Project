import { Directive, signal, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown',
  host: {
    '(document:click)': 'onToggleOpen($event)',
    '(keydown.escape)': 'close()',
  },
})
export class DropdownDirective {
  public readonly isOpen = signal(false);
  private readonly elementRef = inject(ElementRef);

  // close dropdown when pressing escape key
  close(): void {
    this.isOpen.set(false);
  }

  // toggle dropdown open/close state when clicking on the host element or outside of it
  onToggleOpen(event: Event): void {
    const target = event.target as Node;
    this.isOpen.set(this.elementRef.nativeElement.contains(target) ? !this.isOpen() : false);
  }
}
