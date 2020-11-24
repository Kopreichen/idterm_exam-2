radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(10)
basic.forever(function () {
	
})
