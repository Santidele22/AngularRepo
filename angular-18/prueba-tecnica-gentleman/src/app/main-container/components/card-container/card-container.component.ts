import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomInputComponent } from '@app/components';
import { CharacterModels } from '@app/models/character.models';
import { GlobalStore } from '@app/store';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainerComponent {
  character = input.required<CharacterModels>();
  readonly store = inject(GlobalStore);

  removeCharacter(id: number) {
    this.store.removeCharacter(id);
  }
}
