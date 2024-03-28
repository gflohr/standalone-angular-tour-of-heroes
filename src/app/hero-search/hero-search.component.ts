import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
	Observable,
	Subject,
	debounceTime,
	distinctUntilChanged,
	switchMap,
} from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-hero-search',
	standalone: true,
	imports: [CommonModule, RouterModule, NgFor],
	templateUrl: './hero-search.component.html',
	styleUrl: './hero-search.component.css',
})
export class HeroSearchComponent {
	heroes$!: Observable<Hero[]>;
	private searchTerms = new Subject<string>();

	constructor(private heroService: HeroService) {}

	// Push a search term into the observable stream.
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.heroes$ = this.searchTerms.pipe(
			// wait 300ms after each keystroke before considering the term
			debounceTime(300),

			// ignore new term if same as previous term
			distinctUntilChanged(),

			// switch to new search observable each time the term changes
			switchMap((term: string) => this.heroService.searchHeroes(term)),
		);
	}
}
