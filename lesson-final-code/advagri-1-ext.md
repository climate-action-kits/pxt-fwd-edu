# Smart Farming with Automated Watering - Extension
```package
=github:ssande-fwd/fwd-ext-testing/fwd-breakout
=github:ssande-fwd/fwd-ext-testing
```
## 
* This is the complete code for this activity.
```template
let count = 0
basic.forever(function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        count += 1
        basic.pause(500)
        basic.clearScreen()
    }
})
```
