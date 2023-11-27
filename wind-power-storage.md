# Power Storage for Wind Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```

## Step 1 @showdialog
Welcome to Power Storage for Wind Energy Coding Tutorial.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
In this coding tutorial, we will use the LED lights to indicate the level of 'charge' the wind turbine's battery has based on how fast the wind turbine is spinning. The faster it's spinning, the higher the charge. The wind turbine should move in the same direction as the dial is being turned, and use the button function to stop. When the wind turbine is not moving, and therefore not generating power, the battery is considered 'dead' and should not display any lights.

## Step 3 @showdialog
Turn on the Climate Action Kit board.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4
Click three dots besides the ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5
Next, click the ``|Download|`` button to download the blank project to start-up the simulators.

## Step 6 @showdialog
This is how the simulators should look after a successful download. You can see the Dial,
the Touch and the Servo Motors along side the Pump.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif)

## Step 7
Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try turning the Dial on your project, the virtual  simulator will react to it.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 8
Click ``||fwdSensors:Sensors||`` drag and drop
``||fwdSensors:on dial1 turned difference||`` block in workspace.
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
```

## Step 9
Right click ``||fwdSensors:on dial1 turned difference||`` block and duplicate. _Note: New block will be grey._
![greyed out example](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-greyed-out-demo.png)

## Step 10
Change the direction arrow of the greyed out ``||fwdSensors:on dial1 turned difference||`` block. _Note: Greyed out block will turn green._
![dial direction](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-direction-switch.gif)
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 11
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

## Step 12
Click ``||Variables:Variables||`` and make a ``||Variables:Variable||``
``||Variables:turbinespeed||``.

## Step 13
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

## Step 14
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

## Step 15
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

## Step 16
Click ``||fwdMotors:Motors||`` drag and drop
``||fwdMotors:set leftServo to 50 %||`` under
``||Variables:set turbinespeed to 0||``
block. Change ``||fwdMotors:leftServo||`` to ``||fwdMotors:middleServo||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 17
Right click ``||fwdMotors:set middleServo to 50 %||`` block and duplicate it.
Drag and drop under the other ``||Variables:set turbinespeed to 0||``
block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 18
Click ``||fwdMotors:Motors||`` drag and drop
``||fwdMotors:set leftServo to 50 %||`` under
``||fwdSensors:on touch down||`` block.
Change ``||fwdMotors:leftServo||`` to ``||fwdMotors:middleServo||``. Change ``||fwdMotors:50%||`` to ``||fwdMotors:0%||``
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 19
Click ``||fwdSensors:Sensors||``.
Drag ``||fwdSensors:dial1 absolute position||``
oval block close to ``||Variables:set turbinespeed to 0||`` to
replace ``||Variables:0||`` of ``||Variables:set turbinespeed to 0||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 20
Click ``||fwdSensors:Sensors||``.
Drag ``||fwdSensors:dial1 absolute position||``
oval block close to the other ``||Variables:set turbinespeed to 0||`` to
replace ``||Variables:0||`` of ``||Variables:set turbinespeed to 0||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 21
Click ``||Variables:Variables||``.
Drag ``||Variables:turbinespeed||``
oval block close to ``||fwdMotors:set middleServo to 50 %||`` to
replace ``||fwdMotors:50||`` of ``||fwdMotors:set middleServo to 50 %||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 22
Click ``||Variables:Variables||``.
Drag ``||Variables:turbinespeed||``
oval block close to the other ``||fwdMotors:set middleServo to 50 %||`` to
replace ``||fwdMotors:50||`` of ``||fwdMotors:set middleServo to 50 %||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 23
Click ``||Logic:Logic||`` drag and drop ``||Logic:if true then else||`` block
under ``||fwdMotors:set middleServo||`` ``||Variables:turbinespeed||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
    }
    else{
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 24
Click ``||Logic:Logic||`` drag and drop ``||Logic:if true then else||`` block
under the other ``||fwdMotors:set middleServo||`` ``||Variables:turbinespeed||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
    }
    else{
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (true){
    }
    else{
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 25
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||`` block
under ``||Logic:If true then else||`` block. Change the ``||fwdSensors:LED||``
colour to ``||fwdSensors:Green||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (true){
    }
    else{
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 26
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||`` block
under the other ``||Logic:If true then else||`` block.  Change the ``||fwdSensors:LED||``
colour to ``||fwdSensors:Green||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (true){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 27
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||`` block
under both ``||Logic:else||`` condition.  Change the ``||fwdSensors:LED||``
colour to yellow.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (true){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 28
Click ``||Logic:Logic||`` drag and drop ``||Logic:Comparison <||`` ``||Logic:0 < 0||``
 block to replace the ``||Logic:true||`` condition in 
 both ``||Logic:if true then else||`` blocks.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (0<0){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (0<0){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 29
Click ``||Variables:Variables||`` drag and drop ``||Variables:turbinespeed||``
oval block to replace the ``||Logic:0||`` on the left side in both
``||Logic:Comparison||`` blocks.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed<0){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (turbinespeed<0){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 30
Click ``||Logic:<||`` change it to ``||Logic:>||`` on
``||fwdSensors:on dial1 turned by CW||`` block. Change the ``||Logic:0||`` to
``||Logic:80||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed>80){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (turbinespeed<0){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 31
Change the ``||Logic:0||`` to
``||Logic: -80||`` on the ``||Logic:<||`` block under
``||fwdSensors:on dial1 turned by CCW||`` block.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed>80){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (turbinespeed<-80){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 32
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing to||`` block
inside ``||fwdSensors:on touch down||`` block under ``||fwdMotors:set middleServo to 0%||`` block.
Change the ``||fwdSensors:LED||`` colour to ``||control:Black||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed <= -80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed >= 80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 33
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![dial-servo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-13-wind.gif)

## Step 34 @showdialog
Congratulations on completing your Power Storage for Wind Energy Project! 

## Step 35 @showdialog
After your project is complete, go back to the lesson for more challenges and extensions.
