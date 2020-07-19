import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app-about',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	constructor(
		private router: Router
	) {}

	ngOnInit(): void {
	}

	start() {
		this.router.navigate(['/'], {skipLocationChange: true})
	}

}
