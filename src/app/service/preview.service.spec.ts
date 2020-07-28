import {TestBed} from '@angular/core/testing'

import {PreviewService} from './preview.service'
import {HttpClientModule} from "@angular/common/http"

describe('PreviewService', () => {
	let service: PreviewService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule]
		})
		service = TestBed.inject(PreviewService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
