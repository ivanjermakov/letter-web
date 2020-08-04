import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core'
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
	messageGroups: MessageGroup[]

	constructor() {}

	ngOnInit(): void {
		this.scrollToBottom()
	}

	ngAfterViewChecked() {
		this.scrollToBottom()
	}

	scrollToBottom(): void {
		if (this.myScrollContainer) {
			this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight
		}
	}

}
