export default function throwWhenFalse(value) {
	if (!value) {
		throw new Error("Whoops!")
	}
	return value
}