/**
 * @abstract
 * @name EventHandler
 * @description abstract class which integrates an event change
 */
export abstract class EventHandler extends EventTarget {
	private eventNames: string[] = []
	private delegate = document.createDocumentFragment()

	constructor() {
		super()
	}
	
	addEventListener(...args: any): void {
           this.delegate.addEventListener.apply(this.delegate, args);
        }

        dispatchEvent(...args: any): boolean {
           return this.delegate.dispatchEvent.apply(this.delegate, args);
        }

        removeEventListener(...args: any): void {
           return this.delegate.removeEventListener.apply(this.delegate, args);
        }

	/**
	 * @name dispatchChange
	 */
	public dispatchChange(): boolean {
		let _self:EventHandler = this
		return this.dispatchEvent(
			new CustomEvent('change', { detail: _self })
		)
	}

	public dispatch(eventName: string): boolean {
		const idx = this.eventNames.indexOf(eventName)
		if (idx < 0) {
			this.eventNames.push(eventName)
		}
		return this.dispatchEvent(new Event(eventName))
	}

}
