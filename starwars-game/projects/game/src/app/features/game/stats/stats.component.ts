import { NgIf, NgFor, AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'game-stats',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, DecimalPipe],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats$ = inject(StatsService).getAllStats();
}
