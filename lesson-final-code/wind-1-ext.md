# Powering the Future with Wind Energy - Extension
```package
=github:ssande-fwd/fwd-ext-testing/fwd-breakout
=github:ssande-fwd/fwd-ext-testing
```
## 
* This is the complete code for this activity.
```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
basic.forever(function () {
    basic.showNumber(fwdSensors.dial1.fwdPosition())
})
```
