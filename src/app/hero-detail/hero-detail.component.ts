import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, Location, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-hero-detail',
	standalone: true,
	imports: [CommonModule, FormsModule, NgIf],
	templateUrl: './hero-detail.component.html',
	styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
	@Input() hero?: Hero;

	constructor(
		private readonly route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location,
	) {}

	ngOnInit() {
		this.getHero();
	}

	goBack(): void {
		this.location.back();
	}

	private getHero() {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
	}
}
