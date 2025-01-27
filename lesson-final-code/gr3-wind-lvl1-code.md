# Powering the Future with Wind Energy Unit 1
```package
=github:ssande-fwd/fwd-ext-testing/fwd-breakout
=github:ssande-fwd/fwd-ext-testing
```
## 
* This is the complete code for this activity.
```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    basic.showIcon(IconNames.No)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    basic.showIcon(IconNames.SmallSquare)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    basic.showIcon(IconNames.Diamond)
})
```
