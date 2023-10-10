# Power Storage for Wind Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Wind Turbine Coding Tutorial
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
Use the LED light to indicate the charge level of the wind turbine's battery. The faster it's spinning, the higher the charge. The wind turbine should move in the same direction as the dial is being turned, and use the button function to stop. When the wind turbine is not moving, and therefore not generating power, the battery is considered 'dead' and should not display any lights.

## Step 3 @showdialog
Turn on the Climate Action Kit board. 
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button and follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5
Next, click the ``|Download|`` button to download the blank project to startup the simulators.

## Step 6 @showhint
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
Click ``||fwdMotors:Motors||`` drag and drop 
``||fwdMotors:set leftServo to 50 %||`` inside
``||fwdSensors:on dial1 turned difference||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```
## Step 12 
Right click ``||fwdMotors:set leftServo to 50 %||`` block and duplicate.
Drag and drop inside the second ``||fwdSensors:on dial1 turned difference||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```

## Step 13
Click ``||fwdSensors:Sensors||``. Drag ``||fwdSensors:dial1 absolute position||`` oval block close to ``||fwdMotors:set leftServo 50 %||`` replace ``||fwdMotors:50 %||`` of ``||fwdMotors:set leftServo 50 %||`` block. 
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```
## Step 14
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

## Step 15
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
## Step 16
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
## Step 17
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
## Step 18
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
## Step 19
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
## Step 20
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
## Step 21
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
## Step 22 @showhint
``|Download|`` and test your code.Click the bulb icon to see how
the simulator shows the components working.
![dial-servo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-13-wind.gif)

## Step 23 @showdialog
Congratulations on completing your Wind Turbine Project! - Go back to the lesson for more activities and extensions.
