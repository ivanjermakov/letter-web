import {Message} from "@angular/compiler/src/i18n/i18n_ast"
import {NewDocument} from "./NewDocument"
import {NewImage} from "./NewImage"

export class NewMessage {

	senderId: number
	conversationId: number
	text: string
	forwarded: Message[] = []
	images: NewImage[] = []
	documents: NewDocument[] = []

	constructor(senderId: number, conversationId: number, text: string, forwarded: Message[], images: NewImage[], documents: NewDocument[]) {
		this.senderId = senderId
		this.conversationId = conversationId
		this.text = text
		this.forwarded = forwarded
		this.images = images
		this.documents = documents
	}

}
