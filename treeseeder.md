# Tree Seeder       
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Tree Seeder Coding Tutorial
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-treeseeder-400.png)

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
![servo-nocode](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-2.png)

## Step 6
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:Setup Driving||`` block inside ``||basic:on start||`` loop.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo1,
)
```
## Step 7
Change the ``||fwdMotors:left motor to servo2||``
and ``||fwdMotors: right motor to servo3||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
```
## Step 8
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set servo 1 to 0 '||``
block under ``||fwdMotors:Setup Driving||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
```
## Step 9
Click ``||input:Input||`` drag and drop ``||input:on button A pressed||`` block
in workspace.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {    
    })
)
```
## Step 10
Click ``||loops:Loops||`` drag and drop ``||loops:repeat 4 times||`` block inside
``||input:on button A pressed||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {}
})
```
## Step 11
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:drive forward at 50||``
block inside ``||loops:repeat 4 times||`` loop block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    }
})
```
## Step 12
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||`` block
under ``||fwdMotors:drive forward at 50||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(100)
    }
})
```
## Step 13
Change ``||basic:pause (ms) 100||`` to ``||basic: (ms) 2000||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    }
})
```
## Step 14
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set servo1 0 '||`` 
block under ``||basic:pause (ms) 2000||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.servo1.fwdSetAngle(0)
    }
})
```
## Step 15
Change ``||fwdMotors:set servo1 to 0 '||`` to ``||fwdMotors:45||``
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.servo1.fwdSetAngle(45)
    }
})
```
## Step 16   
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||`` under 
``||fwdMotors:set servo1 to 45 '||`` block. Change ``||basic:(ms) 100||`` to
``||basic:(ms) 500||``
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.servo1.fwdSetAngle(45)
    basic.pause(500)
    }
})
```
## Step 17
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set servo1 to 0 '||``
block under ``||basic:pause (ms) 500||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.servo1.fwdSetAngle(45)
    basic.pause(500)
    fwdMotors.servo1.fwdSetAngle(0)
    }
})
```
## Step 18
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:stop motors||`` block
under ``||loops:repeat 4 times||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.servo1.fwdSetAngle(45)
    basic.pause(500)
    fwdMotors.servo1.fwdSetAngle(0)
    }
    fwdMotors.stop()
})
```

## Step 19
Click ``||fwdMotors:+||`` on ``||fwdMotors:Setup Driving||``
block inside ``||basic:on start||`` block. Set bias to ``||fwdMotors: 0||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
0,
)
fwdMotors.servo1.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 100)
        basic.pause(2000)
        fwdMotors.servo1.fwdSetAngle(45)
        basic.pause(500)
        fwdMotors.servo1.fwdSetAngle(0)
    }
    fwdMotors.stop()
})
```
## Step 20 @showhint
``|Download|`` and test your code. The simulator shows how it should work.
Congratulations on completing your Automated Tree Seeder Prototype! - Go back to the lesson for more activities and extensions.
![servos](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-15-tree.gif)
