import {Component, OnInit} from '@angular/core'
import {Preview} from "../../../dto/Preview"
import {PreviewService} from "../../../service/preview.service"
import {TokenProvider} from "../../../provider/token-provider"
import {Pageable} from "../../../util/Pageable"
import {PreviewsProvider} from "../../../provider/previews-provider"
import {CurrentConversationProvider} from "../../../provider/current-conversation-provider"
import {filter} from "rxjs/operators"

@Component({
	selector: 'app-previews',
	templateUrl: './previews.component.html',
	styleUrls: ['./previews.component.sass']
})
export class PreviewsComponent implements OnInit {

	previews: Preview[]
	conversationId: number

	constructor(
		private previewService: PreviewService,
		private tokenProvider: TokenProvider,
		private previewsProvider: PreviewsProvider,
		private currentConversationProvider: CurrentConversationProvider
	) {
		this.currentConversationProvider.currentConversation.observable.subscribe(
			id => this.conversationId = id
		)
	}

	ngOnInit(): void {
		this.tokenProvider.token.observable
			.pipe(filter(t => !!t))
			.subscribe(token => {
				this.previewService
					.all(token, new Pageable(0, 40))
					.subscribe(previews => {
						console.debug('fetch previews', previews)
						this.previews = previews
						this.previewsProvider.previews.set(previews)
					})
			})
	}

}
