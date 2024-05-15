# Autonomous Electric Vehicles of the Future 

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```
## Activity 1: Build your Project @showdialog 
Let's build an electric vehicle! We are going to complete this in 4 parts: 
1. Build our electric vehicle
2. Add code to make it move
3. Modify the code for our electric vehicle to learn how it works
4. Complete a short challenge to improve your electric vehicle

  ![projectrender](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-render.png)

## Build Step 1 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs1edit.png) 

## Build Step 2 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs2.png) 

## Build Step 3 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs3.png) 

## Build Step 3B @showdialog 
![sbs3b](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs3b.png) 

## Build Step 4 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs4.png) 

## Build Step 5 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs5.png) 

## Build Step 6 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs6.png) 

## Build Step 7 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs7.png) 

## Build Step 8 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs8.png) 

## Build Step 9 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs9.png) 

## Build Step 10 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs10.png) 

## Build Step 11 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs11.png) 

## Build Step 12 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs12.png) 

## Build Step 13 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs13.png) 

## Build Step 14 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs14.png) 

## Build Step 15 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs15.png) 

## Build Step 16 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs16.png) 

## Activity 2: Code your Project @showdialog 
We need to connect our project to the computer to make it come to life with code!
The code will be the instructions that tell our micro:bit what to do. 

## Code Step 1 @showdialog
 Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" width="400">


## Code Step 2 @showdialog
Click three dots beside ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Code  Step 3 
Next, click the ``|Download|`` button to download the blank project to start up the simulators. 

Note: You may want to prop your electric vehicle up on something so it doesn't drive away by accident while still plugged into the computer. 

## Activity 3: Modify your Project @showdialog  
We are now ready to modify our electric vehicle project. Follow the instructions at the top of the screen. 
When you're ready for more information, click *'Tell me more!'* <br>
After each change to the code, you will need to download the updated code to your project.

```template
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
-35
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            fwdMotors.turn(15)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})

```
## Modify Step 1 
In this project, we use the sonar sensor to detect obstacles in the path of our electric vehicle. 
Take a look at the code in the workspace below. What do you think will happen when there's an obstacle? Make a prediction!

~hint  Tell me More!
- The sonar sensor works similarly to how bats find their way around. It sends out sound waves and checks how long they take to bounce back after hitting an object.
- Depending on what the sensor picks up, our electric vehicle can decide to keep going, slow down, or turn to avoid hitting something.
hint~

```blocks
basic.forever(function () {
    let IsDrivingEnabled = 0
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            fwdMotors.turn(15)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})

