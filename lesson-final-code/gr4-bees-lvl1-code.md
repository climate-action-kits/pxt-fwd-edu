# Monitoring Bees and pollination with a bug counter Unit 1- Code
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
``` 
