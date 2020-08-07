import {Component, OnInit} from '@angular/core'
import {Preview} from "../../../dto/Preview"
import {MessagingEventService} from "../../../service/messaging-event.service"
import {TokenProvider} from "../../../provider/token-provider"
import {first} from "rxjs/operators"

@Component({
	selector: 'app-messaging',
	templateUrl: './messaging.component.html',
	styleUrls: ['./messaging.component.sass']
})
export class MessagingComponent implements OnInit {

	previews: Preview[]

	conversationId: number

	constructor(
		private tokenProvider: TokenProvider,
		private messagingEventService: MessagingEventService
	) { }

	ngOnInit(): void {
		this.tokenProvider.token.observable
			.pipe(first())
			.subscribe(token =>
				this.messagingEventService.subscribe(token)
			)
	}

}
