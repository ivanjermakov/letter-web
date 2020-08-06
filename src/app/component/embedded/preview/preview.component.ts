import {Component, Input, OnInit} from '@angular/core'
import {Preview} from "../../../dto/Preview"
import {Avatar} from "../../../dto/Avatar"
import {AvatarService} from "../../../service/avatar.service"
import {MessageService} from "../../../service/message.service"
import {Message} from "../../../dto/Message"
import {DateService} from "../../../service/date.service"

@Component({
	selector: 'app-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

	@Input()
	preview: Preview

	@Input()
	active: boolean

	constructor(
		private avatarService: AvatarService,
		private messageService: MessageService,
		private dateService: DateService
	) {}

	ngOnInit(): void {
	}

	getAvatarUrl(avatar: Avatar) {
		return this.avatarService.getAvatarUrl(avatar)
	}

	formatMessageText(message: Message): string {
		return this.messageService.formatShortMessageText(message)
	}

	formatSentDate(sent: Date): string {
		return this.dateService.formatDateTime(sent)
	}

}
