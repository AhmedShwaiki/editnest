import Stack from '../src/stack'

describe('Stack', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    test('should initialize an empty stack', () => {
        expect(stack.isEmpty()).toBe(true)
        expect(stack.size()).toBe(0)
    })

    test('should push elements onto the stack', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)

        expect(stack.size()).toBe(3)
        expect(stack.top()).toBe(3)
    })

    test('should pop elements from the stack', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)

        stack.pop()

        expect(stack.size()).toBe(2)
        expect(stack.top()).toBe(2)
    })

    test('should correctly check if the stack is empty', () => {
        expect(stack.isEmpty()).toBe(true)

        stack.push(1)

        expect(stack.isEmpty()).toBe(false)

        stack.pop()

        expect(stack.isEmpty()).toBe(true)
    })

    test('should clear all elements from the stack', () => {
        stack.push(1)
        stack.push(2)

        stack.clear()

        expect(stack.isEmpty()).toBe(true)
        expect(stack.size()).toBe(0)
    })

    test('should return the top element without removing it', () => {
        stack.push(1)
        stack.push(2)

        expect(stack.top()).toBe(2)
        expect(stack.size()).toBe(2)
    })

    test('should return undefined when trying to get the top of an empty stack', () => {
        expect(stack.top()).toBeUndefined()
    })
})
