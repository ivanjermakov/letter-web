import {Message} from '../Message'
import {ActionType} from "../enum/ActionType"
import {Action} from "./Action"

export class MessageEditAction implements Action {

	type: ActionType = ActionType.MESSAGE_EDIT
	message: Message

}
