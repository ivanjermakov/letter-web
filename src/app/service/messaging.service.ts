import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from "../../environments/environment"
import {NewMessage} from "../dto/NewMessage"
import {Message} from "@angular/compiler/src/i18n/i18n_ast"
import {EditMessage} from "../dto/EditMessage"
import {generateHttpOptionsWithTokenHeader} from "../../constant"
import {ObservableData} from "../dto/ObservableData"
import {Action} from "../dto/action/Action"

// TODO: deal with 2s lag between EventSource reconnections
@Injectable({
	providedIn: 'root'
})
export class MessagingService {

	actions: ObservableData<Action> = new ObservableData<Action>()

	private MESSAGING_URL = 'messaging'

	constructor(private http: HttpClient) {
	}

	getEvents(token: string): Observable<any> {
		return new Observable(o => {
			const es = new EventSource(`${environment.API_URL}/${this.MESSAGING_URL}/listen?Auth-Token=${token}`)
			es.addEventListener('message', (e: any) => {
				o.next(JSON.parse(e.data))
			})
		})
	}

	sendMessage(token: string, newMessage: NewMessage): Observable<Message> {
		return this.http.post<Message>(
			`${environment.API_URL}/${this.MESSAGING_URL}/send`,
			newMessage,
			generateHttpOptionsWithTokenHeader(token)
		)
	}

	editMessage(token: string, editMessage: EditMessage): Observable<Message> {
		return this.http.post<Message>(
			`${environment.API_URL}/${this.MESSAGING_URL}/edit`,
			editMessage,
			generateHttpOptionsWithTokenHeader(token)
		)
	}

}
