# Forward Education Wind Turbine - Sample Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})

fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-50)
})

fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
	
})
```

## Activity 1: Build Your Project @showdialog
Let's build an automated wind turbine. We are going to do this in four parts:
1. **Build** our wind turbine
2. **Add code** to make our project move
3. **Use** our wind turbine to learn how it works
4. **Modify** our project with a small coding challenge 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-render.webp" alt="Full sample wind tubine render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs01.webp)

## Build Step 2 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs02.webp)

## Build Step 3 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs03.webp)

## Build Step 4 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs04.webp)

## Build Step 5 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs05.webp)

## Build Step 6 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs06.webp)

## Build Step 7 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs07.webp)

## Build Step 8 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs08.webp)

## Build Step 9 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs09.webp)

## Build Step 10 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/add3c3f5d4b963f2cba276ba9760a9f8c463b77c/tutorial-assets/ms-windsample-sbs10.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
The Climate Action Kit lesson library allows students to scaffold their learning in three stages of projects: **Use, Modify, and Create.**

Now that we've built our wind turbine, we'll start by **using** sample code to see how it works.

As you go through the next steps:
* **Use** the instructions at the top of the screen.
* When you are ready for more information, click **'Tell Me More!'**
* If you need help with the code, click the **lightbulb**!

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Use Step 1
The code in the workspace will make our wind turbine turn and stop. 

## Use Step 2
As you turn the dial to the **right**, watch what happens in the virtual simulator panel _and_ on your physical wind turbine.

~hint Tell Me More!
* You can use the simulators on the left of the workspace to see what's happening to your Climate Action Kit in real time as your motor and dials turn!
* When we turn the dial to the right, the motor should respond in the virtual simulator **and** the wind turbine! 
* This is what is called the **input** and **output** of the code:
    * **Input** - turn the dial to the right
    * **Output** - motor spins to the right
hint~

## Use Step 3
Look at your code. How do you think we can **stop** the motor from spinning? Try it! 

~hint Tell Me More!
* The motor will **stop** when you press down on the **dial**! 
hint~

## Use Step 4
What do you think will happen when you turn the dial to the **left**? Try it now!

~hint Tell Me More!
* Nothing happens! There is no code that tells the computer what to do when the dial is turned this direction.
hint~

## Challenge Time! @showdialog
The Climate Action Kit lesson library allows students to **modify** their project using coding or build challenges!

Now that we have **used** code to create a wind turbine that turns **right** when we turn the dial **right**, we need to **modify** our code to make the wind turbine turn **both directions**.

## Modify Step 1
In the workspace, there is an ``||fwdSensors:on dial1 turned difference||`` event we haven't used yet. How can you use this empty event to make the wind turbine turn **left** when we turn the dial to the **left**?

~hint Tell Me More!
* The ``||fwdSensors:on dial1 turned difference||`` block is the block that is going to sense the new **input** (the dial turning **left**).
hint~

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
})
```

## Modify Step 2
Open the ``||fwdMotors:Motors||`` category and drag and drop ``||fwdMotors:set leftServo to 50 %||`` into the workspace.

On the sensor block, click the dropdown from set **leftServo** to set **middleServo**

~hint Tell Me More!
* You can use up to **3 motors at a time** using the Climate Action Kit! We've built our wind turbine using the **middle** port (M), so we need to program our sensor using the **middle** servo.
* The **motor** is the block that will respond with our new **output** (the motor spinning **left**).
hint~

```block 
 fwdMotors.middleServo.fwdSetSpeed(50)
 ```
 
## Modify Step 3
 How can you combine the ``||fwdSensors:on dial1 turned difference||`` event and the ``||fwdMotors:set middleServo to 50 %||`` together to make the wind turbine turn **left** when the dial is turned **left**?

~hint Tell Me More!
* Drag and drop the blue ``||fwdMotors:set middleServo to 50 %||`` block into the empty ``||fwdSensors:on dial1 turned difference||`` event.
* Note: The motor block should now turn blue!
hint~ 

```block
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```

## Modify Step 4
Click the ``|Download|`` button to download the code to your project.

```block
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})

fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-50)
})

fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```

## Reflection @showdialog
How do you think that you could use the Climate Action Kit in your classroom?

What is one thing you want to learn more about?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.

## Finished!
You can click the ``|Done|`` button to finish the tutorial.

Don't forget to check out [Forward Education's lesson library](https://learn.forwardedu.com/lesson-library/) to see more projects you can build with the Climate Action Kit!