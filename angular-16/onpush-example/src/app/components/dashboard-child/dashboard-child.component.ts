import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardChildComponent implements OnInit, OnChanges {
  @Input() text: string = '';
  @Output() textChange = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('Se inicializo el dashboard-child');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Se cambio el dashboard-child', changes);
  }
  handleClick() {
    this.text = 'New text from child componente';
    this.textChange.emit(this.text);
  }
}
