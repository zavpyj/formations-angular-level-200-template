import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "projects/game/src/environments/environment";
import { GameDtos } from "../../../core/models/game.dto";



@Injectable({
  providedIn: 'root'
  }
)
export class GamesInfrastructure {
  getAll(): Observable<GameDtos> {
    const games: GameDtos = [{ id: 1, title: 'Truc', success: true},{ id: 2, title: 'Machin', success: false}]
    return of(games);
  }
}
