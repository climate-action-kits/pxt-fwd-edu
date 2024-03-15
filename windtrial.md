# Powering the Future with Wind Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
```

## Step 1 @showdialog
Welcome to Powering the Future with Wind Energy Coding Tutorial!
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
In this tutorial we will code the Dial component to turn the wind turbine in the same direction as the Dial is being turned.
Use the Dial's button function to stop the wind turbine.

## Step 3 @showdialog
Turn on the Climate Action Kit board.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Next, click the ``|Download|`` button to download the blank project to start-up the simulators.

## Step 6 @showdialog
This is how the simulators should look after a successful download. You can see the Dial, and the Servo Motors along side the Pump.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif)

## Step 7 @showhint
Look below the @boardname@ simulator to see the Climate Action kit Breakout Board and the connected sensors.
Try turning the Dial on your project, the virtual  simulator will react to it.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 8
Click ``||fwdSensors:Sensors||`` drag and drop
``||fwdSensors:on dial1 turned difference||`` block in workspace.

~hint What did that do?
- This is a block known as an imput block
- We are giving the computer instruction 
- Anything placed inside will occur when the dial is turned
hint~ 

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
```

## Step 9
Right click ``||fwdSensors:on dial1 turned difference||`` block and duplicate. _Note: New block will be grey._

~hint What did that do?
- We are creating another input block for the code
- Anything placed inside will occur when the dial is turned
hint~ 
![greyed out example](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-greyed-out-demo.png)

## Step 10
Change the direction arrow of the greyed out ``||fwdSensors:on dial1 turned difference||`` block. _Note: Greyed out block will turn green._
![dial direction](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-direction-switch.gif)

~hint What did that do?
- We cannot have two different actions for the same direction
- We have changed on to turn right and the other to turn left
hint~ 

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 11
Click ``||fwdSensors:Sensors||`` drag and drop
``||fwdSensors:on touch down||`` block in workspace.

~hint What did that do?
- We are giving the computer a new kind of instruction
- Now we want an action to happen when we press down on the dial
hint~ 

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 12
Click ``||fwdMotors:Motors||`` drag and drop
``||fwdMotors:set leftServo to 50 %||`` inside
``||fwdSensors:on dial1 turned difference||`` block.
Change ``||fwdMotors:leftServo||`` to ``||fwdMotors:middleServo||``.

~hint What did that do?
- We are telling the code to set the speed of the servo
- We want to send the code to the correct servo
hint~  

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 13
Right click ``||fwdMotors:set middleServo to 50 %||`` block and duplicate.
Drag and drop inside the second ``||fwdSensors:on dial1 turned difference||`` block.

~hint What did that do?
- We are giving another instruction to the code this time about speed
- When we want the speed to be controled by the input block
hint~ 

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

## Step 16
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo 50 %||`` block inside ``||fwdSensors:on touch down||`` block. Change ``||fwdMotors:leftServo||`` to ``||fwdMotors:middleServo||``.

~hint What did that do?
- We are adding the action to this event block
- When we press down on the dial an action will be triggered
hint~
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

## Step 17
Change speed of ``||fwdMotors:set middleServo 50 %||`` block inside ``||fwdSensors:on touch down||``
to ``||0||``.

~hint What did that do?
- This action will be triggered when the dial is pressed down
- When that happens the servo will stop moving
hint~ 

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

## Step 18 @showhint
``|Download|`` and test your code. 

## Step 19 @showdialog
If after ``|Downloading|`` your project does not work please refer to the
live simulators and make sure your components are assigned correctly.


## Step 20 @showdialog
Congratulations on completing your Powering the Future with Wind Energy Project!

## Step 21 @showdialog
After your project is complete go back to the lesson for more challenges and extensions.
