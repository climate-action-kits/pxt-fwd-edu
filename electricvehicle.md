# Electric Vehicle Prototype
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
solar=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Electric Vehicle Coding Tutorial
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-electriccar-400.png)

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
![line](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-5-Line.gif)

## Step 6
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:Setup Driving||`` block inside ``||basic:on start||`` loop.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo1,
)
```
## Step 7
Change the ``||fwdMotors:right motor to servo2||``. 
Keep the ``||fwdMotors: left motor to servo1||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
```
## Step 8
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||`` block inside ``||basic:forever||`` loop.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (true) {
            }
    })
```
## Step 9
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||`` block under the 1st ``||logic:if true then||`` block
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (true) {
            }
    if (true) {
            }
})
```
## Step 10
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||`` block under the 2nd ``||logic:if true then||`` block. _Note: Three ``||logic:if true then||`` blocks are used._
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (true) {
            }
    if (true) {
            }
    if (true) {
            }
})
```
## Step 11
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors: line1 state is •||`` to replace ``||logic:true||`` condition of 1st ``||logic:if true then||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        }
    if (true) {
        }
    if (true) {
        }
})
```
## Step 12
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors: line2 state is o||`` to replace ``||logic:true||`` condition of 2nd ``||logic:if true then||`` block. _Note: Use drop down menu to change line number._
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
        }
    if (true) {
        }
})
```
## Step 13
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors: line3 state is •||`` to replace ``||logic:true||`` condition of 3rd ``||logic:if true then||`` block.  _Note: Use drop down menu to change line number._
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
        }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        }
})
```
## Step 14
Click ``||fwdMotors: Motors||`` drag and drop ``||fwdMotors: Turn 0 in place||`` block inside 1st ``||logic: if||`` 
``||fwdSensors:line1 state is •||`` ``||logic:then||`` condition.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(0)
        }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
            }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        })
```
## Step 15
Change ``||fwdMotors:Turn 0||`` to ``||fwdMotors:5||``
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(5)
        }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
            }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        })
```
## Step 16
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:Drive forward 50||`` block inside 2nd
``||logic:if||`` ``||fwdSensors:line2 state is o||`` ``||logic:then||`` condition.
Change the ``||fwdMotors:Drive forward 50||`` to ``||fwdMotors:20||``
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(5)
            }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
        }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        }
})
```
## Step 17
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors: Turn 0 in place||`` block inside 3rd ``||logic:if||``
``||fwdSensors:line3 state is •||`` ``||logic:then||`` condition. 
Change the ``||fwdMotors:Turn 0||`` to ``||fwdMotors:-5||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(5)
            }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
        }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(-5)
        }
})
```
## Step 18
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||`` block under ``||fwdMotors:Turn 5 in place||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(5)
        basic.pause(100)
    }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
        }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(-5)
        }
})
```
## Step 19
Click ``||basic:basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:Drive Forward at 20||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(5)
        basic.pause(100)
    }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
        basic.pause(100)
    }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(-5)
    }
})
```
## Step 20
Click ``||basic:basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:Turn -5 in place||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(5)
        basic.pause(100)
    }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
        basic.pause(100)
    }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(-5)
        basic.pause(100)
    }
})
```
## Step 21
Click ``||fwdMotors:+||`` on ``||fwdMotors:Setup Driving||``
block inside ``||basic:on start||`` block. Set bias to ``||fwdMotors: 0||``.
Change ``||basic:pause (ms) 100||`` to ``||basic:500||`` for all 
``||basic:pause||`` blocks.
```blocks
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0
)
basic.forever(function () {
    if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(5)
        basic.pause(500)
    }
    if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
        basic.pause(500)
    }
    if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
        fwdMotors.turn(-5)
        basic.pause(500)
    }
})
```
## Step 22 @showhint
``|Download|`` and test your code. The simulator shows how it should work.
Congratulations on completing your Electric Vehicle Prototype! - Go back to the lesson for more activities and extensions.
![line-servos](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-16-ev-line.gif)
