import {Component} from '@angular/core';
import {MeProvider} from "../../../provider/me-provider";
import {NavigationEnd, Router} from "@angular/router";
import {debounceTime, filter, map} from "rxjs/operators";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	constructor(
		private meProvider: MeProvider,
		private router: Router
	) {
		this.router.events
			.pipe(
				filter(e => e instanceof NavigationEnd),
				map((e: NavigationEnd) => e.url),
				debounceTime(100)
			)
			.subscribe((path: string) => {
					if (
						path !== '/' &&
						path !== '/im'
					) {
						this.router.navigate([path]);
						return;
					}

					meProvider.me
						.subscribe(me => {
							console.log(me)
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
