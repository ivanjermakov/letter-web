import {Injectable} from '@angular/core'
import {TOKEN_HEADER_NAME} from "../../constant"

@Injectable({
	providedIn: 'root'
})
export class TokenService {

	constructor() {
	}

	getLocalStorageToken(): string | null {
		return localStorage.getItem(TOKEN_HEADER_NAME)
	}

	setToken(token: string): void {
		localStorage.setItem(TOKEN_HEADER_NAME, token)
	}

	removeLocalStorageToken(): void {
		localStorage.removeItem(TOKEN_HEADER_NAME)
	}

}
