# Powering the Future with Wind Energy Unit 2
```package
=github:ssande/fwd-ext-testing/fwd-breakout
=github:ssande/fwd-ext-testing
```
## 
* This is the complete code for this activity.

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```

