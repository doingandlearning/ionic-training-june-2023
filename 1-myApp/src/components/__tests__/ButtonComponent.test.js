import { mount, shallowMount } from "@vue/test-utils";
import ButtonComponent from "../ButtonComponent.vue"
import { describe, expect, test, xit } from 'vitest'

describe("Test ButtonComponent.vue", () => {
	let wrapper, button

	beforeEach(() => {
		wrapper = mount(ButtonComponent)
		button = wrapper.find('button')
	})

	it("render a button", () => {
		expect(button.exists()).toBe(true)
	})

	// Instead of xit -> test.skip
	test("emit a clicked event when clicked", async () => {
		await button.trigger('click')
		expect(wrapper.emitted()).toHaveProperty('clicked')
	})

	test("to match snapshot", () => {
		const wrapper = shallowMount(ButtonComponent)
		expect(wrapper).toMatchSnapshot()
	})
})