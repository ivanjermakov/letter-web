import {TestBed} from '@angular/core/testing'

import {UserInfoService} from './user-info.service'
import {HttpClientModule} from "@angular/common/http"

describe('UserInfoService', () => {
	let service: UserInfoService

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule]
		})
		service = TestBed.inject(UserInfoService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
