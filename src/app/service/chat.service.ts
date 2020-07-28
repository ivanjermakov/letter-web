import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import {environment} from "../../environments/environment"
import {Conversation} from "../dto/Conversation"
import {NewChat} from "../dto/NewChat"
import {generateHttpOptionsWithTokenHeader} from "../../constant"

@Injectable({
	providedIn: 'root'
})
export class ChatService {

	CHAT_URL = 'chat'

	constructor(
		private http: HttpClient
	) {}

	create(token: string, newChat: NewChat): Observable<Conversation> {
		return this.http.post<Conversation>(
			`${environment.API_URL}/${this.CHAT_URL}/create`,
			newChat,
			{
				headers: {
					'Auth-Token': token
				}
			}
		)
	}

	addMember(token: string, chatId: number, memberId: number): Observable<void> {
		return this.http.get<void>(
			`${environment.API_URL}/${this.CHAT_URL}/add`,
			{
				params: {
					chatId: chatId.toString(),
					memberId: memberId.toString()
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

	addMembers(token: string, chatId: number, memberIds: number[]): Observable<void> {
		return this.http.post<void>(
			`${environment.API_URL}/${this.CHAT_URL}/add`,
			memberIds,
			{
				params: {
					chatId: chatId.toString(),
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

	kickMember(token: string, chatId: number, memberId: number): Observable<void> {
		return this.http.get<void>(
			`${environment.API_URL}/${this.CHAT_URL}/kick`,
			{
				params: {
					chatId: chatId.toString(),
					memberId: memberId.toString()
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

	delete(token: string, conversationId: number) {
		return this.http.get(
			`${environment.API_URL}/${this.CHAT_URL}/delete`,
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
			`${environment.API_URL}/${this.CHAT_URL}/hide`,
			{
				params: {
					id: conversationId.toString()
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

}
