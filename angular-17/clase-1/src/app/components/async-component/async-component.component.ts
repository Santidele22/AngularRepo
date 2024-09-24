import { Component, inject } from '@angular/core';
import { HttpSimulationService } from '../../services/http-simulation.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-async-component',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './async-component.component.html',
  styleUrl: './async-component.component.css',
})
export class AsyncComponentComponent {
  endpointSimulationService = inject(HttpSimulationService);
  data$ = this.endpointSimulationService.hittEndopoint();
}
