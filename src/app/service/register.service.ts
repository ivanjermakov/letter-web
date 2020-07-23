import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {RegisterUser} from "../dto/RegisterUser"
import {Observable} from "rxjs"
import {environment} from "../../environments/environment"

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	REGISTER_URL = 'register'

	constructor(
		private http: HttpClient
	) {
	}

	register(registerUser: RegisterUser): Observable<void> {
		return this.http.post<void>(`${environment.API_URL}/${this.REGISTER_URL}`, registerUser)
	}

}
