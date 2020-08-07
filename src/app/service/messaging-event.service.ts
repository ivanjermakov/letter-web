import {EventEmitter, Injectable} from '@angular/core'
import {MessagingService} from "./messaging.service"
import {Action} from "../dto/action/Action"
import {ActionType} from "../dto/enum/ActionType"
import {ConversationReadAction} from "../dto/action/ConversationReadAction"
import {MessageEditAction} from "../dto/action/MessageEditAction"
import {NewMessageAction} from "../dto/action/NewMessageAction"

@Injectable({
	providedIn: 'root'
})
export class MessagingEventService {

	onConversationRead: EventEmitter<ConversationReadAction> = new EventEmitter<ConversationReadAction>()
	onMessageEdit: EventEmitter<MessageEditAction> = new EventEmitter<MessageEditAction>()
	onNewMessage: EventEmitter<NewMessageAction> = new EventEmitter<NewMessageAction>()

	constructor(
		private messagingService: MessagingService
	) {}

	subscribe(token: string): void {
		console.debug('subscribed to new events')
		this.messagingService.getEvents(token).subscribe((action: Action) => {
			console.debug(`new event of type ${action.type}`, action as any)
			switch (action.type) {
				case ActionType.CONVERSATION_READ:
					this.onConversationRead.emit(action as ConversationReadAction)
					break
				case ActionType.MESSAGE_EDIT:
					this.onMessageEdit.emit(action as MessageEditAction)
					break
				case ActionType.NEW_MESSAGE:
					this.onNewMessage.emit(action as NewMessageAction)
					break
				case ActionType.USER_ONLINE:
					break
			}
		})
	}

}
