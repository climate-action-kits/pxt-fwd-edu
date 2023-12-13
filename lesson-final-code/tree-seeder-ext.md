# Replanting Our Forests with Automated Tree Seeders - Extension
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 100)
        basic.pause(2000)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(500)
        fwdMotors.middleServo.fwdSetAngle(0)
        count += 1
    }
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(count)
})
let count = 0
count = 0
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
fwdMotors.middleServo.fwdSetAngle(0)
```
