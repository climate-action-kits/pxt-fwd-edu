# Smart Farming with Automated Watering - Code
```package
=github:ssande/fwd-ext-testing/fwd-breakout
=github:ssande/fwd-ext-testing
```
## 
* This is the complete code for this activity.
```template
basic.forever(function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
        }
})
```
