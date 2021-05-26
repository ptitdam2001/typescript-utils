import { AbstractObservable, IObserver } from './Observable';

class MyClass extends AbstractObservable {
	public name: string = '';

	doIt() {
		this.name = 'MyClass'
		this.notify();
	}
}

class MyObs implements IObserver {
	obsName: string = ''
	fromObservable(subject: any): void {
		this.obsName = subject.name;
	}
}

describe('Observable pattern', () => {
	let observer = new MyObs();
	let observable = new MyClass();

	beforeEach(() => {
		observable.attach(observer)
	})

	it('provides its values to observers', () => {
		observable.doIt()

		expect(observer.obsName).toEqual(observable.name)
	})

})