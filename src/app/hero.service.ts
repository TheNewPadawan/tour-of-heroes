import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service'
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes: Observable<Hero[]> = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  
  getHero(id: number): Observable<Hero | undefined> {
    const hero: Hero | undefined = HEROES.find(h => h.id === id);
    if (hero === undefined) {
      this.messageService.add('HeroService: hero not found');
    } else {
      this.messageService.add(`HeroService: fetched hero id=${id}`);
    }
    return of(hero);
  }
}
