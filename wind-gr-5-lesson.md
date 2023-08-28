# Battery Storage for Wind Power
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Wind Turbine Coding Tutorial
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-400.png)

## Step 2 @showdialog
Plug your USB cable into the micro:bit. 
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/connect-microbit.gif)

## Step 3 @showdialog
Insert it into the Climate Action Kit board. 
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-resized.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button and follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try to interact with your sensor and the simulator will react to it.
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
``||fwdMotors:set servo1 to 50 %||`` inside
``||fwdSensors:on dial1 turned difference||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```
## Step 11 
Right click ``||fwdMotors:set servo1 to 50 %||`` block and duplicate.
Drag and drop inside the second ``||fwdSensors:on dial1 turned difference||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(50)
})
```

## Step 12
Click ``||fwdSensors:Sensors||``. Drag ``||fwdSensors:dial1 absolute position||`` oval block close to ``||fwdMotors:set servo1 50 %||`` replace ``||fwdMotors:50 %||`` of ``||fwdMotors:set servo1 50 %||`` block. 
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(50)
})
```
## Step 13
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set ledRing 0 to ||`` block 
under ``||fwdMotors:set servo1||`` ``||fwdSensors:dial1 absolute position||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0,0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(50)
})
```

## Step 14
Click ``||fwdSensors:Sensors||``. Drag ``||fwdSensors:dial1 absolute position||`` oval block close to ``||fwdMotors:set servo1 50 %||`` replace ``||fwdMotors:50 %||`` of ``||fwdMotors:set servo1 50 %||`` block. 
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0,0xff0000) 
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## Step 15
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set ledRing 0 to ||`` block 
under ``||fwdMotors:set servo1||`` ``||fwdSensors:dial1 absolute position||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0,0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
```
## Step 16
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set servo1 50 %||`` block inside ``||fwdSensors:on touch down||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.servo1.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
```
## Step 17
Change speed of ``||fwdMotors:set servo1 50 %||`` block inside ``||fwdSensors:on touch down||``
to ``||0||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.servo1.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
```
## Step 18
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:dial1 absolute position||``
block to replace ``||0||`` in the ``||fwdSensors:set ledRing 0 to||`` block
under ``||fwdMotors:set servo1 dial1 absolute position||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.servo1.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(),0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
```
## Step 19
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:dial1 absolute position||``
block to replace ``||0||`` in the ``||fwdSensors:set ledRing 0 to||`` block
under ``||fwdMotors:set servo1 dial1 absolute position||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.servo1.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(),0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(), 0xff0000)
})
```
## Step 20
Change ``||fwdSensors:set ledRing||`` under ``||fwdSensors:on dial1 turned by CCW||``
colour to black.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.servo1.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(),0x000000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.servo1.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(), 0xff0000)
})
```

## Step 20 @showhint
``|Download|`` and test your code.The simulator shows how it should work.
Congratulations on completing your Wind Turbine Project! - Go back to the lesson for more activities and extensions.
![dial-servo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-13-wind.gif)
