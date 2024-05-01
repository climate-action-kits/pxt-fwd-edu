# Protecting Pollinators with a Bee Counter!
## This is the final code for this activity 

```template
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
let bugVisits = 0
bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        basic.showNumber(bugVisits)
    }
})
