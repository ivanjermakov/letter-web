import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import {Message} from "@angular/compiler/src/i18n/i18n_ast"
import {environment} from "../../environments/environment"
import {generateHttpOptionsWithTokenHeader} from "../../constant"
import {Pageable} from "../util/Pageable"

@Injectable({
	providedIn: 'root'
})
export class MessageService {

	MESSAGE_URL = 'message'

	constructor(private http: HttpClient) {
	}

	get(token: string, conversationId: number, pageable: Pageable): Observable<Message[]> {
		return this.http.get<Message[]>(
			`${environment.API_URL}/${this.MESSAGE_URL}/get`,
			{
				params: pageable.toHttpParams()
					.append('conversationId', conversationId.toString()),
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

	delete(token: string, deleteMessages: Message[]): Observable<void> {
		return this.http.post<void>(
			`${environment.API_URL}/${this.MESSAGE_URL}/delete`,
			deleteMessages,
			generateHttpOptionsWithTokenHeader(token)
		)
	}

}
