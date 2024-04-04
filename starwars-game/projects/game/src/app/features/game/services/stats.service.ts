import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable, shareReplay } from 'rxjs';
import { StatDto } from '../../../core/models/stat.dto';

@Injectable({ providedIn: 'root' })
export class StatsService {
  private stats : StatDto[] = [
    {annee:2023,mois:1,nbPartiesGagnees:10,nbPartiesPerdues:5},
    {annee:2023,mois:2,nbPartiesGagnees:3,nbPartiesPerdues:6},
    {annee:2023,mois:2,nbPartiesGagnees:7,nbPartiesPerdues:7},
    {annee:2023,mois:4,nbPartiesGagnees:4,nbPartiesPerdues:8},
    {annee:2023,mois:5,nbPartiesGagnees:9,nbPartiesPerdues:5},
    {annee:2023,mois:6,nbPartiesGagnees:4,nbPartiesPerdues:1},
    {annee:2023,mois:7,nbPartiesGagnees:3,nbPartiesPerdues:5},
    {annee:2023,mois:8,nbPartiesGagnees:8,nbPartiesPerdues:4},
    {annee:2023,mois:9,nbPartiesGagnees:2,nbPartiesPerdues:5},
    {annee:2023,mois:10,nbPartiesGagnees:10,nbPartiesPerdues:0},
    {annee:2023,mois:11,nbPartiesGagnees:10,nbPartiesPerdues:5},
    {annee:2023,mois:12,nbPartiesGagnees:10,nbPartiesPerdues:5},
    {annee:2024,mois:1,nbPartiesGagnees:10,nbPartiesPerdues:5},
    {annee:2024,mois:2,nbPartiesGagnees:10,nbPartiesPerdues:5},
  ];
  private obs$ = new Observable<StatDto[]>(observer => {
    console.info('=> Appel du service de statistiques...');
    setTimeout(() => {
      observer.next(this.stats);
      observer.complete();
    }, 0);
  })/*.pipe(
    shareReplay(1)
  )*/;

  getAllStats(): Observable<StatDto[]>{
     return this.obs$
  }
  /*
  constructor(private httpClient: HttpClient) { }

  getAll(nbItems: number = 100): Observable<StatDto[]> {
    return this.httpClient.get<StatDto[]>(api.games.url + '?max=' + nbItems);
  }
  */
}
