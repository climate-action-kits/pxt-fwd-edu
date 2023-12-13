# Bees - Extension
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
let bugVisits = 0
let dayvisits = 0
let nightvisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        if (input.lightLevel() > 128) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
            dayvisits += 1
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        } else {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
            nightvisits += 1
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        }
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        bugVisits = dayvisits + nightvisits
        basic.showNumber(bugVisits)
    }
})
```
