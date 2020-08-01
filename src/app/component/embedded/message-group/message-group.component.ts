import {Component, Input, OnInit} from '@angular/core'
import {MessageGroup} from "../../../dto/MessageGroup"

@Component({
	selector: 'app-message-group',
	templateUrl: './message-group.component.html',
	styleUrls: ['./message-group.component.sass']
})
export class MessageGroupComponent implements OnInit {

	@Input()
	messageGroup: MessageGroup

	constructor() { }

	ngOnInit(): void {
	}

}
