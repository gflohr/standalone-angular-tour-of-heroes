import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-heroes',
	standalone: true,
	imports: [CommonModule, NgFor, RouterModule],
	templateUrl: './heroes.component.html',
	styleUrl: './heroes.component.css',
})
export class HeroesComponent {
	heroes?: Hero[];

	constructor(
		private readonly heroService: HeroService,
		private readonly messageService: MessageService,
	) {}

	ngOnInit() {
		this.getHeroes();
	}

	private getHeroes() {
		this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
	}
}
