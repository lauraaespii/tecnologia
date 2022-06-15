input.onGesture(Gesture.Shake, function () {
	
})
basic.showString("Hola Mundo ")
basic.showIcon(IconNames.Heart)
basic.showNumber(9)
basic.pause(100)
basic.showNumber(8)
basic.pause(100)
basic.showNumber(7)
basic.pause(100)
basic.showNumber(6)
basic.pause(100)
basic.showNumber(5)
basic.pause(100)
basic.showNumber(4)
basic.pause(100)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
basic.showNumber(0)
let X = 2
let Y = 2
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.clearScreen()
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Happy)
    } else {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showIcon(IconNames.Happy)
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.clearScreen()
            }
        }
    }
    if (input.acceleration(Dimension.X) < -20) {
        basic.showString("<")
    }
    if (input.acceleration(Dimension.X) > 20) {
        basic.showString(">")
    }
    if (input.acceleration(Dimension.Y) > 20) {
        basic.showString("v")
    }
    if (input.acceleration(Dimension.Y) < -20) {
        basic.showString("^")
    }
    if (input.isGesture(Gesture.LogoUp)) {
        if (Y < 4) {
            led.unplot(X, Y)
            Y += 1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
    if (input.isGesture(Gesture.LogoDown)) {
        if (X > 0) {
            led.unplot(X, 0)
            X += -1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        if (X > 0) {
            led.unplot(X, Y)
            X += 1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
    if (input.isGesture(Gesture.TiltRight)) {
        if (X < 4) {
            led.unplot(X, Y)
            X += 1
            led.plot(X, Y)
            basic.pause(100)
        }
    }
})
