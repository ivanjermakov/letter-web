import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import {environment} from "../../environments/environment"
import {generateHttpOptionsWithTokenHeader} from "../../constant"
import {Pageable} from "../util/Pageable"
import {Message} from "../dto/Message"

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

	formatShortMessageText(message: Message): string {
		return message.text || '[attachment]'
	}

}
