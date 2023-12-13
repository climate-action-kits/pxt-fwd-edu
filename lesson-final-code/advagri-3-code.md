# Smart Farming with Hydroponics & Grow Lights - Code
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
basic.showNumber(timer_stop-timer_start/60000)
}
```
