# Autonomous Electric Vehicles of the Future - Use Tutorial

```package
fwd-edu-breakout=github:ssande/fwd-ext-testing/fwd-breakout
sonar=github:ssande/fwd-ext-testing
```
## Activity 1: Build your Project @showdialog 
Let's build an electric vehicle! We are going to complete this in 3 parts:

1. **Build** our electric vehicle
2. **Add code** to make it move
3. **Use** our electric vehicle in different settings to learn how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-render.png" alt="Full electric vehicle render" style="display: block; width: 60%; margin:auto;">

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

## Activity 2: Code Your Project @showdialog 
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do. 

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" style="display: block; width: 50%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Full wildfire render" style="display: block; width: 60%; margin:auto;">

## Code Step 3 
Click the ``|Download|`` button to download the starter code to your project.

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
            basic.pause(1000)
            fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
            fwdMotors.turn(10)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```
## Activity 3: Use Your Project @showdialog  
We are now ready to **use** our electric vehicle. 

**Tutorial Tips** 

As you go through the next steps:
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!

## Use Step 1
Take a look at your physical project.

Which part of this project functions like a vehicle's Electronic Control Unit (ECU), essentially acting as the "brain" of the vehicle?

~hint Tell me more! 
- The micro:bit functions as the "brain" of our project, similar to how the Electronic Control Unit (ECU) operates in real vehicles.
hint~
  
## Use Step 2 
Which part of your project acts like the battery in electric vehicles? What about the ultrasonic sensors within the electric vehicle?

~hint Tell me more!
- The breakout board has a built-in battery that functions like the battery in an electric vehicle. It provides all the power your project needs to run, just like a vehicle’s battery powers everything from lights to the radio.
- The sonar sensor mimics the ultrasonic sensors found in electric vehicles. These sensors detect obstacles around the vehicle, helping to avoid collisions.
hint~

## Use Step 3 
Take a look at the code in the workspace. Why do you think we use the variable ``||Variables:IsDrivingEnabled||``? What might happen if we didn't have it?

~hint Tell me more!
- The variable ``||variables:IsDrivingEnabled||`` acts like a switch that controls whether your vehicle can move. 
- Without this variable, we wouldn't have a simple way to start or stop the vehicle. 
- If the breakout board was turned on without this variable, it would start moving right away and keep going until it was turned off.
hint~

## Use Step 4 
What do you think will happen when the 'A' button is pressed? What about when the 'B' button is pressed?

~hint  Tell me more!
- When you press the 'A' button, it activates the vehicle's driving function, similar to pressing the gas pedal or accelerator in a car.
- Pressing the 'B' button stops the car, much like using the brake pedal or turning off the ignition.
- This setup allows you to control when the vehicle moves and when it remains stationary.
- We created the ``||variables:IsDrivingEnabled||`` variable for this exact reason—to give you more control over the vehicle.
hint~ 

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
```

## Use Step 5 
Look at the code in the ``||basic:forever||`` loop. What do you think this will accomplish?

Once you've made a guess, unplug your project from the computer, place it on the floor, and test it out! What happens? Remember, you must press the 'A' button to start driving.

```blocks
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            basic.pause(1000)
            fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
            fwdMotors.turn(10)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Use Step 6 
In this project, the sonar sensor functions like the ultrasonic sensors used in real-world applications. 

Take a look at the second conditional in your code. What do you think ``||fwdSensors:sonar1 distance is under 0.5 m||`` means for our project? 

~hint Tell me more!
- This block of code checks for any objects in the way.
- It specifically looks to see if anything is within 0.5 meters of the sensor.
- If it detects something this close, it activates the actions defined in the 'then' part of the conditional to respond to the obstacle.
hint~

```block
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            basic.pause(1000)
            fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
            fwdMotors.turn(10)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
```

## Use Step 7
Looking at the code, what actually happens when an object is in your vehicle's path?

~hint Tell me more!
 When something blocks your vehicle's path, it triggers a sequence of actions:
1. Pause: First, the vehicle will pause for 1000 milliseconds (1 second).
2. Reverse: Then, it drives in reverse.
3. Turn: Finally, the vehicle turns 10 degrees to help navigate away from the obstacle.
hint~

```block
        if (fwdSensors.sonar1.fwdDistancePastThreshold(0.5, fwdSensors.ThresholdDirection.Under)) {
            // @highlight
            basic.pause(1000)
            // @highlight
            fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
            // @highlight
            fwdMotors.turn(10)
        } else {
            fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        }
```

## Use Step 8 
Let’s put our electric vehicles to the test.

Grab some items to use as obstacles for your electric vehicle. Place them in its path to check how well the sonar sensor in the code works. Run this test a few times, then come back here for the next step!

## Use Step 9
Welcome back!

What type of obstacles did you use? How did your electric vehicle manage to avoid these obstacles? What did you notice about its performance? Can you think of any ways to improve how the electric vehicle functions? 

## Congratulations! @showdialog 
You've completed the activity! 

Did anything surprise you about this project? 

## Reflection @showdialog 
List 2 new things you learned today. 

What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|`` button to finish the tutorial.



