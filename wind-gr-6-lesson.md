# How Wind Turbines Capture Kinetic Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to How Wind Turbines Capture Kinetic Energy Coding Tutorial.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
In this tutorial we will calculate the revolutions per minute (RPM) of the Wind Turbine.

## Step 3 @showdialog
Turn on the Climate Action Kit board.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Next, click the ``|Download|`` button to download the blank project to start-up the simulators.

## Step 6 @showhint
Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try turning the Dial on your project, the virtual  simulator will react to it.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 6
Click ``||fwdSensors:Sensors||`` drag and drop
``||fwdSensors:on dial1 turned difference||`` block in workspace.
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
```
## Step 7
Right click ``||fwdSensors:on dial1 turned difference||`` block and duplicate. _Note: New block will be grey._
![greyed out example](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-greyed-out-demo.png)

## Step 8
Change the direction arrow of the greyed out ``||fwdSensors:on dial1 turned difference||`` block. _Note: Greyed out block will turn green._
![dial direction](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-direction-switch.gif)
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```
## Step 9
Click ``||fwdSensors:Sensors||`` drag and drop
``||fwdSensors:on touch down||`` block in workspace.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```
## Step 10
Click ``||fwdMotors:Motors||`` drag and drop
``||fwdMotors:set leftServo to 50 %||`` inside
``||fwdSensors:on dial1 turned difference||`` block. Change ``||fwdMotors:leftServo||``
to ``||fwdMotors:middleServo||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```
## Step 11
Right click ``||fwdMotors:set middleServo to 50 %||`` block and duplicate.
Drag and drop inside the second ``||fwdSensors:on dial1 turned difference||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```

## Step 12
Click ``||fwdSensors:Sensors||``. Drag ``||fwdSensors:dial1 absolute position||`` oval block close to ``||fwdMotors:set middleServo 50 %||`` replace ``||fwdMotors:50 %||`` of ``||fwdMotors:set middleServo 50 %||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```
## Step 13
Repeat the last step, click ``||fwdSensors:Sensors||``.
Drag ``||fwdSensors:dial1 absolute position||`` oval block close to the other
``||fwdMotors:set middleServo 50 %||`` replace ``||fwdMotors:50 %||`` of ``||fwdMotors:set middleServo 50 %||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## Step 14
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo 50 %||`` block
 inside ``||fwdSensors:on touch down||`` block. Change ``||fwdMotors:leftServo||`` to ``||fwdMotors:middleServo||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## Step 15
Change speed of ``||fwdMotors:set middleServo 50 %||`` block inside ``||fwdSensors:on touch down||``
to ``||0||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```

## Step 16
Click on ``||Variables:Variables||`` and make ``||4||`` ``||Variables:Variables||``.
- ``||Variables:start_time||``
- ``||Variables:stop_time||``
- ``||Variables:revolutions||``
- ``||Variables:RPM||``
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## Step 17
Click on ``||Variables:Variables||`` drag and drop ``||Variables:set start_time to 0||``
inside ``||Basic:on start||`` block. Repeat this for all the ``||Variables:Variables||``.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## Step 18
Click ``||Input:Input||`` drag and drop ``||Input:on button A pressed||`` block on the workspace.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
})
```
## Step 19
Click ``||Input:Input||`` drag and drop ``||Input:on button A pressed||`` block on the workspace.
_Note: This block will be greyed out._ Change the ``||Input:button A||`` to ``||Input:button B||``.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```
## Step 20
Click ``||Variables:Variables||`` drag and drop ``||Variables:set start_time to 0||`` inside
``||Input:on button A pressed||``.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
})
```
## Step 21
Click ``||Variables:Variables||`` drag and drop ``||Variables:set stop_time to 0||`` inside
``||Input:on button B pressed||``.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
```
## Step 22
Click ``||Logic:Logic||`` drag and drop ``||Logic:If true then||`` block inside
``||Basic:forever||``block.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
basic.forever(function () {
    if (true) {
    }
})
```
## Step 23
Click ``||Input:Input||`` drag and drop ``||Input:button A is pressed||`` diamond shape
block to replace ``||Logic:true||`` condition of ``||Logic:If true then||`` block.
``||Basic:forever||``block.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
    }
})
```
## Step 24
Click ``||Variables:Variables||`` drag and drop ``||Variables:change revolutions by 1||``
block inside ``||Logic:if||`` ``||Input:button B is pressed||`` ``||Logic:then||``
block.
``||Basic:forever||``block.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
    revolutions += 1
    }
})
```
## Step 25
Click ``||Variables:Variables||`` drag and drop ``||Variables:set RPM to 0||``
block under ``||Logic:if then||`` block. Click ``||Math:Math||`` drag and drop
``||Math:Subtraction operator||`` block to replace the ``||Variables:0||`` of
``||Variables:set RPM to 0||``.
``||Basic:forever||``block.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
    revolutions += 1
    }
RPM = (0-0)
})
```
## Step 26
Click ``||Math:Math||`` drag and drop any
``||Math:operator||`` block to replace the right side ``||Math:0||`` of
``||Variables:set RPM to||`` ``||Math: 0 - 0||``. Change the ``||Math:operator|``
to ``||Math: Division /||``. The ``||Divisor||`` is ``||60000||``.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
    revolutions += 1
    }
RPM = (0-0)/60000
})
```
## Step 27
Click ``||Variables:Variables||`` drag and drop ``||Variables:stop_time||`` to
replace left ``||Math:0||``. Drag and drop ``||Variables:start_time||`` to replace
right ``||Math:0||``.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
    revolutions += 1
    }
RPM = (stop_time - start_time)/60000
})
```
## Step 28
Click ``||Basic:Basic||`` drag and drop ``||Basic:show number||`` block under
``||Variables:set RPM to||`` ``||Math:(stop_time-start_time)/60000||``. Replace
``||0||`` with ``||Variables:RPM||``.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
    revolutions += 1
    }
RPM = (stop_time - start_time)/60000
basic.showNumber(RPM)
})
```
## Step 29
Click ``||Input:Input||`` drag and drop ``||Input:running time||`` block to replace
``||0||`` in ``||Variables:start_time||`` and ``||Variables:stop_time||``
nested in ``||Input:on button A pressed||`` and ``||Input:on button A pressed||``
respectively.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
stop_time = input.runningTime()
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
    revolutions += 1
    }
RPM = (stop_time - start_time)/60000
basic.showNumber(RPM)
})
```
## Step 30 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![dial-servo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-13-wind.gif)

## Step 31 @showdialog
Congratulations on completing your How Wind Turbines Capture Kinetic Energy Project!

## Step 32 @showdialog
After your project is complete, go back to the lesson for more challenges and extensions.
