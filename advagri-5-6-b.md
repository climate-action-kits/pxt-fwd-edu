```blocks
input.onButtonPressed(Button.A, function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
    basic.pause(plant_A)
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    basic.pause(plant_B)
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber((timer_stop - timer_start) / 60000)
})
let timer_start = 0
let timer_stop = 0
let plant_B = 0
let plant_A = 0
let run_pump_count = 0
plant_A = 5000
plant_B = 2000
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
```
