import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Preview} from '../dto/Preview'
import {User} from '../dto/User'
import {environment} from "../../environments/environment"
import {generateHttpOptionsWithTokenHeader} from "../../constant"

@Injectable({
	providedIn: 'root'
})
export class SearchService {

	SEARCH_URL = 'search'

	constructor(private http: HttpClient) {
	}

	searchConversations(token: string, search: string): Observable<Preview[]> {
		return this.http.get<Preview[]>(
			`${environment.API_URL}/${this.SEARCH_URL}/conversations`,
			{
				params: {
					search
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

	searchUsers(token: string, search: string): Observable<User[]> {
		return this.http.get<User[]>(
			`${environment.API_URL}/${this.SEARCH_URL}/users`,
			{
				params: {
					search
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

}
