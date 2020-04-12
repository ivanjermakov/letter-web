import {Injectable} from '@angular/core';
import {LOCAL_STORAGE_TOKEN_NAME} from "../../constant";

@Injectable({
	providedIn: 'root'
})
export class TokenService {

	constructor() {
	}

	getLocalStorageToken(): string | null {
		return localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);
	}

	setToken(token: string): void {
		localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
	}

	removeLocalStorageToken(): void {
		localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
	}

}
