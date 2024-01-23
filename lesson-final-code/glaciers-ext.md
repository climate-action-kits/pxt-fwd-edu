# Monitoring Glaciers - Extension
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let LeftDistance = 0
let RightDistance = 0
radio.setGroup(1)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(180)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(0)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
        radio.sendString("Go Left")
    } else {
        basic.showString("Go Right")
        basic.clearScreen()
        radio.sendString("Go Right")
    }
    basic.pause(1000)
})
```
