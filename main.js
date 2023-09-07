const dialog = document.getElementById('dialog')
const dialogContent = document.getElementById('dialogContent')
const unlockBtn = document.getElementById('unlockButton')
const closeBtn = document.getElementById('closebtn')

closeBtn.addEventListener('click', () => {
	dialog.close()
})
dialog.addEventListener('click', () => dialog.close())
dialogContent.addEventListener('click', (e) => e.stopPropagation())

function openVault() {
	// 1. Appends the message to the Modal Box
	document.getElementById('message').innerText =
		'You have received this message because you have been chosen to open an important vault.\n\nHere is the secret combination: '

	//2. Using addition to generate the first code (10)
	let firstCode = 5 + 5
	//3.  Using multiplication to generate the second code (40)
	let secondCode = 10 * 4
	//4. Using subtraction to generate the third code (39)
	let thirdCode = 50 - 11
	//5. Combine the three codes into a single string inside a span
	let combination = `<span class="red-text">${firstCode} - ${secondCode} - ${thirdCode}</span>`

	//Display the codes
	//6. Using a dialog box to display the vault codes
	document.getElementById('cbntn').innerHTML = combination

	//7. Opens the Dialog Box
	dialog.showModal()
}
