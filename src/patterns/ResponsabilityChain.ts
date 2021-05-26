export interface IHandler<T> {
  setNextHandler(handler: IHandler<T>): IHandler<T>;

  handle(request: T): T|undefined;
}

export abstract class AbstractHandler<T> implements IHandler<T> {
  private nextHandler: IHandler<T> | undefined;

  public setNextHandler(handler: IHandler<T>): IHandler<T> {
    this.nextHandler = handler;
    // Returning a handler from here will let us link handlers in a
    // convenient way like this:
    // monkey.setNext(squirrel).setNext(dog);
    return handler;
  }

  public handle(request: T): T|undefined {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return undefined;
  }
}