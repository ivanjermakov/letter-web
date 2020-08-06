import {Injectable} from '@angular/core'
import {Preview} from "../dto/Preview"
import {ObservableData} from "../dto/ObservableData"

@Injectable({
	providedIn: 'root'
})
export class PreviewsProvider {

	previews: ObservableData<Preview[]> = new ObservableData<Preview[]>()

}
