# Monitoring Bees and Pollination with a Bug Counter

```package
fwd-edu-breakout=github:ssande/fwd-ext-testing/fwd-breakout
ledRing=github:ssande/fwd-ext-testing
```

let bugvisits = 0
basic.showNumber(bugvisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.showNumber(bugvisits)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
