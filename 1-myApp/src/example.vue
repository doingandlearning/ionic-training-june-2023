<script>
// export default {
// 	data() {
// 		message: "This is a message"
// 	},
// 	computed: {
// 		reversedMessage() {
// 			return this.message.split("").reverse().join("")
// 		}
// 	},
// 	methods: {
// 		reverseMessage() {
// 			this.message = this.message.split("").reverse().join("")
// 		}
// 	}
	
// }

// useState() => ref()

import {ref, computed} from "vue"

export default {
	setup()  {
		const message = ref("This is a message.")

		const reversedMessage = computed(()=> message.split("").reverse().join(""))

		function reverseMessage() {
			message.value = message.value.split("").reverse().join("")
		}
		
		return { message, reversedMessage, reverseMessage }
	}
	
}
</script>