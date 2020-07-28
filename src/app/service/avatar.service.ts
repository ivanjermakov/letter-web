import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {environment} from "../../environments/environment"
import {Observable} from "rxjs"
import {Avatar} from "../dto/Avatar"
import {generateHttpOptionsWithTokenHeader} from "../../constant"

@Injectable({
	providedIn: 'root'
})
export class AvatarService {

	AVATAR_URL = 'avatar'

	constructor(
		private http: HttpClient
	) {}

	upload(token: string, file: File): Observable<Avatar> {
		let body = new FormData()
		body.append('avatar', file)
		return this.http.post<Avatar>(
			`${environment.API_URL}/${this.AVATAR_URL}/upload`,
			body,
			generateHttpOptionsWithTokenHeader(token)
		)
	}

	delete(token: string, avatarId: number): Observable<void> {
		return this.http.get<void>(
			`${environment.API_URL}/${this.AVATAR_URL}/delete`,
			{
				params: {
					avatarId: avatarId.toString()
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

}
