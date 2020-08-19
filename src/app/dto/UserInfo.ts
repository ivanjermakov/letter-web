import {MaritalStatus} from "./enum/MaritalStatus"
import {Avatar} from "./Avatar"

export interface UserInfo {

	firstName: string
	lastName: string
	gender: boolean
	birthDate: Date
	maritalStatus: MaritalStatus
	country: string
	city: string
	location: string
	phoneNumber: string
	mail: string
	placeOfEducation: string
	placeOfWork: string
	about: string
	avatars: Avatar[]

}
