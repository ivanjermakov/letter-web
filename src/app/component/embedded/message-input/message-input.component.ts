import {Component, OnInit} from '@angular/core'
import {faCamera, faFile} from "@fortawesome/free-solid-svg-icons"

@Component({
	selector: 'app-message-input',
	templateUrl: './message-input.component.html',
	styleUrls: ['./message-input.component.sass']
})
export class MessageInputComponent implements OnInit {

	fileIcon = faFile
	imageIcon = faCamera

	constructor() { }

	ngOnInit(): void {
	}

}
