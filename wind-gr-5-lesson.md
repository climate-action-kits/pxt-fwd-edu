# Power Storage for Wind Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```

## Step 1 @showdialog
Welcome to Power Storage for Wind Energy Coding Tutorial.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
In this coding tutorial use the LED light to indicate the level of 'charge' the wind turbine's battery has 
based on how fast the wind turbine is spinning. The faster it's spinning, the 
higher the charge. The wind turbine should move in the same direction as the 
dial is being turned, and use the button function to stop. When the wind turbine
is not moving, and therefore not generating power, the battery is considered 'dead'
and should not display any lights.

## Step 3 @showdialog
Turn on the Climate Action Kit board. 
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 
Click three dots besides the ``|Download|`` button and follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5
Next, click the ``|Download|`` button to download the blank project to start-up the simulators.

## Step 6 
Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try to interact with your sensor and the simulator will react to it.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 7
Click ``||fwdSensors:Sensors||`` drag and drop
``||fwdSensors:on dial1 turned difference||`` block in workspace. 
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
```
## Step 8
Right click ``||fwdSensors:on dial1 turned difference||`` block and duplicate. _Note: New block will be grey._
![greyed out example](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-greyed-out-demo.png)

## Step 9
Change the direction arrow of the greyed out ``||fwdSensors:on dial1 turned difference||`` block. _Note: Greyed out block will turn green._
![dial direction](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-direction-switch.gif)
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```
## Step 10
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
## Step 11
Click ``||Variables:Variables||`` and make a ``||Variables:Variable||`` 
``||Variables:turbinespeed||``.

## Step 12
Click ``||Variables:Variables||`` drag and drop ``||Variables:set turbinespeed to 0||``
block inside ``||Basic:on start||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
})
turbinespeed = 0
```
## Step 13
Click ``||Variables:Variables||`` drag and drop ``||Variables:set turbinespeed to 0||``
block inside ``||fwdSensors:on dial1 turned difference||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
})
let turbinespeed = 0
turbinespeed = 0
```
## Step 14
Click ``||Variables:Variables||`` drag and drop ``||Variables:set turbinespeed to 0||``
block inside the other ``||fwdSensors:on dial1 turned difference||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```
## Step 15
Click ``||fwdMotors:Motors||`` drag and drop 
``||fwdMotors:set leftServo to 50 %||`` under
``||Variables:set turbinespeed to 0||``
block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = 0
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
})
```
## Step 16
Right click ``||fwdMotors:set leftServo to 50 %||`` block and duplicate it.
Drag and drop under the other ``||Variables:set turbinespeed to 0||``
block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = 0
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```
## Step 17
Click ``||fwdSensors:Sensors||``. 
Drag ``||fwdSensors:dial1 absolute position||`` 
oval block close to ``||Variables:set turbinespeed to 0||`` 
replace ``||Variables:0||`` of ``||Variables:set turbinespeed to 0||`` block. 
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```
## Needs to be updated from here onwards
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set ledRing 0 to ||`` block 
under ``||fwdMotors:set leftServo||`` ``||fwdSensors:dial1 absolute position||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0,0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```

## 
Click ``||fwdSensors:Sensors||``. Drag ``||fwdSensors:dial1 absolute position||`` oval block close to ``||fwdMotors:set leftServo 50 %||`` replace ``||fwdMotors:50 %||`` of ``||fwdMotors:set leftServo 50 %||`` block. 
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0,0xff0000) 
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## 
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set ledRing 0 to ||`` block 
under ``||fwdMotors:set leftServo||`` ``||fwdSensors:dial1 absolute position||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0,0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
```
## 
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo 50 %||`` block inside ``||fwdSensors:on touch down||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
```
## 
Change speed of ``||fwdMotors:set leftServo 50 %||`` block inside ``||fwdSensors:on touch down||``
to ``||0||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
```
## 
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:dial1 absolute position||``
block to replace ``||0||`` in the ``||fwdSensors:set ledRing 0 to||`` block
under ``||fwdMotors:set leftServo dial1 absolute position||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(),0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
})
```
## 
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:dial1 absolute position||``
block to replace ``||0||`` in the ``||fwdSensors:set ledRing 0 to||`` block
under ``||fwdMotors:set leftServo dial1 absolute position||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(),0xff0000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(), 0xff0000)
})
```
## 
Change ``||fwdSensors:set ledRing||`` under ``||fwdSensors:on dial1 turned by CCW||``
colour to black.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(),0x000000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
    fwdSensors.ledRing.fwdSetPixelColour(fwdSensors.dial1.fwdPosition(), 0xff0000)
})
```
## 
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.leftServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed <= -80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.leftServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed >= 80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```
## 2nd Last Step 
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![dial-servo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-13-wind.gif)

## Last Step @showdialog
Congratulations on completing your Power Storage for Wind Energy Project! - Go back to the lesson for more activities and extensions.
