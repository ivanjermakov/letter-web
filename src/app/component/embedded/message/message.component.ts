import {Component, Input, OnInit} from '@angular/core'
import {AvatarService} from "../../../service/avatar.service"
import {DateService} from "../../../service/date.service"
import {Avatar} from "../../../dto/Avatar"
import {Message} from "../../../dto/Message"

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {

	@Input()
	message: Message

	@Input()
	first: boolean

	constructor(
		private avatarService: AvatarService,
		private dateService: DateService
	) { }

	ngOnInit(): void {
	}

	getAvatarUrl(avatar: Avatar) {
		return this.avatarService.getAvatarUrl(avatar)
	}

	formatSentDate(sent: Date): string {
		return this.dateService.formatDateTime(sent)
	}

}
