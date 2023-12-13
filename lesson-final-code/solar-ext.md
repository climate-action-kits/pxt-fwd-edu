# Harnessing the Sun's Energy with Solar Panels - Extension
```package
=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## 
* This is the complete code for this activity.
```template
input.onButtonPressed(Button.A, function () {
    intensity1 = 90
})
input.onButtonPressed(Button.B, function () {
    intensity1 = 50
})
let intensity1 = 0
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > intensity1) {
        basic.showIcon(IconNames.Diamond)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.leftServo.fwdSetAngle(position)
        basic.pause(20)
    }
})
```
