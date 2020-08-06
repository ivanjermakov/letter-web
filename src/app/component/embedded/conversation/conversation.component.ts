import {Component, HostListener, OnInit} from '@angular/core'
import {Message} from "../../../dto/Message"
import {ActivatedRoute, Router} from "@angular/router"
import {MessageService} from "../../../service/message.service"
import {TokenProvider} from "../../../provider/token-provider"
import {filter, first} from "rxjs/operators"
import {Pageable} from "../../../util/Pageable"
import {MessageGroup} from "../../../dto/MessageGroup"
import {CurrentConversationProvider} from "../../../provider/current-conversation-provider"
import {PreviewsProvider} from "../../../provider/previews-provider"

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
		private tokenProvider: TokenProvider,
		private currentConversationProvider: CurrentConversationProvider,
		private previewsProvider: PreviewsProvider,
	) {}

	ngOnInit(): void {
		this.route.queryParams
			.subscribe(params => {
				this.conversationId = params['c']
				this.currentConversationProvider.currentConversation.set(this.conversationId)

				if (this.conversationId) {
					this.tokenProvider.token.observable
						.pipe(
							first(),
							filter(t => !!t)
						)
						.subscribe(token => {
							this.messageService.get(token, this.conversationId, new Pageable(0, 100))
								.subscribe(messages => {
									this.messages = messages
									this.messageGroups = this.messageService.groupMessagesBySender(this.messages)
								})
						})
				} else {
					this.messages = []
					this.messageGroups = []
					return
				}
			})
	}

	@HostListener('document:keydown.escape', ['$event']) onEscape() {
		if (this.conversationId) {
			this.router.navigate(['/im'])
		}
	}

	@HostListener('document:keydown', ['$event']) onKeydown(event: KeyboardEvent) {
		if (event.ctrlKey) {
			const index = parseInt(event.key) - 1
			this.previewsProvider.previews.observable
				.pipe(
					first(),
					filter(p => !!p)
				)
				.subscribe(previews => {
					if (index !== null && index >= 0 && index < previews.length) {
						const id = previews[index].conversation.id
						this.router.navigate(['/im'], {queryParams: {'c': id}})
					}
				})
		}
	}

}
