# pxt-fwd-edu 
Climate Action Kit (2nd generation), by Forward Education

[ Find us at https://forwardedu.com/ ](https://forwardedu.com/)

## Example Usage

Our learning systems are designed to simplify teaching coding and computer science for educators at all experience levels.
Our 2nd generation Climate Action Kit can be used on its own or joined with multiple other kits to control any number of sensors and motors.
Check out our lesson catalogue for curriculum-aligned lessons, including educator notes.
Some samples of what coding with the Climate Action Kit can be seen below

Using a soil moisture sensor and a pump, you can create an auto-watering system that will water the plant when the soil is dry and stop when it is damp.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(15, fwdSensors.ThresholdDirection.Under)) {
        while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(42, fwdSensors.ThresholdDirection.Under)) {
            fwdMotors.pump.fwdSetActive(true)
            basic.pause(1000)
            fwdMotors.pump.fwdSetActive(false)
            basic.pause(2000)
        }
    }
})
```

Control a servo arm with a dial.
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetAngle(Math.constrain(fwdMotors.leftServo.fwdGetAngle() + 5 * difference, 0, 270))
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetAngle(Math.constrain(fwdMotors.leftServo.fwdGetAngle() + 5 * difference, 0, 270))
})
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Up, function () {
    fwdMotors.leftServo.fwdSetAngleAndWait(fwdMotors.fwdPositionPresets(fwdMotors.PresetServoPosition.Pos4))
})
fwdMotors.leftServo.fwdSetAngle(fwdMotors.fwdPositionPresets(fwdMotors.PresetServoPosition.Pos4))
```

Control LED ring based on distance and light level
```blocks
basic.forever(function () {
    fwdSensors.ledRing.fwdSetBrightness(fwdSensors.solar1.fwdLightLevel() / 10)
    fwdSensors.ledRing.fwdSetAllPixelsColour(0)
    fwdSensors.ledRing.fwdSetPixelColour(Math.map(fwdSensors.sonar1.fwdDistance(), 0, 2.5, 0, 7), 10)
})
```
## Supported Targets

* for PXT/microbit

## License

MIT
