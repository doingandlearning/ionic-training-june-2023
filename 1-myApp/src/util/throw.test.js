import { beforeEach, describe, expect, test, } from 'vitest'
import throwWhenFalse from './throwWhenFalse'

describe("Testing this functino", () => {
	test("it does nothin when true", () => {
		expect(throwWhenFalse("Test")).toBe("Test")
	})

	test("it throws when false", () => {
		expect(() => throwWhenFalse(false)).toThrow()
		expect(() => throwWhenFalse(false)).toThrowError("Whoops!")
	})
})