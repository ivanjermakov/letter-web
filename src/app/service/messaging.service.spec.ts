import {TestBed} from '@angular/core/testing'

import {MessagingService} from './messaging.service'
import {HttpClientModule} from "@angular/common/http"

describe('MessagingService', () => {
	let service: MessagingService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule]
		})
		service = TestBed.inject(MessagingService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
