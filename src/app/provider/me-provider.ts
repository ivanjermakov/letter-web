import {Injectable} from '@angular/core'
import {User} from '../dto/User'
import {AuthService} from "../service/auth.service"
import {TokenService} from "../service/token.service"
import {ObservableData} from "../dto/ObservableData"
import {first} from "rxjs/operators"

@Injectable({
	providedIn: 'root'
})
export class MeProvider {

	me: ObservableData<User> = new ObservableData<User>()

	constructor(
		private authService: AuthService,
		private tokenService: TokenService
	) {
		this.initializeFromLocalStorage()
	}

	setMe(me: User): void {
		this.me.set(me)
	}

	setByToken(token: string): void {
		this.authService
			.authenticateByToken(token)
			.subscribe(
				(user: User) => {
					console.debug('me', user)
					this.setMe(user)
				},
				e => {
					console.debug(e)
					this.tokenService.removeLocalStorageToken()
				}
			)
	}

	onload(loaded: () => void, attempt: number = 1): void {
		this.me.observable
			.pipe(first())
			.subscribe(me => {
				if (attempt > 10 || me != null) {
					loaded()
				} else {
					setTimeout(() => this.onload(loaded, attempt + 1), 10)
				}
			})
	}

	private initializeFromLocalStorage(): void {
		const token = this.tokenService.getLocalStorageToken()
		if (token) {
			this.setByToken(token)
		}
	}

}
