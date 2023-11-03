# Autonomous Electric Vehicles of the Future
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

## Step 1 @showdialog
Welcome to Autonomous Electric Vehicles of the Future
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-electric-200.png)

## Step 2 @showdialog
In this coding tutorial Use the EVs Sonar Sensor to avoid obstacles in its path by following a preset collision avoidance mechanism.

## Step 3 @showdialog
Turn on the Climate Action Kit board.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Next, click the ``|Download|`` button to download the blank project to start-up the simulators.

## Step 6 @showdialog
This is how the simulators should look after a successful download. You can see
the Servo Motors along side the Pump.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/board-no-sensors.png)

## Step 7 @showhint
Look below the @boardname@ simulator to see the Climate Action Board and the connected devices. Try to turn the motors on and off using
the simulator and observe the changes.
![servo-nocode](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-sim-tree.gif)

## Step 8
- Click ``||fwdMotors:Motors||``
- Drag and drop ``||fwdMotors:setup driving left motor right motor||`` block
on the workspace.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.leftServo,
)
```

## Step 9
Change the ``||fwdMotors:right motor to rightServo||``.
Keep the ``||fwdMotors: left motor to leftServo||``. 
Also set ``||fwdMotors:bias to 0||``. 
- ``||fwdMotors:setup_driving(left_servo,right_servo,bias)||``
![changing-servo-bias](https://mbakhtar.github.io/ev-python-tutorial-v1/setup-driving-py.gif)
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
```

## Step 10
Click ``||basic:Basic||`` drag and drop ``||basic:run code forever||`` loop.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
})
```

## Step 11
Erase the word ``||pass||`` inside ``||basic:forever||`` loop.
Click ``||logic:Logic||`` drag and drop ``||logic:if else||`` block
inside ``||basic:run code forever||`` block.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0)
basic.forever(function () {
    if (true) {}
    else {}
})
```

## Step 12
Erase the word ``||True||``. Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:this distance is direction threshold m||``
block for ``||logic:If :||`` condition. Change threshold distance to 0.2.
Also change ``||OVER to UNDER||``.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2 fwdSensors.ThresholdDirection.UNDER)) {
        }
    else {}
})
```

## Step 13
Erase the word ``||pass||`` inside ``||logic:if :||`` loop. Click
``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:stop motors||`` block
inside ``||Logic:if condition||``.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        }
    else {}
})
```

## Step 14
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:stop motors||``.
Change ``||basic:100||`` to ``||basic:1000||``.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
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
## Step 15
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:drive direction at speed||``block.
Change ``||fwdMotors:Forward||`` to ``||fwdMotors:Reverse||``.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
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

## Step 16
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:drive direction at speed||``.
Change ``||basic:100||`` to ``||basic:1000||``.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
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

## Step 17
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:turn angle in place||`` block
under ``||basic:pause (ms) 1000||`` block. Change ``||fwdMotors:0||`` to ``||fwdMotors:25||``.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
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

## Step 18
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:turn angle in place||``.
Change ``||basic:100||`` to ``||basic:1000||``.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
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

## Step 19
Erase the word ``||pass||`` inside ``||logic:else :||`` loop.
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:drive direction at speed||``
block inside ``||Logic:else condition||``.
```spy
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
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

## Step 20 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![sonar-servos](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-17-ev-obstacle.gif)

## Step 21 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![servos](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/final-sim-tree.gif)

## Step 22 @showdialog
If after ``|Downloading|`` your project does not work please refer to the
image and make sure your components are assigned correctly.
![correct-assignment](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/correct-assignment-tree.png)

## Step 23 @showdialog
Need help in assigning the right components to their simulators. Watch the video.
![final-download](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/servo-assign.gif)

## Step 24 @showdialog
Congratulations on completing your Autonomous Electric Vehicles of the Future Project!

## Step 25 @showdialog
After your project is complete go back to the lesson for more challenges and extensions.
