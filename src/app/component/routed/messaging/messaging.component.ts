import {Component, OnInit} from '@angular/core'
import {Preview} from "../../../dto/Preview"

@Component({
	selector: 'app-messaging',
	templateUrl: './messaging.component.html',
	styleUrls: ['./messaging.component.sass']
})
export class MessagingComponent implements OnInit {

	previews: Preview[]

	conversationId: number

	constructor() { }

	ngOnInit(): void {
	}

}
