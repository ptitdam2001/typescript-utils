/**
 * this interface is implemented to a class
 * which needs to observe an event
 */
export interface IObserver {
	// Receive update from observale.
	fromObservable(subject: IObservable): void;
}

/**
 * the interface is implemented to a class
 * which needs to notify a change of state
 */
export interface IObservable {
	attach(observer: IObserver): void;
	detach(observer: IObserver): void;
	notify(): void;
}


export abstract class AbstractObservable implements IObservable {
	private observers = new Set<IObserver>();

	attach(observer: IObserver): void {
		this.observers.add(observer);
	}
	detach(observer: IObserver): void {
		this.observers.delete(observer);
	}
	notify(): void {
		this.observers.forEach(obs => obs.fromObservable(this));
	}
}