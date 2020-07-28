import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import {Avatar} from "../dto/Avatar"
import {environment} from "../../environments/environment"
import {generateHttpOptionsWithTokenHeader} from "../../constant"

@Injectable({
	providedIn: 'root'
})
export class DocumentService {

	DOCUMENT_URL = 'document'

	constructor(
		private http: HttpClient
	) {}

	upload(token: string, file: File): Observable<Avatar> {
		let body = new FormData()
		body.append('document', file)
		return this.http.post<Avatar>(
			`${environment.API_URL}/${this.DOCUMENT_URL}/upload`,
			body,
			generateHttpOptionsWithTokenHeader(token)
		)
	}

	delete(token: string, documentId: number): Observable<void> {
		return this.http.get<void>(
			`${environment.API_URL}/${this.DOCUMENT_URL}/delete`,
			{
				params: {
					imageId: documentId.toString()
				},
				...generateHttpOptionsWithTokenHeader(token)
			}
		)
	}

}
