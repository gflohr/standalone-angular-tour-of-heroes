import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-hero-detail',
	standalone: true,
	imports: [CommonModule, FormsModule, NgIf],
	templateUrl: './hero-detail.component.html',
	styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
	@Input() hero?: Hero;
}
