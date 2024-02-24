#  Warehouse Efficiency using Autonomous Delivery Robots and AI - Code
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(5)
                basic.pause(500)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
                fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
                basic.pause(500)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(-5)
                basic.pause(500)
            }
        }
    }
})

```
