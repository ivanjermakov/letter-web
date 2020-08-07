import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {faCamera, faFile} from "@fortawesome/free-solid-svg-icons"

@Component({
	selector: 'app-message-input',
	templateUrl: './message-input.component.html',
	styleUrls: ['./message-input.component.sass']
})
export class MessageInputComponent implements OnInit {

	@Output()
	onSendMessage: EventEmitter<string> = new EventEmitter<string>()

	fileIcon = faFile
	imageIcon = faCamera

	messageText: string

	constructor() { }

	ngOnInit(): void {
	}

	send() {
		this.onSendMessage.emit(this.messageText)
		this.messageText = ''
	}

}
