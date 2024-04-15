# Powering the Future with Wind Energy Unit 1
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
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
