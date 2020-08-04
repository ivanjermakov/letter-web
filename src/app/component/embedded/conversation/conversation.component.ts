import {Component, HostListener, OnInit} from '@angular/core'
import {Message} from "../../../dto/Message"
import {ActivatedRoute, Router} from "@angular/router"
import {MessageService} from "../../../service/message.service"
import {TokenProvider} from "../../../provider/token-provider"
import {first} from "rxjs/operators"
import {Pageable} from "../../../util/Pageable"
import {MessageGroup} from "../../../dto/MessageGroup"

@Component({
	selector: 'app-conversation',
	templateUrl: './conversation.component.html',
	styleUrls: ['./conversation.component.sass']
})
export class ConversationComponent implements OnInit {

	messages: Message[] = []
	messageGroups: MessageGroup[] = []
	conversationId: number

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private messageService: MessageService,
		private tokenProvider: TokenProvider
	) {}

	ngOnInit(): void {
		this.route.queryParams
			.subscribe(params => {
				this.conversationId = params['c']
				if (!this.conversationId) {
					this.messages = []
					this.messageGroups = []
					return
				}

				this.tokenProvider.token
					.pipe(first())
					.subscribe(token => {
						this.messageService.get(token, this.conversationId, new Pageable(0, 100))
							.subscribe(messages => {
								console.log('set messages', messages)
								this.messages = messages
								this.messageGroups = this.messageService.groupMessagesBySender(this.messages)
							})
					})
			})
	}

	@HostListener('document:keydown.escape', ['$event']) onEscape() {
		if (this.conversationId) {
			this.router.navigate(['/im'])
		}
	}

}
