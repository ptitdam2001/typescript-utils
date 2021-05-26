import { AbstractHandler } from './ResponsabilityChain';

class MonkeyHandler extends AbstractHandler<string> {
	public handle(request: string): string|undefined {
			if (request === 'Banana') {
				return `Monkey: I'll eat the ${request}.`;
			}
			return super.handle(request);

	}
}

class SquirrelHandler extends AbstractHandler<string> {
	public handle(request: string): string|undefined {
			if (request === 'Nut') {
					return `Squirrel: I'll eat the ${request}.`;
			}
			return super.handle(request);
	}
}

class DogHandler extends AbstractHandler<string> {
	public handle(request: string): string|undefined {
			if (request === 'MeatBall') {
					return `Dog: I'll eat the ${request}.`;
			}
			return super.handle(request);
	}
}

describe('Responsability Chain pattern', () => {
	let monkey: MonkeyHandler;
	let squirrel: SquirrelHandler;
	let dog: DogHandler;

	beforeEach(()=> {
		monkey = new MonkeyHandler();
		squirrel = new SquirrelHandler();
		dog = new DogHandler();

		monkey.setNextHandler(squirrel).setNextHandler(dog)
	})

	it('returns the value when request corresponding to the condition', () => {
		const result = monkey.handle('MeatBall')
		expect(result).toEqual('Dog: I\'ll eat the MeatBall.')
	})

	it('returns undefined if request no correspond to all requests', () => {
		const result = monkey.handle('Sworms')
		expect(result).toBeUndefined()
	})
})