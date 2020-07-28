import {TestBed} from '@angular/core/testing'

import {ConversationService} from './conversation.service'
import {HttpClientModule} from "@angular/common/http"

describe('ConversationService', () => {
	let service: ConversationService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientModule]
		})
		service = TestBed.inject(ConversationService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
