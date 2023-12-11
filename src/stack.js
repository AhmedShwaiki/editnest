class Stack {
    /**
     * Create a stack using an array.
     * @constructor
     */
    constructor() {
        /**
         * Internal representation of the stack.
         * @type {Array}
         * @private
         */
        this._instance = []
    }

    /**
     * Adds an element to the top of the stack.
     * @param {*} element - The element to be added.
     */
    push(element) {
        this._instance.push(element)
    }

    /**
     * Removes the element from the top of the stack.
     */
    pop() {
        this._instance.pop()
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this._instance.length === 0
    }

    /**
     * Removes all elements from the stack.
     */
    clear() {
        this._instance = []
    }

    /**
     * Returns the number of elements in the stack.
     * @returns {number} The size of the stack.
     */
    size() {
        return this._instance.length
    }

    /**
     * Returns the top element of the stack without removing it.
     * @returns {*} The top element of the stack.
     */
    top() {
        if (this._instance.length === 0) {
            return undefined
        }
        return this._instance[this._instance.length - 1]
    }
}

export default Stack
