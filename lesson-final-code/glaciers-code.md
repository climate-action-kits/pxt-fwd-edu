# Monitoring Glaciers - Code
```package
=github:ssande-fwd/fwd-ext-testing/fwd-breakout
=github:ssande-fwd/fwd-ext-testing
```
## 
* This is the complete code for this activity.
```template
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
        basic.showString("Go Right")
        basic.clearScreen()
    }
    basic.pause(1000)
})
```
