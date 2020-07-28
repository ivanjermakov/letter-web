import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import {Conversation} from "../dto/Conversation"
import {environment} from "../../environments/environment"
import {generateHttpOptionsWithTokenHeader} from "../../constant"

@Injectable({
	providedIn: 'root'
})
export class ConversationService {

	CONVERSATION_URL = 'conversation'

	constructor(
		private http: HttpClient
	) {}

	create(token: string, withLogin: string): Observable<Conversation> {
		return this.http.get<Conversation>(
			`${environment.API_URL}/${this.CONVERSATION_URL}/create`,
			{
				params: {
					with: withLogin
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

	delete(token: string, conversationId: number) {
		return this.http.get(
			`${environment.API_URL}/${this.CONVERSATION_URL}/delete`,
			{
				params: {
					id: conversationId.toString()
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

	hide(token: string, conversationId: number) {
		return this.http.get(
			`${environment.API_URL}/${this.CONVERSATION_URL}/hide`,
			{
				params: {
					id: conversationId.toString()
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

}
