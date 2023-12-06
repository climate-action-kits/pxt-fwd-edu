# Power Storage for Wind Energy - Code
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed <= -80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed >= 80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```
