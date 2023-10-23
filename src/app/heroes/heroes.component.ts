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

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
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
