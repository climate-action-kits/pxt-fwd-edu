# Glacier Tracking with Satellites
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```
## Activity 1: Build your Project
Welcome to the Glacier Tracking with Satellites! <br> We are going to do this in four parts!
1. Build your project
2. Code your Project 
3. Modify your Project
4. Complete a coding challenge 

```template 
datalogger.setColumnTitles("Light Level (%)")
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    } else {
        basic.showIcon(IconNames.No)
    }
})
```
