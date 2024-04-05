import { GameDtos } from './../../../core/models/game.dto';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable, take } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GamesInfrastructure } from './games.infrastructure';

@Injectable()
export class GameService {
/*
  constructor(private httpClient: HttpClient) { }

  getAll(nbItems: number = 100): Observable<GameDto[]> {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems);
  }
*/
  private readonly infra = inject(GamesInfrastructure)
  getAll(nbItems: number = 100): Observable<GameDtos> {
    return this.infra.getAll()
      .pipe(take(nbItems));
  }
}
