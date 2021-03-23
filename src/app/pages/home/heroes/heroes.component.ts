import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Hero, HeroArg } from 'src/app/configs/type';
import { HeroService } from 'src/app/services/hero.service';
import { WindowService } from 'src/app/services/window.service';
import Heroes from '../../../configs/hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc'
  };
  showSpin = false;
  heroes: Hero[] = Heroes;
  // heroServe:HeroService;
  constructor(
    private heroServe:HeroService,
    private cdr: ChangeDetectorRef,
    private windowServe:WindowService,) {
    // this.heroServe = new HeroService()
    // console.log('heroServe', this.heroServe.heroes())
   }

  ngOnInit(): void {
    // this.heroServe.heroes();
    this.getList();
    // console.log('heroServe', this.heroServe.heroes())
  }
  search() {
    console.log('this.serachParams:',this.searchParams);
    this.getList();
  }

  getList() {
    this.showSpin = true;
    this.heroServe.heroes(this.searchParams).subscribe(heroes => {
      console.log('data', heroes);
      this.heroes = heroes;
      this.showSpin = false;
      this.cdr.markForCheck();
      // setTimeout(() => {
      //   this.showSpin = false;
      //   this.cdr.markForCheck();
      // }, 1000);
    }, ()=>{
      this.showSpin = false;
      this.cdr.markForCheck();
    });
  }
  delHero(id:string) {
    const confirm = this.windowServe.confirm('sure to delete?');
    if(confirm) {
      this.heroServe.delHero(id).subscribe(() => {
        this.windowServe.alert('delete succefully');
        this.getList();
      });
    }

  }
  reset() {
    this.searchParams = {
      name: '',
      job: '',
      sort: 'desc'
    };
    this.getList();
  }

 }
