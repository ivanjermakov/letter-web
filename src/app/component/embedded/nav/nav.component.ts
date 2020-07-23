import {Component, Input, OnInit} from '@angular/core'

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

	@Input()
	tabIndex: number

	constructor() { }

	ngOnInit(): void {
	}

}
