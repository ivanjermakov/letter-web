import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'
import {TokenService} from "../service/token.service"

@Injectable({
	providedIn: 'root'
})
export class TokenProvider {

	private tokenSubject: BehaviorSubject<string | null>
	token: Observable<string>

	constructor(
		private tokenService: TokenService
	) {
		this.tokenSubject = new BehaviorSubject<string | null>(this.tokenService.getLocalStorageToken())
		this.token = this.tokenSubject.asObservable()
	}

	setToken(token: string): void {
		this.tokenService.setToken(token)
		this.tokenSubject.next(token)
	}

}
