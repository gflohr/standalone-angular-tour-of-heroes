import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, catchError, of } from 'rxjs';
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
		return this.http
			.get<Hero[]>(this.heroesUrl)
			.pipe(catchError(this.handleError<Hero[]>('getHeroes', [])));
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

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 *
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
