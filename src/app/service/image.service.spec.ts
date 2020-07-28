import {TestBed} from '@angular/core/testing'

import {ImageService} from './image.service'
import {HttpClientModule} from "@angular/common/http"

describe('ImageService', () => {
	let service: ImageService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule]
		})
		service = TestBed.inject(ImageService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
