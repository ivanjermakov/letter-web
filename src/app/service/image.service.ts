import {Injectable} from '@angular/core'
import {Observable} from "rxjs"
import {Avatar} from "../dto/Avatar"
import {environment} from "../../environments/environment"
import {generateHttpOptionsWithTokenHeader} from "../../constant"
import {HttpClient} from "@angular/common/http"

@Injectable({
	providedIn: 'root'
})
export class ImageService {

	IMAGE_URL = 'image'

	constructor(
		private http: HttpClient
	) {}

	upload(token: string, file: File): Observable<Avatar> {
		let body = new FormData()
		body.append('image', file)
		return this.http.post<Avatar>(
			`${environment.API_URL}/${this.IMAGE_URL}/upload`,
			body,
			generateHttpOptionsWithTokenHeader(token)
		)
	}

	delete(token: string, imageId: number): Observable<void> {
		return this.http.get<void>(
			`${environment.API_URL}/${this.IMAGE_URL}/delete`,
			{
				params: {
					imageId: imageId.toString()
				},
				...[generateHttpOptionsWithTokenHeader(token).headers]
			}
		)
	}

}
