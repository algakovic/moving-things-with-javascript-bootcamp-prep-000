const app = "I don't do much."

document.getElementById('dodger')


function moveDodgerRight(){
	var rightNumbers = dodger.style.left.replace('px', '')
	var right = parseInt(rightNumbers, 10)
	if (right < 360) {
		dodger.style.left = `${right - 1}px`
    }
}
	

function moveDodgerRight(){
	var rightNumbers = dodger.style.left.replace('px', '')
	var right = parseInt(rightNumbers, 10)
	if (right < 360) {
		dodger.style.left = `${right + 1}px`
    }
}
	