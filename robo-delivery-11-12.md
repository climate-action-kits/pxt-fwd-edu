# Warehouse Efficiency using Autonomous Delivery Robots and AI 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
solar=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Automating Deivery: Integrating AI with Electric Vehichles
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

~hint  What did that do? 
- Assigning specific roles to the left and right motors so they can drive forward and turn properly.
- We are teaching our robot which wheel is left and which wheel is right 
hint~
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.leftServo,
)
```

## Step 7 
Change the ``||fwdMotors:right motor to rightServo||``. 
Keep the ``||fwdMotors: left motor to leftServo||``.

~hint What did that do?
  - We can't have code going to the same servo 
  - This is why we are matching right and left
hint~

```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
```

## Step 8
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||`` block inside ``||basic:forever||`` loop.

~hint What did that do?
- Using the If/then block means we are giving the code a choice
- Placing it in forever means the code will never stop checking if the condition is met 
hint~
```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
basic.forever(function () {
    if (true) {
            }
    })
    ```

## Step 9
Click ``||Variables:Variables||``. Click on ``||Make a Variable||`` to create a new ``||Variables:Variable||``.  
Name it ``||Variables:IsDrivingEnabled||``.

~hint What did that do? 
- We are telling our computer to track information for us
- This one is asking the computer to track if we are driving or not 
hint~ 

```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
basic.forever(function () {
    if (true) {
            }
    })
```


## Step 10
Click ``||Variables:Variables||`` drag and drop ``||Variables:IsDrivingEnabled||`` block
block to replace ``||logic:true||`` condition of ``||logic:if true then||`` block inside ``||basic:forever||`` loop.

~hint What did that do?
- We are replacing part of the true condition of the If then with our variable
- This way the conditional will check if you are driving or not 
hint~ 

```blocks
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
basic.forever(function () {
    if (IsDrivingEnabled) {
            }
    })
 ```


## Step 11 
Click ``||Input:Input||`` drag and drop ``||Input:on button A pressed||`` block
on workspace. 

~hint What did that do?
- This button means an action will be trigger when we press the A button
- The A button is on the Mirco:bit 
hint~

```blocks 
input.onButtonPressed(Button.A, function () {
	
})

fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
basic.forever(function () {
    if (IsDrivingEnabled) {
            }
    })
```


## Step 12 
Right click ``||Input:on button A pressed||`` block and duplicate it.
Change ``||Input:A||`` to ``||Input:B||``.

~hint What did that do?
- This button means an action will be trigger when we press the B button
- The B button is on the Mirco:bit 
hint~

```blocks 
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
)
basic.forever(function () {
    if (IsDrivingEnabled) {
            }
    })
```

## Step 13 
Click ``||Variables:Variables||`` drag and drop ``||Variables:IsDrivingEnabled = 0||`` within  ``||Input:on button A pressed||``

~hint What did that do? 
- We are telling the code when to stop driving
- We want to code to only stop driving when we press A 
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = 0
})
input.onButtonPressed(Button.B, function () {
	
})
let IsDrivingEnabled = 0
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
    	
    }
})
```

## Step 14 
Click ``||Logic:Logic||`` drag and drop ``||logic:false|`` to replace 0 in ``||Variables:IsDrivingEnabled = 0||`` within  ``||Input:on button A pressed||``

~hint What did that do
- We are telling the code when to stop driving
- We want to code to only stop driving when we press A it's like saying no to driving
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
})
input.onButtonPressed(Button.B, function () {
	
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
    	
    }
})
```

## Step 15
Click ``||Logic:Logic||`` drag and drop ``||logic:true|`` to replace 0 in ``||Variables:IsDrivingEnabled = 0||`` within  ``||Input:on button B pressed||``

~hint What did that do
- We are telling the code to check for driving 
- This will happen when we press the B button 
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
        	
        } else {
        	
        }
    }
})
```

## Step 16 

Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:Stop||`` under ``||Variables:IsDrivingEnabled = false||`` within  ``||Input:on button B pressed||``

~hint What did that do?
- We are telling the code when to start driving
- We want to code to only start driving when we press B 
hint~

