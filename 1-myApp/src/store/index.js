import { createStore } from 'vuex'

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
		addBird(context, birdData) {
			context.commit("addBird", birdData)
		}
	},
	mutations: {
		addBird(state, birdData) {
			const newBird = {
				id: new Date().toISOString(),
				...birdData
			}

			state.birds.unshift(newBird)
		}
	}
})

export default store