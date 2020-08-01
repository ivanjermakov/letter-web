import {Conversation} from "./Conversation"
import {User} from "./User"
import {PreviewType} from "./enum/PreviewType"
import {Channel} from "./Channel"
import {Avatar} from "./Avatar"
import {Message} from "./Message"

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
