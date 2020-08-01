import {Avatar} from "./Avatar"

export interface User {

	id: number
	login: string
	firstName: string
	lastName: string
	avatar: Avatar
	lastSeen: Date

}
