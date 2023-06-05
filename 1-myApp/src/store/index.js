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
					image: "https://www.thespruce.com/thmb/ujNp8tSAcaVD0CosltNMHXCowPM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fun-facts-about-cardinals-385528-hero-828376fb000b418f9187bf085ff0795f.jpg",
					description: "Pretty red bird!"
				},
				{
					id: "3",
					title: "Starling",
					image: "https://www.thespruce.com/thmb/ujNp8tSAcaVD0CosltNMHXCowPM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fun-facts-about-cardinals-385528-hero-828376fb000b418f9187bf085ff0795f.jpg",
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
	}
})

export default store