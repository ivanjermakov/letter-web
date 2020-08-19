import {Injectable} from '@angular/core'
import {ObservableData} from "../dto/ObservableData"

@Injectable({
	providedIn: 'root'
})
export class CurrentConversationProvider {

	currentConversation: ObservableData<number> = new ObservableData<number>()

}
