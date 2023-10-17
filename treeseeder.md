# Replanting Our Forests with Automated Tree Seeders      
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Replanting Our Forests with Automated Tree Seeders Coding Tutorial
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-treeseeder-200.png)

## Step 2 @showdialog
In this coding tutorial we will have the tree seeding vehicle drive forward using the 
continuous servo motors and drop 4 'simulated seeds' at set time intervals using the 
positional servo motor.

## Step 3 @showdialog
Turn on the Climate Action Kit board.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Click three dots besides the ``|Download|`` button and follow the steps to pair your micro:bit.
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
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:Setup Driving||`` block inside ``||basic:on start||`` loop.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.leftServo,
)
```

## Step 9
Change the ``||fwdMotors:left motor to leftServo||``
and ``||fwdMotors: right motor to rightServo||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
```

## Step 10
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo to 0°||``
block under ``||fwdMotors:Setup Driving||`` block. Change ``||fwdMotors:leftServo||`` to
``||fwdMotors:middleServo||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
```

## Step 11
Click ``||input:Input||`` drag and drop ``||input:on button A pressed||`` block
in workspace.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {    
    })
)
```

## Step 12
Click ``||loops:Loops||`` drag and drop ``||loops:repeat 4 times||`` block inside
``||input:on button A pressed||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {}
})
```

## Step 13
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:drive forward at 50%||``
block inside ``||loops:repeat 4 times||`` loop block.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    }
})
```

## Step 14
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||`` block
under ``||fwdMotors:drive forward at 50%||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(100)
    }
})
```

## Step 15
Change ``||basic:pause (ms) 100||`` to ``||basic: (ms) 2000||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    }
})
```

## Step 16
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo 0°||``
block under ``||basic:pause (ms) 2000||`` block. Change ``||fwdMotors:leftServo||`` to
``||fwdMotors:middleServo||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(0)
    }
})
```

## Step 17
Change ``||fwdMotors:set middleServo to 0°||`` to ``||fwdMotors:45°||``
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(45)
    }
})
```

## Step 18
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||`` under
``||fwdMotors:set middleServo to 45°||`` block. Change ``||basic:(ms) 100||`` to
``||basic:(ms) 500||``
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(45)
    basic.pause(500)
    }
})
```

## Step 19
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo to 0°||``
block under ``||basic:pause (ms) 500||`` block. Change ``||fwdMotors:leftServo||`` to
``||fwdMotors:middleServo||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.middleServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(45)
    basic.pause(500)
    fwdMotors.middleServo.fwdSetAngle(0)
    }
})
```

## Step 20
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:stop motors||`` block
under ``||loops:repeat 4 times||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
fwdMotors.leftServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(45)
    basic.pause(500)
    fwdMotors.middleServo.fwdSetAngle(0)
    }
    fwdMotors.stop()
})
```

## Step 21
Click ``||fwdMotors:+||`` on ``||fwdMotors:Setup Driving||``
block inside ``||basic:on start||`` block. Set bias to ``||fwdMotors: 0||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0,
)
fwdMotors.leftServo.fwdSetAngle(0)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 100)
        basic.pause(2000)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(500)
        fwdMotors.middleServo.fwdSetAngle(0)
    }
    fwdMotors.stop()
})
```

## Step 22 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![servos](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/final-sim-tree.gif)

## Step 23 @showdialog
If after ``|Downloading|`` your project does not work please refer to the 
image and make sure your components are assigned correctly.
![correct-assignment](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/correct-assignment-tree.png)

## Step 24 @showdialog
Need help in assigning the right components to their simulators. Watch the video.
![final-download](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/servo-assign.gif)

## Step 25 @showdialog
Congratulations on completing your Replanting Our Forests with Automated Tree Seeders Project!

## Step 26 @showdialog
After your project is complete go back to the lesson for more challenges and extensions.
