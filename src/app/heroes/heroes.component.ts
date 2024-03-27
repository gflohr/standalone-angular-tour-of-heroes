import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
	selector: 'app-heroes',
	standalone: true,
	imports: [CommonModule, NgFor, HeroDetailComponent],
	templateUrl: './heroes.component.html',
	styleUrl: './heroes.component.css',
})
export class HeroesComponent {
	heroes = HEROES;
	selectedHero?: Hero;

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}
