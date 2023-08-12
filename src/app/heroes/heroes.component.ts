import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [CommonModule, FormsModule, HeroDetailsComponent],
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'rohan',
  // };
  // heroes = HEROES;

  heroes = HEROES;
  selectedHero?: Hero;
  constructor() {}
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  ngOnInit() {}
}
