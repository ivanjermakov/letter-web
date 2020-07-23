import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MeProvider} from "../../../provider/me-provider";
import {first} from "rxjs/operators";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	constructor(
		private router: Router,
		private meProvider: MeProvider
	) {}

	ngOnInit(): void {
	}

	start() {
		this.meProvider.me
			.pipe(first())
			.subscribe(me => {
				if (me) {
					this.router.navigate(['/im']);
				} else {
					this.router.navigate(['/auth']);
				}
			})
	}

}
