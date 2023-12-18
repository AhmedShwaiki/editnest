import { beforeEach } from 'vitest'
import { expect, describe, test } from 'vitest'
import Stack from './stack'

describe('Stack', () => {
    let mockStack: Stack<number> 

    beforeEach(() => {
        mockStack = new Stack()
    })

    test('should initialize an empty stack', () => {
        mockStack = new Stack()

        expect(mockStack.isEmpty()).toBe(true)
        expect(mockStack.size()).toBe(0)
    })

    test('should push elements onto the stack', () => {
        mockStack.push(1)
        mockStack.push(2)
        mockStack.push(3)

        expect(mockStack.size()).toBe(3)
        expect(mockStack.top()).toBe(3)
    })

    test('should pop elements from the stack', () => {
        mockStack.push(1)
        mockStack.push(2)
        mockStack.push(3)

        mockStack.pop()

        expect(mockStack.size()).toBe(2)
        expect(mockStack.top()).toBe(2)
    })

    test('should correctly check if the stack is empty', () => {
        expect(mockStack.isEmpty()).toBe(true)

        mockStack.push(1)

        expect(mockStack.isEmpty()).toBe(false)

        mockStack.pop()

        expect(mockStack.isEmpty()).toBe(true)
    })

    test('should clear all elements from the stack', () => {
        mockStack.push(1)
        mockStack.push(2)

        mockStack.clear()

        expect(mockStack.isEmpty()).toBe(true)
        expect(mockStack.size()).toBe(0)
    })

    test('should return the top element without removing it', () => {
        mockStack.push(1)
        mockStack.push(2)

        expect(mockStack.top()).toBe(2)
        expect(mockStack.size()).toBe(2)
    })

    test('should return undefined when trying to get the top of an empty stack', () => {
        expect(mockStack.top()).toBeUndefined()
    })
})
