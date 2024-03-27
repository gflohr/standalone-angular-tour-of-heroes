import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-heroes',
	standalone: true,
	imports: [CommonModule, NgFor, HeroDetailComponent],
	templateUrl: './heroes.component.html',
	styleUrl: './heroes.component.css',
})
export class HeroesComponent {
	heroes?: Hero[];
	selectedHero?: Hero;

	constructor(private heroService: HeroService) {}

	ngOnInit() {
		this.getHeroes()
	}

	private getHeroes() {
		this.heroes = this.heroService.getHeroes();
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}
