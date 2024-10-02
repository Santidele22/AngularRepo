import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-custom',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-custom.component.html',
  styleUrl: './input-custom.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCustomComponent {
  control = input.required<FormControl>();
  label = input.required<string>();
  type = input.required<string>();
  placeHolder = input.required<string>();
  errorMessage = input.required<string>();
}
