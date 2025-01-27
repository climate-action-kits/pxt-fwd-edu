# Advanced Agriculture - Code
```package
=github:ssande-fwd/fwd-ext-testing/fwd-breakout
=github:ssande-fwd/fwd-ext-testing
```
## 
* This is the complete code for this activity.
```template
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(80, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(60, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetPixelColour(5, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xff0000)
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(40, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetPixelColour(3, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(2, 0xff0000)
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
})
```
