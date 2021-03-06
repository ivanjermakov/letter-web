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
import {MessagingService} from "../../../service/messaging.service"
import {NewMessage} from "../../../dto/NewMessage"
import {MeProvider} from "../../../provider/me-provider"
import {MessagingEventService} from "../../../service/messaging-event.service"
import {NewMessageAction} from "../../../dto/action/NewMessageAction"

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
		private meProvider: MeProvider,
		private currentConversationProvider: CurrentConversationProvider,
		private previewsProvider: PreviewsProvider,
		private messagingService: MessagingService,
		private messagingEventService: MessagingEventService
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
						.subscribe(token =>
							this.messageService.get(token, this.conversationId, new Pageable(0, 100))
								.subscribe(messages => {
									this.messages = messages
									this.messageGroups = this.messageService.groupMessagesBySender(this.messages)
								})
						)
				}
			})

		this.messagingEventService.onNewMessage.subscribe(action => {
			this.onNewMessage(action)
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

	onNewMessage(newMessageAction: NewMessageAction) {
		this.meProvider.me.observable.subscribe(me => {
			this.messages.unshift(newMessageAction.message)
			this.messageGroups = this.messageService.groupMessagesBySender(this.messages)
		})
	}

	send(messageText: string) {
		this.tokenProvider.token.observable
			.pipe(first())
			.subscribe(token => {
				this.meProvider.me.observable
					.pipe(first())
					.subscribe(me => {
						const newMessage = new NewMessage(
							me.id,
							this.conversationId,
							messageText,
							[],
							[],
							[]
						)
						this.messagingService.sendMessage(token, newMessage)
							.subscribe(message => {
								console.debug('send message successful', message)
							}, error => {
								console.error(error)
							})
					})
			})
	}

}
