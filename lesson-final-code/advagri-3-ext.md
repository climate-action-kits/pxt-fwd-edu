# Smart Farming with Hydroponics & Grow Lights - Extension
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
let volume = 0
input.onButtonPressed(Button.A, function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
    volume = 30
})
input.onButtonPressed(Button.AB, function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    volume = 20
})
input.onButtonPressed(Button.B, function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    volume = 60
})
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(volume, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
})
```
