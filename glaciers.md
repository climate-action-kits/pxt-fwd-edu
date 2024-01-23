# Monitoring Glaciers 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Monitoring Glaciers
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/glacier-comb-resized.png)

## Step 2 @showdialog
In this coding tutorial the device continuously measures distances to its left and right, and decides which direction to go based on which path is less obstructed.

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
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo to 0'||`` block
inside ``||Basic:on start||`` block. Change ``||fwdMotors:leftServo||`` to ``||fwdMotors:middleServo||``.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    })
```

## Step 9
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo to 0'||`` block
inside ``||Basic:forever||`` block. Change ``||fwdMotors:leftServo||`` to ``||fwdMotors:middleServo||``.
Also, change ``||fwdMotors:0'||`` to ``||fwdMotors:90'||``
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
})
```

## Step 10
Click ``||Variables:Variables||`` and then click |Make a Variable| to create
these ``||Variables:Variables||``
- ``||Variables:RightDistance||``
- ``||Variables:LeftDistance||``

## Step 11
Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||`` block 
inside ``||Basic:forever||`` block under ``||fwdMotors:set middleServo to 90'||`` block. 
Change ``||Basic:100||`` to ``||Basic:2000||``.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    })
```

## Step 12
Click ``||Variables:Variables||`` drag and drop ``||Variables:set RightDistance to 0||`` block
inside ``||Basic:forever||`` block under ``||Basic:pause (ms) 2000||`` block.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = 0
    })
```
## Step 13
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:sonar1 distance (m)||`` block 
to replace ``||Variables:0||`` of ``||Variables:set RightDistance to 0||`` block. 
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    })
```
## Step 14
Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||`` block
under ``||Variables:set RightDistance to||`` ``||fwdSensors:sonar1 distance (m)||``.
Change ``||Basic:100||`` to ``||Basic:2000||``.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
   })
```

## Step 15
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo to 0'||`` block
under ``||Basic:pause (ms) 2000||`` block. Change ``||fwdMotors:leftServo||`` to ``||fwdMotors:middleServo||`` and
change ``||fwdMotors:0'||`` to ``||fwdMotors:-90'||``.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    })
```

## Step 16
Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||``
block under ``||fwdMotors:set middleServo to -90'||`` block. Change ``||Basic:100||`` 
to ``||Basic:2000||``
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
   })
```

## Step 17
Click ``||Variables:Variables||`` drag and drop ``||Variables:set LeftDistance to 0||`` block
under ``||Basic:pause (ms) 2000||`` block.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = 0
    })
```

## Step 18
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:sonar1 distance (m)||`` block
to replace ``||Variables:0||`` of ``||Variables:set LeftDistance to 0||`` block.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    })
```

## Step 19
Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||`` block
under ``||Variables:set LeftDistance to||`` ``||fwdSensors:sonar1 distance (m)||`` block
. Change ``||Basic:100||`` to ``||Basic:2000||``.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
  })
```

## Step 20
Click ``||Logic:Logic||`` drag and drop ``||Logic:if true then else||``
block under ``||Basic:pause (ms) 2000||`` block.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (true) {
      } else {
        }
    })
```

## Step 21
Click ``||Logic:Logic||`` drag and drop ``||Logic:0 < 0||`` block to replace ``||Logic:true||`` condition.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (0 < 0) {
        } else {
        }
    })
```

## Step 22
Click ``||Variables:Variables||`` drag and drop ``||Variables:RightDistance||`` block to 
replace left ``||Logic:0||`` of ``||Logic:Comparison||`` block. Click ``||Variables:Variables||`` again 
drag and drop ``||Variables:LeftDistance||`` block to 
replace right ``||Logic:0||`` of ``||Logic:Comparison||`` block.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        } else {
        }
    })
```

## Step 23
Click ``||Basic:Basic||`` drag and drop ``||Basic:show string " "||`` block
inside ``||Logic:if then||`` condition. Type ``||Basic:Go Left||`` in ``||Basic:show string " "||`` block.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        } else {
        }
    })
```

## Step 24
Click ``||Basic:Basic||`` drag and drop ``||Basic:clear screen||`` block under 
``||Basic:show string "Go Left"||`` block.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
    }
})
```

## Step 25
Click ``||Basic:Basic||`` drag and drop ``||Basic:show string " "||`` block
inside ``||Logic:if then||`` condition. Type ``||Basic:Go Right||`` in ``||Basic:show string " "||`` block.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
        basic.showString("Go Right")
    }
    })
```

## Step 26
Click ``||Basic:Basic||`` drag and drop ``||Basic:clear screen||`` block under 
``||Basic:show string "Go Right"||`` block.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
        basic.showString("Go Right")
        basic.clearScreen()
    }
})
```

## Step 27
Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||``
block under ``||Logic:if then else ||`` block. Change ``||Basic:100||`` to ``||Basic:1000||``.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
        basic.showString("Go Right")
        basic.clearScreen()
    }
    basic.pause(1000)
})
```

## Step 28
Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||`` block under 
``||Logic:else||`` condition. Change ``||Basic:100||`` to ``||Basic:1000||``.
```blocks
fwdMotors.middleServo.fwdSetAngle(0)
basic.forever(function () {
    fwdMotors.middleServo.fwdSetAngle(90)
    basic.pause(2000)
    RightDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    fwdMotors.middleServo.fwdSetAngle(-90)
    basic.pause(2000)
    LeftDistance = fwdSensors.sonar1.fwdDistance()
    basic.pause(2000)
    if (RightDistance < LeftDistance) {
        basic.showString("Go Left")
        basic.clearScreen()
    } else {
        basic.showString("Go Right")
        basic.clearScreen()
    }
    basic.pause(1000)
})
```

## Step 29 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![sonar-servos](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-17-ev-obstacle.gif)

## Step 30 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![servos](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/final-sim-tree.gif)

## Step 31 @showdialog
If after ``|Downloading|`` your project does not work please refer to the
image and make sure your components are assigned correctly.
![correct-assignment](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/correct-assignment-tree.png)

## Step 32 @showdialog
Need help in assigning the right components to their simulators. Watch the video.
![final-download](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/servo-assign.gif)

## Step 33 @showdialog
Congratulations on completing your Monitoring Glaciers Project!

## Step 34 @showdialog
After your project is complete go back to the lesson for more challenges and extensions.
