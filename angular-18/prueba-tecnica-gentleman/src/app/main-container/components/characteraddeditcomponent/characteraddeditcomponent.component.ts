import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomInputComponent } from '@app/components';
import { emptyCharacter } from '@app/models/character.models';
import { GlobalStore } from '@app/store';

interface CharacterForm {
  name: FormControl<string>;
  image: FormControl<string>;
}

@Component({
  selector: 'app-characteraddeditcomponent',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './characteraddeditcomponent.component.html',
  styleUrl: './characteraddeditcomponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacteraddeditcomponentComponent {
  id = input<number>();

  readonly store = inject(GlobalStore);

  characterToEdit = computed(
    () => this.store.getCharacter(Number(this.id())) ?? emptyCharacter
  );

  characterForm: Signal<FormGroup> = computed(
    () =>
      new FormGroup<CharacterForm>({
        name: new FormControl(this.characterToEdit().name, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        image: new FormControl(this.characterToEdit().image, {
          nonNullable: true,
          validators: [Validators.required],
        }),
      })
  );
  onSubmit(): void {
    if (this.characterForm().valid) {
      const character = {
        ...(this.id() ? { id: Number(this.id()) } : {}),
        ...this.characterForm().value,
      };
      const METHOD_TO_USE = this.id() ? 'updateCharacter' : 'addCharacter';

      this.store[METHOD_TO_USE](character);

      this.characterForm().reset();
    }
  }
}
