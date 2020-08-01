import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core'
import {Message} from "../../../dto/Message"
import {Observable} from "rxjs"
import {MessageService} from "../../../service/message.service"
import {MessageGroup} from "../../../dto/MessageGroup"

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

	@ViewChild('scrollToBottom')
	myScrollContainer: ElementRef

	@Input()
	messages: Observable<Message[]>

	messageGroups: MessageGroup[]

	constructor(
		private messageService: MessageService
	) {}

	ngOnInit(): void {
		this.messages.subscribe(messages => {
			let ms = []
			for (let i = 0; i < 2; i++) {
				ms = [...ms, ...messages]
			}
			this.messageGroups = this.messageService.groupMessagesBySender(ms)
		})
		this.scrollToBottom()
	}

	ngAfterViewChecked() {
		this.scrollToBottom()
	}


	scrollToBottom(): void {
		this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight
	}

}
