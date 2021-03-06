import {Message} from '../Message'
import {ActionType} from "../enum/ActionType"
import {Action} from "./Action"

export class NewMessageAction implements Action {

	type: ActionType = ActionType.MESSAGE_EDIT
	message: Message

}
