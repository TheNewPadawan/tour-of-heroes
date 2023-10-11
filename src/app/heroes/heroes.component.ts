import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero; // === selectedHero: Hero | undefined

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes() //return Observable di Hero[]
            .subscribe( //Imposta una funzione per quando arriva un Hero[]
                    res/*: Hero[]*/ => {
                      this.heroes = res;
    });
    /*this.heroService.getHeroes().subscribe(res => {
      this.heroes = res;
    });*/
  }
}
