#  Turtle-safe Beach Lights - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```

```template
fwdSensors.ledRing.fwdSetBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() < 40) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 40 && fwdSensors.solar1.fwdLightLevel() < 80) {
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xff0000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a turtle-safe beach light! We are going to do this in 4 parts:
1. **Build** our light
2. **Add code** to bring it to life
3. **Modify** our code to learn how it works
4. Complete a couple challenges to make our light even safer for sea turtles!
   
<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-projectrender.webp" alt="projectrender" width="300"/>
