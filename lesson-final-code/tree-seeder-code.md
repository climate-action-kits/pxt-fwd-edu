# Replanting Our Forests with Automated Tree Seeders - Code
```package
=github:ssande-fwd/fwd-ext-testing/fwd-breakout
=github:ssande-fwd/fwd-ext-testing
```
## 
* This is the complete code for this activity.
```template
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 100)
        basic.pause(2000)
        fwdMotors.middleServo.fwdSetAngle(0)
        basic.pause(500)
        fwdMotors.middleServo.fwdSetAngle(45)
    }
    fwdMotors.stop()
})
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
fwdMotors.middleServo.fwdSetAngle(45)
```
