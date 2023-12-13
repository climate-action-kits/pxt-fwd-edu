# Bees - Code
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(bugVisits)
    basic.pause(5000)
    basic.clearScreen()
})
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```
