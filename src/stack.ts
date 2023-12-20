class Stack<T> {
    /**
     * Internal representation of the stack.
     * @type {Array<T>}
     * @private
     */
    private _instance: T[];

    /**
     * Create a stack using an array.
     * @constructor
     */
    constructor() {
        this._instance = [];
    }

    /**
     * Adds an element to the top of the stack.
     * @param {T} element - The element to be added.
     */
    push(element: T): void {
        this._instance.push(element);
    }

    /**
     * Removes the element from the top of the stack.
     */
    pop(): void {
        this._instance.pop();
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty(): boolean {
        return this._instance.length === 0;
    }

    /**
     * Removes all elements from the stack.
     */
    clear(): void {
        this._instance = [];
    }

    /**
     * Returns the number of elements in the stack.
     * @returns {number} The size of the stack.
     */
    size(): number {
        return this._instance.length;
    }

    /**
     * Returns the top element of the stack without removing it.
     * @returns {T | undefined} The top element of the stack.
     */
    top(): T | undefined {
        if (this._instance.length === 0) {
            return undefined;
        }
        return this._instance[this._instance.length - 1];
    }
}

export default Stack;