```blocks 
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
    	
    }
})
```
## Step 17 

Click ``||logic:Logic||`` drag and drop ``||logic:if true then else||`` block inside the first ``||logic:if true then||`` block inside ``||basic:forever||`` loop.


~hint What did that do?
- We are adding another condition 
- This gives the code a choice between two different actions 
hint~ 

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})


let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (true) {
            
        } else {
            
        }
    }
})
```

## Step 18 
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:sonar1 distance is under 0 m||`` to replace ``||logic:true||`` condition of ``||logic:true||`` within the ``||logic:if true then||`` block 

~hint What did that do? 
- We are using the sonar sensor to check distance from other objects
- We are having the computer check sonar distance and make a choice based on the information
hint~

```blocks 
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
        	
        } else {
        	
        }
    }
})

```

## Step 19
Click ``||music:Music||`` drag and drop ``||Music:music.ringTone||`` block within  ``||logic:if||`` ``||fwdSensors:sonar1 distance is under 0 m||`` 
``||logic:then||`` condition.

~hint What did that do?
- We have added a sound inside the else condition.
- If something is closer than 1 meter a sound will play
hint~

```block
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})

let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(494)
        } else {
        	
        }
    }
})
```
## Step 20 
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||`` block under ``||Music:music.ringTone||`` block within  ``||logic:if||``  ``||fwdSensors:sonar1 distance is under 0 m||`` ``||logic:then||`` condition.

~hint What did that do?
- We are adding a pause button
- That means the code will wait after the music
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
        } else {
        	
        }
    }
})
```

## Step 21 
Click ``||music:Music||`` drag and drop ``||Music:stopall||`` block under ``||basic:pause (ms) 100||`` block within  ``||logic:if||``  ``||fwdSensors:sonar1 distance is under 0 m||`` ``||logic:then||`` condition.

~hint What did that do? 
- We have told the music to stop
- With this block, the sound will play pause and then stop
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
        	
        }
    }
})
```

## Step 22
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||`` block inside block within  ``||logic:if||`` ``||fwdSensors:sonar1 distance is under 0 m||``
``||logic:else||``

~hint What did that do? 
- We are creating another choice for the code to check for 
- If something isn't too close another choice is made
- Placing it into the forever block will make sure it never stops happening
hint~ 

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})

let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(494)
            fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 20)
        } else {
            if (true) {
            	
            }
        }
    }
})
```

## Step 23
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||`` block under the 1st ``||logic:if true then||`` block

~hint Why did we do this?
  - Using the If/then block means we are giving the code a choice
  - We are just adding another choice 
  - Placing it in forever means it will never stop happening
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (true) {
            	
            }
        }
    }
})
```

## Step 24
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||`` block under the 2nd ``||logic:if true then||`` block. Note: Three ``||logic:if true then||`` blocks are used.

~hint What did that do?
- Using the If/then block means we are giving the code a choice
- We are just adding another choice
- Placing it in forever means it will never stop happening 
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (true) {
            	
            }
            if (true) {
            	
            }
            if (true) {
            	
            }
        }
    }
})
```

## Step 25
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors: line1 state is •||`` to replace ``||logic:true||`` condition of 1st ``||logic:if true then||`` block.

~hint What did that do? 
- We need to update the logic statement with real-world information
- Now we are telling our code to use the line sensor to move
- Placing it in forever means it will never stop checking
 hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
            	
            }
            if (true) {
            	
            }
            if (true) {
            	
            }
        }
    }
})
```
## Step 26
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors: line2 state is o||`` to replace ``||logic:true||`` condition of 2nd ``||logic:if true then||`` block. _Note: Use drop down menu to change line number._

~hint Why did we do this?
  - We need to update the logic statment with real world information 
  - Now we are asking the code to check if it is following the line
  - Placing it in forever means it will never stop hchecking
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
            	
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
            	
            }
            if (true) {
            	
            }
        }
    }
})
```


## Step 27
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors: line3 state is •||`` to replace ``||logic:true||`` condition of 3rd ``||logic:if true then||`` block.  _Note: Use drop down menu to change line number._

