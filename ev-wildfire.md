# Wildfire Tracking with Autonomous Vehicles 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Wildfire Tracking with Autonomous Vehicles
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/wildfire-iso-resized.png)

## Step 2 @showdialog
In this coding tutorial the vehicle will be moving around a perimeter and keeping
 a check on Light and Temperature. Press the button A and B to start and stop moving the vehicle.

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
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:setup driving||`` block
inside ``||Basic:on start||`` block.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.leftServo,
)
```

## Step 9
Change the ``||fwdMotors:right motor to rightServo||``.
Keep the ``||fwdMotors: left motor to leftServo||``.
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
```

## Step 10
Click ``||Variables:Variables||`` and then click |Make a Variable| to create
these ``||Variables:Variables||``
- ``||Variables:IsDrivingEnabled||``
- ``||Variables:lightThreshold||``
- ``||Variables:temperatureThreshold||``

## Step 11
Click ``||Input:Input||`` drag and drop ``||Input:on button A pressed||`` block. 
Right click and duplicate it to get another ``||Input:on button A pressed||`` block. 
Change ``||Input:A||`` to ``||Input:B||`` for the greyed ``||Input:on button A pressed||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
})
```

## Step 12
Click ``||Variables:Variables||`` drag and drop ``||Variables:set IsDrivingEnabled to 0||`` block 
inside ``||Input:on button A pressed||`` block and also inside 
``||Input:on button B pressed||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = 0
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = 0
})

fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
})
```

## Step 13
Click ``||Logic:Logic||`` drag and drop ``||Logic:true||`` block to replace
``||Variables:0||`` of ``||Variables:set IsDrivingEnabled to 0||`` block 
inside ``||Input:on button A pressed||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = 0
})
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
})
```

## Step 14
Click ``||Logic:Logic||`` drag and drop ``||Logic:false||`` block to replace
``||Variables:0||`` of ``||Variables:set IsDrivingEnabled to 0||`` block 
inside ``||Input:on button B pressed||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
IsDrivingEnabled = false
basic.forever(function () {
})
```

## Step 15
Click ``||Logic:Logic||`` drag and drop ``||Logic:if true then else||`` block
inside ``||basic:forever||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (true) {
    }
    else {
    }
})
```

## Step 16
Click ``||Loops:Loops||`` drag and drop ``||Loops:repeat 4 times||``
block to nest inside ``||Logic:if true then||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (true) {
        for (let index = 0; index < 4; index++) {
    }
    } else {
    }
})
```

## Step 17
Click ``||logic:Logic||`` drag and drop ``||logic:if true then else||`` block
to nest inside ``||Loops:repeat 4 times||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (true) {
    for (let index = 0; index < 4; index++){
        if (true) {                
    } 
    else {
    } 
    } }
    else {
    }
})
```

## Step 18
Click ``||Variables:Variables||`` drag and drop ``||Variables:IsDrivingEnabled||`` block
to replace ``||Logic:true||`` condition of ``||Logic:if true then||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
    for (let index = 0; index < 4; index++){
        if (true) {                
    } 
    else {
    }
    }
    }else {
    }
})
```