```
  
## Modify Step 2 

The code below directs the electric car to ``||fwdMotors:turn 15° in place||``  when it encounters an obstacle, controlled by the  ``||fwdMotors:turn 15° in place||`` block.
Can you identify the type of block we use to make this happen?

~hint Tell me More 
- We are adding a decision-making point to the code. What kind of block allows us to do that?
hint~

## Modify Step 3 
In the code, the use of two conditional blocks helps the electric vehicle determine what to do when it encounters an obstacle. In this case, it will turn away from the object. <br>
Let’s test this out: unplug your electric vehicle from your computer, place it on the ground, and press the **A**  button to start driving!

~hint Tell me More   
- A conditional is a block of code that triggers an action if certain conditions are met. 
- We use conditionals in real life, too. For example, “If it is raining, then I will take an umbrella.”
hint~

## Modify Step 4 
Within our second conditional, the block  ``||fwdSensors:sonar1 distance is over 0.5 m||``  tells our electric vehicle to trigger an event when something is within 0.5 meters of it.
What do you think will happen if we decrease this distance? 
Try it out—click on  ``||fwdSensors:sonar1 distance is over 0.5 m||``  and change it to  ``||fwdSensors:sonar1 distance is over  0.2m||``. 

~hint Tell me More!
- To apply your changes, click Download at the bottom of the page. 
- Then, unplug your project from the computer to test the new code.
hint~

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
-35
)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
            fwdMotors.turn(15)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Modify Step 5 
Did you test your electric vehicle? Was your guess right? By lowering the threshold from 0.5 to 0.2 meters, your electric car now gets closer to objects before it turns and stops. This change has several benefits, including fewer false triggers from the sonar sensor!

~hint Tell me More 
- A smaller distance setting can be good in environments where the vehicle might react to distant objects that aren’t directly in its path. 
-It will now ignore objects that are further than 0.2 meters away, focusing only on those that are immediately in front of it.
hint~

## Modify Step 6 
Now that you've seen how adjusting the sonar distance affects the electric vehicle's behavior, let’s experiment with it further. Adjust the  ``||fwdSensors:sonar1 distance is over  0.2m||`` block to different values like 0.1, 0.3, and 0.7 meters, and observe how the vehicle responds in various scenarios. <br>
What do you predict will happen with each change?

~hint Tell me More 
- Try testing your project in the same location after each adjustment to collect consistent data.
- Consider adding or removing obstacles for another round of testing to see how well the vehicle adapts to different environments.
- Don’t forget to click the Download button at the bottom of the page to update your code with each change.
hint~ 

## Challenge Time! @showdialog
You might have noticed that with a shorter sonar distance, your electric vehicle ends up in tighter spots. Simply turning might not always be the best response. Let’s teach our electric car some new tricks for when it encounters obstacles.<br>
Think about what instructions we could add to the code to solve this problem. 

## Challenge Step 1 
Start by having the electric vehicle pause before making its next move. Click on ``||basic:Basic||``, drag the ``||Basic:pause 100||`` block, and place it just above the ``||fwdMotors:Turn 15°||`` in place in the second  ``||Logic:if else||`` block.

~hint Tell me More 
- What should the vehicle do after the pause? Should it turn in another direction or reverse?
- The "Pause 100" block delays the vehicle's next action for 100 milliseconds or 0.1 seconds. 
- This short break allows you to better manage how the vehicle reacts to obstacles.
- Click Download at the bottom of the page to update the new code to your micro:bit.
hint~

```blocks
basic.forever(function () {
    let IsDrivingEnabled = 0
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            basic.pause(100)
            fwdMotors.turn(15)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Challenge Step 2 
Did you test the new code? Now, let's enhance this by adding a second pause block to bracket our  turn 15 in place  action.

Click on ``||basic:Basic||`` , drag another ``||basic:pause 100||``, and place it just below the ``||fwdMotors:Turn 15°||`` in place within the second  ``||Logic:if else||`` block.

~hint Tell me More 
- What should the vehicle do after the pause? Should it turn in another direction or reverse?
- The "Pause 100" block delays the vehicle's next action for 100 milliseconds, or 0.1 seconds. 
- This short break allows you to better manage how the vehicle reacts to obstacles.
- Click Download at the bottom of the page to update the new code to your micro:bit. 
hint~

```blocks
basic.forever(function () {
    let IsDrivingEnabled = 0
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            basic.pause(100)
            fwdMotors.turn(15)
            basic.pause(100)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Challenge Step 3  
Now that we have added another Pause block, we need to help the electric car get out of tight situations.
 Click on  ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:Drive Forward at 50||`` under the second ``||basic:pause 100||`` block. Using the dropdown arrow, change ``||fwdMotors:Forward||`` to ``||fwdMotors:Reverse||``.  <br> Then download the new code to test it.

~hint Tell me More 
- By adding this reverse block, we are enabling the electric car to back away from obstacles, providing it with a better strategy to avoid getting stuck.
- Don’t see the change in your code? Don’t forget to download the updated code by plugging in your micro:bit.
- Remember just in case leave the breakout off when connected to your computer.
hint~

```blocks
basic.forever(function () {
    let IsDrivingEnabled = 0
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            basic.pause(100)
            fwdMotors.turn(15)
            basic.pause(100)
            fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Challenge Step 4 
What did you think of the updated code? Now, the electric car follows a more complex series of actions when it encounters an obstacle. For an extra challenge, click on ``||fwdMotors:Motors||`` and drag the ``||fwdMotors:stop motors||`` block into the workspace. 
Where do you think it would be best to place it?

~hint Tell me More
- Place 'stop all motors' as the first action in the sequence.
- By positioning the 'stop all motors' block at the start, we ensure that the electric car halts immediately, allowing any obstacles to clear from its path. 
- This is an excellent safety feature, similar to emergency stop systems used in real-world vehicles.
hint~

```blocks
basic.forever(function () {
    let IsDrivingEnabled = 0
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            fwdMotors.stop()
            basic.pause(100)
            fwdMotors.turn(15)
            basic.pause(100)
            fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Congratulations @showdialog 
You've completed the activity! What did you think?

## Reflection @showdialog 
Think about something about this project that challenged you. <br> How did you overcome the challenge? How did that make you feel?

## Finished 
In the next step, you can click the ``||Done||`` button to finish the tutorial. 

 
