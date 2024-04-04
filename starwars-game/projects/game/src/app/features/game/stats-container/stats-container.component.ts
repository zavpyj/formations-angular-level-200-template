import { StatsComponent } from './../stats/stats.component';
import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'game-stats-container',
  standalone: true,
  imports: [StatsComponent],
  templateUrl: './stats-container.component.html',
  styleUrl: './stats-container.component.css'
})
export class StatsContainerComponent {
  private readonly subscription = new Subscription();

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() { // ça fonctionne !
    console.info('---------')

    console.info('code synchrone')

    const obs$ = new Observable(observer => { // LAZY
      console.info('0. OBSERVABLE') // SYNC
      observer.next('COUCOU OBSERVABLE SYNC 1') // SYNC

      observer.next('COUCOU OBSERVABLE SYNC 2') // SYNC
      setTimeout(() => {
        observer.next('COUCOU OBSERVABLE ASYNC 2') // ASYNC
        observer.complete()
      }, 0);
    });
    let sub = obs$.subscribe({
      next: result => console.info(result),
      error: err => console.error(err),
      complete: () => console.info('FINI !!!')
    })
    this.subscription.add(sub)

    sub = obs$.subscribe({
      next: result => console.warn(result)
    }) // Chaque subscribe ré exécute la fonction de l'observable
    this.subscription.add(sub)

    console.info('********')
  }

}
