import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero;
  constructor() {}

  ngOnInit() {}
}
