# Autonomous Electric Vehicles of the Future
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Autonomous Electric Vehicles of the Future
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
![line](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-2.png)

## Step 6
- Click ``||fwdMotors:Motors||`` 
- Drag and drop ``||fwdMotors:setup driving left motor right motor||`` block
on the workspace.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo1,
)
```
## Step 7
Change the ``||fwdMotors:right motor to servo2||``. 
Keep the ``||fwdMotors: left motor to servo1||``. Also set ``||fwdMotors:bias to 0||``.
![changing-servo-bias](https://mbakhtar.github.io/ev-python-tutorial-v1/setup-driving-py.gif)
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0
)
```
## Step 8
Click ``||basic:Basic||`` drag and drop ``||basic:run code forever||`` loop.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0
)
basic.forever(function () {
})
```
## Step 9
Erase the word ``||pass||`` inside ``||basic:forever||`` loop.
Click ``||logic:Logic||`` drag and drop ``||logic:if else||`` block 
inside ``||basic:run code forever||`` block.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0)
basic.forever(function () {
    if (true) {} 
    else {}
})
```
## Step 10
Erase the word ``||True||``. Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:this distance is direction threshold m||``
block for ``||logic:If :||`` condition. Change threshold distance to 0.2. 
Also change ``||OVER to UNDER||``.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2 fwdSensors.ThresholdDirection.UNDER)) {
        } 
    else {}
})
```
## Step 11
Erase the word ``||pass||`` inside ``||logic:if :||`` loop. Click 
``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:stop motors||`` block 
inside ``||Logic:if condition||``.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        } 
    else {}
})
```
## Step 12
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:stop motors||``. 
Change ``||basic:100||`` to ``||basic:1000||``.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        } 
    else {}
})
```
## Step 13
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:drive direction at speed||``block.
Change ``||fwdMotors:Forward||`` to ``||fwdMotors:Reverse||``.

```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
        } 
    else {}
})
```
## Step 14
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:drive direction at speed||``. 
Change ``||basic:100||`` to ``||basic:1000||``.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
        basic.pause(1000)
    } 
    else {}
})
```
## Step 15
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:turn angle in place||`` block 
under ``||basic:pause (ms) 1000||`` block. Change ``||fwdMotors:0||`` to ``||fwdMotors:25||``.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
        basic.pause(1000)
        fwdMotors.turn(25)
        } 
    else {}
})
```
## Step 16
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:turn angle in place||``. 
Change ``||basic:100||`` to ``||basic:1000||``.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
        basic.pause(1000)
        fwdMotors.turn(25)
        basic.pause(1000)
    } else {}
})
```
## Step 17
Erase the word ``||pass||`` inside ``||logic:else :||`` loop.
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:drive direction at speed||``
block inside ``||Logic:else condition||``.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
        basic.pause(1000)
        fwdMotors.turn(25)
        basic.pause(1000)
    } else {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    }
})
```
## Step 18
This is the final code.
```spy
fwdMotors.setupDriving(
fwdMotors.servo1,
fwdMotors.servo2,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
        basic.pause(1000)
        fwdMotors.turn(25)
        basic.pause(1000)
    } else {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    }
})
```
## Step 19 @showhint
``|Download|`` and test your code. The simulator shows how it should work.
Congratulations on completing your Autonomous Electric Vehicles of the Future Prototype! - Go back to the lesson for more activities and extensions.
![sonar-servos](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-17-ev-obstacle.gif)
