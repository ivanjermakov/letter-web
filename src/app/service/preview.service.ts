import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Preview} from '../dto/Preview'
import {Pageable} from "../util/Pageable"
import {environment} from "../../environments/environment"
import {generateHttpOptionsWithTokenHeader} from "../../constant"

@Injectable({
	providedIn: 'root'
})
export class PreviewService {

	PREVIEW_URL = 'preview'

	constructor(private http: HttpClient) {
	}

	all(token: string, pageable: Pageable): Observable<Preview[]> {
		return this.http.get<Preview[]>(
			`${environment.API_URL}/${this.PREVIEW_URL}/all`,
			{
				params: pageable.toHttpParams(),
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

	get(token: string, conversationId: number): Observable<Preview> {
		return this.http.get<Preview>(
			`${environment.API_URL}/${this.PREVIEW_URL}/get`,
			{
				params: {
					'conversationId': conversationId.toString()
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

}
