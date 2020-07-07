import {TestBed} from '@angular/core/testing';

import {TokenService} from './token.service';
import {HttpClientModule} from "@angular/common/http";

describe('TokenService', () => {
	let service: TokenService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule]
		});
		service = TestBed.inject(TokenService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