## Step 19
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:stop motors||``
block inside ``||Logic:else condition||``.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
    for (let index = 0; index < 4; index++){
        if (true) {                
    } 
    else {
    }
    } 
    }else {
    fwdMotors.stop()
    }
})
```

## Step 20
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:drive forward at 50||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
           if (true) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 21
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:drive forward at 50||``.
Change ``||basic:100||`` to ``||basic:5000||``.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
           if (true) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 22
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:turn 0' in place||`` block
under ``||basic:pause (ms) 5000||`` block. Change ``||fwdMotors:0||`` to ``||fwdMotors:25||``.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (true) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 23
Click ``||Logic:Logic||`` drag and drop ``||Logic: or ||``
block to replace ``||Logic:true||`` condition under 
of ``||Logic:if true then||`` block under ``||fwdMotors:turn 25' in place||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (0 || 0) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```
## Step 24
Click ``||Logic:Logic||`` drag and drop ``||Logic: or ||``
block to replace left side of ``||Logic: or ||`` block condition.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (0 || 0 || 0) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 25
Click ``||Logic:Logic||`` drag and drop ``||Logic: 0 < 0||``
block to replace left side of ``||Logic: or ||`` block condition.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (0 < 0  || 0 || 0) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 26
Click ``||Logic:Logic||`` drag and drop ``||Logic: 0 < 0||``
block to replace middle ``||Logic: or ||`` block condition.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (0 < 0  || 0 < 0 || 0) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 27
Click ``||Logic:Logic||`` drag and drop ``||Logic: 0 < 0||``
block to replace right ``||Logic: or ||`` block condition.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (0 < 0  || 0 < 0 || 0 < 0) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```
## Step 28
Click ``||Variables:Variables||`` drag and drop ``||Variables:lightThreshold||``
block to replace left ``||Logic:0||`` of ``||Logic:Comparison||`` condition.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (lightThreshold < 0  || 0 < 0 || 0 < 0) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```
## Step 29
Click ``||Variables:Variables||`` drag and drop ``||Variables:temperatureThreshold||``
block to replace left ``||Logic:0||`` of middle ``||Logic:Comparison||`` condition.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (lightThreshold < 0  || temperatureThreshold < 0 || 0 < 0) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 30
Click ``||Input:Input||`` drag and drop ``||Input:light level||``
block to replace right ``||Logic:0||`` of  ``||Logic:Comparison||`` condition with
``||Variables:lightThreshold||`` block on the left.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (lightThreshold < input.lightLevel()  || temperatureThreshold < 0) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 31
Click ``||Input:Input||`` drag and drop ``||Input:temperature ('C)||``
block to replace right ``||Logic:0||`` of  ``||Logic:Comparison||`` condition with
``||Variables:temperatureThreshold||`` block in the middle.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (lightThreshold < input.lightLevel()  || temperatureThreshold < input.temperature()) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 32
Click ``||Variables:Variables||`` drag and drop ``||Variables:set temperatureThreshold to 0||`` and 
``||Variables:set lightThreshold to 0||`` blocks inside
``||Basic:on start||`` block under ``||fwdMotors:setup driving||`` block.
Recommended threshold values:
- Temperature = 25
- Light = 100
- _Note: Adjust the threshold values according to your surroundings._
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
let lightThreshold = 100
let temperatureThreshold = 25
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
           if (lightThreshold < input.lightLevel()  || temperatureThreshold < input.temperature()) {
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```
## Step 33
Click ``||Loops:Loops||`` drag and drop ``||Loops:repeat 4 times||``
block to nest inside ``||Logic:if true then||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
let lightThreshold = 100
let temperatureThreshold = 25
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
            if (input.lightLevel() > lightThreshold || input.temperature() > temperatureThreshold) {
                for (let index = 0; index < 4; index++) {
                    }
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 34
Click ``||Music:Music||`` drag and drop two ``||Music:play tone Middle C for 1 beat||``
blocks to nest inside ``||Loops:repeat 4 times||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
let lightThreshold = 100
let temperatureThreshold = 25
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
            if (input.lightLevel() > lightThreshold || input.temperature() > temperatureThreshold) {
                for (let index = 0; index < 4; index++) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
            } else {
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```
## Step 35
Click ``||Music:Music||`` drag and drop ``||Music:stop all sounds||``
blocks to nest inside ``||Logic:else||`` condition.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
let lightThreshold = 100
let temperatureThreshold = 25
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
            if (input.lightLevel() > lightThreshold || input.temperature() > temperatureThreshold) {
                for (let index = 0; index < 4; index++) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
            } else {
                music.stopAllSounds()
            }
        }
    } else {
        fwdMotors.stop()
    }
})
```


## Step 36
Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||`` block under 
``||Logic:else||`` condition. Change ``||Basic:100||`` to ``||Basic:1000||``.
```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
let lightThreshold = 100
let temperatureThreshold = 25
basic.forever(function () {
    if (IsDrivingEnabled) {
        for (let index = 0; index < 4; index++) {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
            basic.pause(5000)
            fwdMotors.turn(25)
            if (input.lightLevel() > lightThreshold || input.temperature() > temperatureThreshold) {
                for (let index = 0; index < 4; index++) {
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(262, music.beat(BeatFraction.Whole))
                }
            } else {
                music.stopAllSounds()
            }
            basic.pause(1000)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Step 37 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![sonar-servos](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-17-ev-obstacle.gif)

## Step 38 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![servos](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/final-sim-tree.gif)

## Step 39 @showdialog
If after ``|Downloading|`` your project does not work please refer to the
image and make sure your components are assigned correctly.
![correct-assignment](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/correct-assignment-tree.png)

## Step 40 @showdialog
Need help in assigning the right components to their simulators. Watch the video.
![final-download](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/servo-assign.gif)

## Step 41 @showdialog
Congratulations on completing your Wildfire Tracking with Autonomous Vehicles Project!

## Step 42 @showdialog
After your project is complete go back to the lesson for more challenges and extensions.
