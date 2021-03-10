import { Component, OnInit } from '@angular/core';
import { Hero, HeroArg } from 'src/app/configs/type';
import { HeroService } from 'src/app/services/hero.service';
import Heroes from '../../configs/hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc'
  };
  heros: Hero[] = Heroes;
  // heroServe:HeroService;
  constructor(readonly heroServe:HeroService) {
    // this.heroServe = new HeroService()
    this.heros = this.heroServe.getHeros();
    console.log('heroServe', this.heroServe.getHeros())
   }

  ngOnInit(): void {
  }
  search() {
    console.log('this.serachParams:',this.searchParams);
  }

}
