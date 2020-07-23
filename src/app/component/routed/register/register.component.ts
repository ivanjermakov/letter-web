import {Component, OnInit} from '@angular/core'
import {RegisterUser} from "../../../dto/RegisterUser"
import {Router} from "@angular/router"
import {RegisterService} from "../../../service/register.service"

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.sass', './../auth/auth.component.sass']
})
export class RegisterComponent implements OnInit {

	registerUser: RegisterUser
	retypePassword: string

	constructor(
		private registerService: RegisterService,
		private router: Router
	) {
		this.registerUser = {
			firstName: '',
			lastName: '',
			login: '',
			password: ''
		}
		this.retypePassword = ''
	}

	ngOnInit(): void {
	}

	register() {
		this.registerService
			.register(this.registerUser)
			.subscribe(
				() => {
					console.debug('successful registration')
					this.router.navigate(['/auth'])
				},
				error => console.debug(error)
			)
	}

}
