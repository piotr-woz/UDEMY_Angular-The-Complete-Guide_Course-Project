import {
  Component,
  ChangeDetectionStrategy,
  signal,
  output,
  viewChild,
  ElementRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule],
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingEdit {
  public readonly ingredientAdded = output<Ingredient>();

  private readonly nameValueRef = viewChild<ElementRef<HTMLInputElement>>('nameInput');
  private readonly amountValueRef = viewChild<ElementRef<HTMLInputElement>>('amountInput');

  protected onAddIngredient(): void {
    this.ingredientAdded.emit({
      name: this.nameValueRef()?.nativeElement.value,
      amount: Number(this.amountValueRef()?.nativeElement.value),
    });
  }
}
