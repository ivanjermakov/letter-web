import {Component, OnInit} from '@angular/core'

@Component({
	selector: 'app-messaging',
	templateUrl: './messaging.component.html',
	styleUrls: ['./messaging.component.sass']
})
export class MessagingComponent implements OnInit {

	conversationId: number

	constructor() { }

	ngOnInit(): void {
	}

}
