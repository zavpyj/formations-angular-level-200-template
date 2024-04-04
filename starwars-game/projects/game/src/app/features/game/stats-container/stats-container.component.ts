import { StatsComponent } from './../stats/stats.component';
import { Component } from '@angular/core';

@Component({
  selector: 'game-stats-container',
  standalone: true,
  imports: [StatsComponent],
  templateUrl: './stats-container.component.html',
  styleUrl: './stats-container.component.css'
})
export class StatsContainerComponent {

}
