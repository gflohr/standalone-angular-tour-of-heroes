import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class HeroService {
	private heroesUrl = 'api/heroes'; // URL to web API.

	constructor(
		private http: HttpClient,
		private readonly messageService: MessageService,
	) {}

	/** GET heroes from the server */
	getHeroes(): Observable<Hero[]> {
		return this.http.get<Hero[]>(this.heroesUrl);
	}
	getHero(id: number): Observable<Hero> {
		// For now, assume that a hero with the specified `id` always exists.
		// Error handling will be added in the next step of the tutorial.
		const hero = HEROES.find(h => h.id === id)!;
		this.log(`HeroService: fetched hero id=${id}`);
		return of(hero);
	}

	/** Log a HeroService message with the MessageService */
	private log(message: string) {
		this.messageService.add(`HeroService: ${message}`);
	}
}
