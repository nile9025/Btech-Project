const tv8 = document.getElementById("tv8")
const form = document.getElementById("form")

form.addEventListener('Submit', (e) => {
	let messages = []
	if (tv8.value === '' || tv8.value == null) {
		messages.push('Address is required')
	}

	if (tv8.value === "india") {
		
	}
	e.preventDefault()
})