# Wildfire Detection with Autonomous Vehicles - Use
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

## Activity 1: Build Your Project @showdialog
Let's build a wildfire detection vehicle! We are going to do this in 3 parts:
1. **Build** our wildfire detection vehicle
2. **Add code** to make it move
3. **Use** our wildfire detection vehicle to learn how it works  

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Project%20Render%20Forest%20Fires%20three%20quarter%20build.png" alt="Full wildfire render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs1.png?raw=true)

## Build Step 2 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs2.png?raw=true)

## Build Step 3 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs3.png?raw=true)

## Build Step 4 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs4.png?raw=true)

## Build Step 5 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs5.png?raw=true)

## Build Step 6 @showdialog
![wildfiresb](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs6.png?raw=true)  

## Build Step 7 @showdialog
![wildfiresb](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs7.png?raw=true)

## Build Step 8 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs8.png?raw=true)

## Build Step 9 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs9.png?raw=true)

## Build Step 10 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs10.png?raw=true)

## Build Step 11 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs11.png?raw=true)

## Build Step 12 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs12.png?raw=true)

## Build Step 13 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs13.png?raw=true)

## Build Step 14 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs14.png?raw=true)

## Build Step 15 & 16  @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs15.png?raw=true)

## Build Step 17 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs17.png?raw=true)

## Build Step 18 @showdialog
![wildfiresb](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs18.png?raw=true)

## Build Step 19 @showdialog
![wildfiresbs](https://github.com/climate-action-kits/pxt-fwd-edu/blob/main/tutorial-assets/gr8-wildfires-sbs19.png?raw=true)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

```template
input.onButtonPressed(Button.A, function () {
    isDrivingEnabled = true
})

input.onButtonPressed(Button.B, function () {
    isDrivingEnabled = false
})

let isDrivingEnabled = false
isDrivingEnabled = false
fwdMotors.setupDriving(
fwdMotors.rightServo,
fwdMotors.leftServo
)

basic.forever(function () {
    if (isDrivingEnabled) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        if (input.lightLevel() > 200) {
            fwdMotors.stop()
            music.playTone(262, music.beat(BeatFraction.Breve))
            fwdMotors.turn(15)
        }
    } else {
        fwdMotors.stop()
    }
})
```

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Turn on breakout board" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Full wildfire render" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
We are ready to **use** our wildfire detection vehicle!

Tips
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!

## Use Step 1
Think about the purpose of a wildfire detection vehicle. What are 5 main tasks it should be able to complete?

~hint Tell me more!
The vehicle should be able to:
- Start (drive!)
- Stop (break!)
- Move through a forest to patrol an area
- Send out an alert if it detects a fire
- Avoid the fire!
hint~

## Use Step 2
Let's jump right in and see how our vehicle starts and stops. Unplug your project from the computer, place it on the floor, and press the A button on the micro:bit. A is like our gas pedal!

Once you've let the car drive for a few seconds, press the B button to stop. The B button is like our breaks.

## Use Step 3
Let's take a look at the instructions (aka the code!) we've given our wildfire detection vehicle.

Can you identify the blocks of code that allow the A button to act like our gas pedal and the B button to be our breaks?

~hint Tell me more!
- First, we set our **variable** ``||variables:isDrivingEnabled||`` to ``||logic:true||`` if A is pressed or ``||logic:false||`` if B is pressed.
- Then, there is a **conditional statement** that helps the micro:bit decide if it should drive forward or not. If ``||variables:isDrivingEnabled||`` is ``||logic:true||``, the car drives. If not, the car stays still or stops.
- Therefore, pressing A starts the car and pressing B stops it!
hint~

```block
    // @highlight
    if (isDrivingEnabled) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    } else {
        fwdMotors.stop()
    }

let isDrivingEnabled = false
input.onButtonPressed(Button.A, function () {
    isDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    isDrivingEnabled = false
})
```

## Use Step 4
We also need our wildfire detection vehicle to send out an alert if it detects fire. Since fires are bright, we are going to use the micro:bit's light sensor to collect information on light levels and help us determine if there is a fire nearby.

## Use Step 5
We've already programmed the fire detection system.

Take a look at the code below. What part do you think is responsible for monitoring light levels and sending out fire alerts? Make a guess!

~hint Tell me more!
- An alert should be sent out whenever the vehicle detects bright lights. This could indicate a fire!
- There is another **conditional statement** that monitors the light level.
- If the ``||input:light level||`` is greater than '200' the vehicle will send out an alert.
hint~

```block
        if (input.lightLevel() > 200) {


        }
```

## Use Step 6
Let's test how the wildfire detection vehicle responds to _intentional_ changes in light levels.

Start your car, then use a flashlight to simulate different light conditions. Observe the vehicle's behavior.

~hint Tell me more!
- Shine a flashlight directly at the light sensor on the front of the micro:bit. This simulates the light from a fire.
- When the flashlight is shining on the sensor, the vehicle should stop and play a tone.
- This sequence of output is how the vehicle alerts us when it has detected a potential fire!
hint~

```block
        if (input.lightLevel() > 200) {
            fwdMotors.stop()
            music.playTone(262, music.beat(BeatFraction.Breve))
            fwdMotors.turn(15)
        }
```

## Use Step 7
Bonus: Have a few people sit in a semi-circle with their flashlights. This will represent a wall of fire.

Place the car some distance in front of you. Press A so it starts to drive towards the wall of fire. What happens?

~hint Tell me more!
- You should notice that the car approaches the wall of fire. When it gets close enough, it stops, sends out an alert, then turns to try to avoid the fire!
- It will repeat this along the edge of the fire until it finds a break in the wall (no light!).
- At this point, it will attempt to drive through the break and escape the fire.
hint~

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about this project?

## Reflection @showdialog
List 2 new things you learned today.

What is one thing you want to learn more about?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.