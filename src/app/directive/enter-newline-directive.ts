import {Directive, EventEmitter, HostListener, Output} from '@angular/core'

@Directive({selector: '[appEnterNewline]'})
export class EnterNewlineDirective {

	@Output()
	onEnter: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>()

	@Output()
	onNewline: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>()

	constructor() {}

	@HostListener('document:keypress', ['$event'])
	handleKeydown(event: KeyboardEvent) {
		if (event.code !== 'Enter') return
		if (event.shiftKey) {
			this.onNewline.emit(event)
		} else {
			event.preventDefault()
			this.onEnter.emit(event)
		}
	}

}
