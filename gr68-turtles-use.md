#  Turtle-safe Beach Lights - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```

```template
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() <= 40) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})

