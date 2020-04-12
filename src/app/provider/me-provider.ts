import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../dto/User';
import {AuthService} from "../service/auth.service";
import {TokenService} from "../service/token.service";

@Injectable({
	providedIn: 'root'
})
export class MeProvider {

	private meSubject: BehaviorSubject<User | null>;
	me: Observable<User>;

	constructor(
		private authService: AuthService,
		private tokenService: TokenService
	) {
		this.meSubject = new BehaviorSubject<User | null>(null);
		this.me = this.meSubject.asObservable();
		this.initializeFromLocalStorage();
	}

	setMe(me: User): void {
		this.meSubject.next(me);
	}

	setByToken(token: string): void {
		this.authService
			.authenticateByToken(token)
			.subscribe(
				(user: User) => {
					console.debug('me', user);
					this.setMe(user);
				},
				e => {
					console.debug(e);
					this.tokenService.removeLocalStorageToken();
				}
			)
	}

	private initializeFromLocalStorage(): void {
		let token = this.tokenService.getLocalStorageToken();
		if (token) {
			this.setByToken(token);
		}
	}

}
