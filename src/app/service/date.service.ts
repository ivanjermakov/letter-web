import {Injectable} from '@angular/core'
import * as moment from "moment"

@Injectable({
	providedIn: 'root'
})
export class DateService {

	constructor() { }

	formatDateTime(date: Date): string {
		return moment(date).format('hh:ss')
	}

}
