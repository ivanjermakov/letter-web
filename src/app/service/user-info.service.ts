import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {UserInfo} from '../dto/UserInfo'
import {environment} from "../../environments/environment"
import {generateHttpOptionsWithTokenHeader} from "../../constant"

@Injectable({
	providedIn: 'root'
})
export class UserInfoService {

	USER_INFO_URL = 'info'

	constructor(private http: HttpClient) {
	}

	get(token: string, userId: number): Observable<UserInfo> {
		return this.http.get<UserInfo>(
			`${environment.API_URL}/${this.USER_INFO_URL}`,
			{
				headers: {
					'Auth-Token': token
				},
				params: {
					userId: userId.toString()
				}
			}
		)
	}

	edit(token: string, userInfo: UserInfo): Observable<UserInfo> {
		return this.http.post<UserInfo>(
			`${environment.API_URL}/${this.USER_INFO_URL}`,
			userInfo,
			generateHttpOptionsWithTokenHeader(token)
		)
	}

}
