import {Conversation} from '../Conversation'
import {User} from '../User'
import {Action} from "./Action"
import {ActionType} from "../enum/ActionType"

export class ConversationReadAction implements Action {

	type: ActionType = ActionType.CONVERSATION_READ
	conversation: Conversation
	reader: User

}
