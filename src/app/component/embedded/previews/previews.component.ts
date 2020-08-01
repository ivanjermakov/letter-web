import {Component, OnInit} from '@angular/core'
import {Preview} from "../../../dto/Preview"
import {PreviewService} from "../../../service/preview.service"
import {TokenProvider} from "../../../provider/token-provider"
import {Pageable} from "../../../util/Pageable"

@Component({
	selector: 'app-previews',
	templateUrl: './previews.component.html',
	styleUrls: ['./previews.component.sass']
})
export class PreviewsComponent implements OnInit {

	previews: Preview[]

	constructor(
		private previewService: PreviewService,
		private tokenProvider: TokenProvider
	) {}

	ngOnInit(): void {
		this.tokenProvider.token.subscribe(token => {
			this.previewService
				.all(token, new Pageable(0, 40))
				.subscribe(previews => {
					console.debug('fetch previews', previews)
					this.previews = previews
					for (let i = 0; i < 20; i++) {
						this.previews = this.previews.concat(previews)
					}
				})
		})
	}

}
