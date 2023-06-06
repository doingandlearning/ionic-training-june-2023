import { Camera, CameraResultType, CameraSource } from "@capacitor/camera"
import { Filesystem, Directory } from "@capacitor/filesystem"
export default function useCamera() {
	// Take a photo
	async function takePhoto() {
		const photo = await Camera.getPhoto({
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera,
			quality: 100
		})

		const fileName = new Date().getTime() + ".jpeg"
		await savePhoto(photo, fileName)

		return photo
	}

	function convertBlobToBase64(blob) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			// this is preparing if the work goes wrong
			reader.onerror = reject

			// this preparing to do the work
			reader.onload = () => {
				resolve(reader.result)
			}

			// this is doing work!!
			reader.readAsDataURL(blob)
		})


	}

	// Save a photo
	async function savePhoto(photo, fileName) {
		const response = await fetch(photo.webPath)
		const blob = await response.blob()
		const base64Data = await convertBlobToBase64(blob)

		const savedFile = await Filesystem.writeFile({
			path: fileName,
			data: base64Data,
			directory: Directory.Data
		})

		console.log(savedFile)

		return photo.webPath
	}

	// Load a photo


	// return our functions
	return {
		takePhoto
	}
}