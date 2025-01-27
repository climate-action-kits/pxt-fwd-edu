# Monitoring Bees and pollination with a bug counter Unit 1- Code
```package
=github:ssande/fwd-ext-testing/fwd-breakout
=github:ssande/fwd-ext-testing
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
