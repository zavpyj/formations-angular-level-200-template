import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GameDto, GameDtos } from '../../../core/models/game.dto';

@Component({
  selector: 'game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTableComponent implements OnInit {
  //@Input() games: GameDto[] = [];
  @Input() games: GameDtos | null = [];

  constructor() { }

  ngOnInit(): void {
  }



}