~hint Why did we do this?
  - We need to update the logic statment with real world information 
  - Now we are asking the code to check if it not following the line
  - Placing it in forever means it will never stop checking
hint~


```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
            	
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
            	
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
            	
            }
        }
    }
})
```

## Step 28

Click ``||fwdMotors: Motors||`` drag and drop ``||fwdMotors: Turn 0 in place||`` block inside 1st ``||logic: if||`` 
``||fwdSensors:line1 state is •||`` ``||logic:then||`` condition.

~hint Why did we do this?
  - We are now telling the code what to do when on the line
  - We are telling the code to turn in place to stay on the line
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})

let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(494)
            fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 20)
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(0)
            }
            if (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
            	
            }
            if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
            	
            }
        }
    }
})

```
## Step 29
Change ``||fwdMotors:Turn 0||`` to ``||fwdMotors:5||``

~hint Why did we do this?
  - We are now telling the code how much to turn
  - Within the forever block the code will always check if the condition is met
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(5)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
            	
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
            	
            }
        }
    }
})
```

## Step 30
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:Drive forward 50||`` block inside 2nd
``||logic:if||`` ``||fwdSensors:line2 state is o||`` ``||logic:then||`` condition.
Change the ``||fwdMotors:Drive forward 50||`` to ``||fwdMotors:20||``

~hint Why did we do this?
  -  We are now telling the code to drive forward if on the line
  -  We changed the speed from 50 to 20 
  -  You can make it faster or slower
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(5)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
                fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
            	
            }
        }
    }
})
```

## Step 31 

Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors: Turn 0 in place||`` block inside 3rd ``||logic:if||``
``||fwdSensors:line3 state is •||`` ``||logic:then||`` condition. 
Change the ``||fwdMotors:Turn 0||`` to ``||fwdMotors:-5||``.

~hint Why did we do this?
  -  We are now telling the code to turn again to stay on the line
  -  We will turn in the oppsite direction

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(5)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
                fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(-5)
            }
        }
    }
})
```

## Step 32 
Click ``||basic:Basic||`` drag and drop ``||basic:pause (ms) 100||`` block under ``||fwdMotors:Turn 5 in place||`` block.

~hint Why did we do this?
  -  Using the pause block is telling our code to wait
  -  This means the code will wait before checking the conditions again
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(5)
                basic.pause(100)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
                fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(-5)
            }
        }
    }
})
```
## Step 33
Click ``||basic:basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:Drive Forward at 20||`` block.

~hint What did this do?
  -  Using the pause block is telling our code to wait
  -  This means the code will wait before checking the conditions again
Hint~ 

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(5)
                basic.pause(100)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
                fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
                basic.pause(100)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(-5)
            }
        }
    }
})
```

## Step 34

Click ``||basic:basic||`` drag and drop ``||basic:pause (ms) 100||``
block under ``||fwdMotors:Turn -5 in place||`` block.

~hint What did this do?
  -  Using the pause block is telling our code to wait
  -  This means the code will wait before checking the conditions again
hint~ 

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(5)
                basic.pause(100)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
                fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
                basic.pause(100)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(-5)
                basic.pause(100)
            }
        }
    }
})
```

## Step 35
Click ``||fwdMotors:+||`` on ``||fwdMotors:Setup Driving||``
block inside ``||basic:on start||`` block. Set bias to ``||fwdMotors: 0||``.
Change ``||basic:pause (ms) 100||`` to ``||basic:500||`` for all 
``||basic:pause||`` blocks.

~hint What did this do?
  -  We are not telling the code to wait for longer
  -  We are doing the same for all the pause blocks

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = false
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            music.ringTone(262)
            basic.pause(500)
            music.stopAllSounds()
        } else {
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(5)
                basic.pause(500)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
                fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
                basic.pause(500)
            }
            if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
                fwdMotors.turn(-5)
                basic.pause(500)
            }
        }
    }
})
```

## Step 36 @showhint
``|Download|`` and test your code. The simulator shows how it should work.
Congratulations on completing your Automated delivery robot! - Go back to the lesson for more activities and extensions.
![line-servos](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-16-ev-line.gif)



