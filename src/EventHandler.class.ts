/**
 * @abstract
 * @name EventHandler
 * @description abstract class which integrates an event change
 */
export abstract class EventHandler extends EventTarget {
	private eventNames: string[] = []

	constructor() {
		super()
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