import { createStore } from 'vuex'
import { Preferences } from '@capacitor/preferences';

const BIRD_STORAGE = 'birds'

// const cachePhotos = (data) => {
// 	Preferences.set({
// 		key: BIRD_STORAGE,
// 		value: data
// 	})
// }

const store = createStore({
	state() {
		return {
			birds: [
				{
					id: "1",
					title: "Northern Cardinal",
					image: "https://www.thespruce.com/thmb/ujNp8tSAcaVD0CosltNMHXCowPM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fun-facts-about-cardinals-385528-hero-828376fb000b418f9187bf085ff0795f.jpg",
					description: "Pretty red bird!"
				},
				{
					id: "2",
					title: "Swift",
					image: "https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/bird-species-illustrations/swift_1200x675.jpg",
					description: "Pretty red bird!"
				},
				{
					id: "3",
					title: "Starling",
					image: "https://www.rspb.org.uk/globalassets/images/birds-and-wildlife/bird-species-illustrations/starling_adult_1200x675.jpg?preset=largelandscape_mobile",
					description: "Pretty red bird!"
				},
			]
		}
	},
	getters: {
		birds(state) {
			return state.birds
		},
		bird(state) {
			return (birdId) => {
				return state.birds.find(bird => bird.id === birdId)
			}
		}
	},
	actions: {
		async addBird(context, birdData) {
			const newBird = {
				id: new Date().toISOString(),
				...birdData
			}

			context.commit("addBird", newBird)
			await Preferences.set({
				key: BIRD_STORAGE,
				value: JSON.stringify(context.state.birds)
			})

		},
		async loadBirds(context) {
			const birds = await Preferences.get({ key: BIRD_STORAGE })
			if (birds.value) {
				context.commit('setBirds', JSON.parse(birds.value))
			}
		},
		async deleteBird(context, id) {
			const newState = context.state.birds.filter(bird => bird.id === id)
			context.commit("setBirds", newState)
			await Preferences.set({
				key: BIRD_STORAGE,
				value: JSON.stringify(context.state.birds)
			})
		}
	},
	mutations: {
		addBird(state, newBird) {
			state.birds.unshift(newBird)
		},
		setBirds(state, birdData) {
			state.birds = birdData
		}
	}
})

export default store