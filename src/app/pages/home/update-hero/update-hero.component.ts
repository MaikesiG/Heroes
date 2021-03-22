import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateHeroComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
  }

}
