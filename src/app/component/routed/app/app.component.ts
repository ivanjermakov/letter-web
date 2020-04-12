import {Component} from '@angular/core';
import {MeProvider} from "../../../provider/me-provider";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	constructor(
		private meProvider: MeProvider,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.router.events
			.pipe(
				filter(e => e instanceof NavigationEnd),
				map((e: NavigationEnd) => e.url)
			)
			.subscribe((path: string) => {
					if (path === '/auth' || path === '/register') return;

					meProvider.me
						.subscribe(me => {
							console.log(me);
							console.log(path);
							if (me) {
								if (path === '/') {
									this.router.navigate(['/im']);
								} else {
									this.router.navigate([path]);
								}
							} else {
								this.router.navigate(['/auth']);
							}
						})
				}
			);
	}

}
