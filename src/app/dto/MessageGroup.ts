import {User} from "./User"
import {Message} from "./Message"

export class MessageGroup {

	sender: User
	messages: Message[]

	constructor(sender: User, messages: Message[]) {
		this.sender = sender
		this.messages = messages
	}

}
