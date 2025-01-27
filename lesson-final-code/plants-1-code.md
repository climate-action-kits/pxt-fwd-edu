# Protecting Pollinators with a Bee Counter - Code
```package
=github:ssande-fwd/fwd-ext-testing/fwd-breakout
=github:ssande-fwd/fwd-ext-testing
```
## 
* This is the complete code for this activity.
```template
let bugVisits = 1
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.showNumber(bugVisits )
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
