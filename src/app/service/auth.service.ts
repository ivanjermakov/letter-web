import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "../dto/LoginUser";
import {Observable} from "rxjs";
import {Token} from "../dto/Token";
import {environment} from "../../environments/environment";
import {User} from "../dto/User";
import {TOKEN_HEADER_NAME} from "../../constant";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	AUTH_URL = 'auth';

	constructor(
		private http: HttpClient
	) {
	}

	authenticate(loginUser: LoginUser): Observable<Token> {
		return this.http.post<Token>(`${environment.API_URL}/${this.AUTH_URL}`, loginUser);
	}

	authenticateByToken(token: string): Observable<User> {
		return this.http.get<User>(
			`${environment.API_URL}/${this.AUTH_URL}`,
			{
				headers: {
					[TOKEN_HEADER_NAME]: token
				}
			}
		);
	}

	logoutAll(token: string): Observable<void> {
		return this.http.get<void>(`${environment.API_URL}/${this.AUTH_URL}/logoutAll`);
	}

	logout(token: string): Observable<void> {
		return this.http.get<void>(`${environment.API_URL}/${this.AUTH_URL}/logout`);
	}

}
