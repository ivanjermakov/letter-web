import {TestBed} from '@angular/core/testing'

import {AvatarService} from './avatar.service'
import {HttpClientModule} from "@angular/common/http"

describe('AvatarService', () => {
	let service: AvatarService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule]
		})
		service = TestBed.inject(AvatarService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
