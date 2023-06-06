import { mount, shallowMount, flushPromises } from "	";
import UserDetails from "../UserDetails.vue"
import { beforeEach, describe, expect, test, } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('Testing UserDetails.vue', () => {

	test('it displays the user details after fetching them', async () => {
		const userData = { name: "Tom Maughan", email: "tom.maughan@glasgow.ac.uk" }

		axios.get.mockResolvedValueOnce({ data: userData })

		const wrapper = await mount(UserDetails)


		expect(axios.get).toHaveBeenCalled()
		expect(axios.get).toHaveBeenCalledWith('/api/users/1')
		expect(axios.get).toHaveBeenCalledTimes(1)

		// await new Promise(resolve => setTimeout(resolve));
		await flushPromises()

		expect(wrapper.text()).toContain(userData.name)
		expect(wrapper.text()).toContain(userData.email)

	})
})