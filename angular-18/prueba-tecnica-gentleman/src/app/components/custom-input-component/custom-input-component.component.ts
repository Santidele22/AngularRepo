import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-input-component.component.html',
  styleUrl: './custom-input-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent {
  control = input.required<FormControl>();
  label = input.required<string>();
  type = input.required<string>();
  placeHolder = input.required<string>();
  errorMessage = input.required<string>();
}
