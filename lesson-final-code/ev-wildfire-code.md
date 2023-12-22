# Wildfire Tracking with Autonomous Vehicles - Code
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
let lightThreshold = 100
let temperatureThreshold = 25
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
            if (input.lightLevel() > lightThreshold || input.temperature() > temperatureThreshold) {
                for (let index = 0; index < 4; index++) {
                    music.playTone(262, music.beat(BeatFraction.Double))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
            } else {
                music.stopAllSounds()
            }
            basic.pause(1000)
        }
    } else {
        fwdMotors.stop()
    }
})
```
