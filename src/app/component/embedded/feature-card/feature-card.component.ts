import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-feature-card',
	templateUrl: './feature-card.component.html',
	styleUrls: ['./feature-card.component.sass']
})
export class FeatureCardComponent implements OnInit {

	@Input()
	title: string

	@Input()
	image: string

	@Input()
	description: string

	@Input()
	reverse: boolean = false

	constructor() { }

	ngOnInit(): void {
	}

}
