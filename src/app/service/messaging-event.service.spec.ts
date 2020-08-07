import {TestBed} from '@angular/core/testing'

import {MessagingEventService} from './messaging-event.service'
import {HttpClientModule} from "@angular/common/http"

describe('MessagingEventService', () => {
	let service: MessagingEventService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule]
		})
		service = TestBed.inject(MessagingEventService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
