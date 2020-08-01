import {Component, OnInit} from '@angular/core'
import {Message} from "../../../dto/Message"
import {ActivatedRoute} from "@angular/router"
import {MessageService} from "../../../service/message.service"
import {TokenProvider} from "../../../provider/token-provider"
import {first} from "rxjs/operators"
import {Pageable} from "../../../util/Pageable"
import {Observable} from "rxjs"

@Component({
	selector: 'app-conversation',
	templateUrl: './conversation.component.html',
	styleUrls: ['./conversation.component.sass']
})
export class ConversationComponent implements OnInit {

	messages: Observable<Message[]>

	constructor(
		private route: ActivatedRoute,
		private messageService: MessageService,
		private tokenProvider: TokenProvider
	) {}

	ngOnInit(): void {
		this.route.queryParams
			.pipe(first())
			.subscribe(params => {
				const conversationId = params['c']
				if (!conversationId) return

				this.tokenProvider.token
					.pipe(first())
					.subscribe(token => {
						this.messages = this.messageService.get(token, conversationId, new Pageable(0, 100))
					})
			})
	}


}
