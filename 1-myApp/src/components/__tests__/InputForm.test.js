import { mount, shallowMount } from "@vue/test-utils";
import InputForm from "../InputForm.vue"
import { describe, expect, test } from 'vitest'

describe("Testing InputForm", () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(InputForm)
	})

	test("that the form has an input and a button and a form", () => {
		const form = wrapper.find('form')
		const input = wrapper.find('input')
		const button = wrapper.find('button')

		expect(form.exists()).toBe(true)
		expect(input.exists()).toBe(true)
		expect(button.exists()).toBe(true)

		const elements = ['form', 'input', 'button']

		elements.forEach(element => {
			expect(wrapper.find(element).exists()).toBe(true)
		})
	})

	test("emits a submit event with the correct payload", async () => {
		const inputValue = "Test value"
		await wrapper.find('input').setValue(inputValue)
		await wrapper.find('form').trigger('submit')

		expect(wrapper.emitted()).toHaveProperty('submit')
		expect(wrapper.emitted('submit')[0]).toEqual([inputValue])

	})
})