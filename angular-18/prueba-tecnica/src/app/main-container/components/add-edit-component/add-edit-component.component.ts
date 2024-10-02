import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputCustomComponent } from '../../../global-components/input-custom/input-custom.component';
import { GlobalStare } from '@app/store';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { emptyCharacter } from '@app/models';

interface CharacterForm {
  name: FormControl<string>;
  image: FormControl<string>;
}

@Component({
  selector: 'app-add-edit-component',
  standalone: true,
  imports: [RouterLink, InputCustomComponent, ReactiveFormsModule],
  templateUrl: './add-edit-component.component.html',
  styleUrl: './add-edit-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditComponent {
  readonly store = inject(GlobalStare);
  id = input<number>();

  characterToEdit = computed(
    () => this.store.getAllCharacter(Number(this.id())) ?? emptyCharacter
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

      const methodToUse = this.id() ? 'updateCharacter' : 'addCharacter';

      this.store[methodToUse](character);

      this.characterForm().reset();
    }
  }
}
