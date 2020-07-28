import {Conversation} from "./Conversation"
import {User} from "./User"
import {PreviewType} from "./enum/PreviewType"
import {Message} from "@angular/compiler/src/i18n/i18n_ast"
import {Channel} from "./Channel"
import {Avatar} from "./Avatar"

export class Preview {

	type: PreviewType
	conversation: Conversation
	channel: Channel
	with: User
	lastMessage: Message
	avatar: Avatar
	unread: number
	kicked: boolean

}
