# Forward Education Aquatic Garbage Collector - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
input.onButtonPressed(Button.A, function () {
    fwdMotors.leftServo.fwdSetSpeed(25)
    fwdMotors.rightServo.fwdSetSpeed(0)
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    fwdMotors.leftServo.fwdSetSpeed(25)
    fwdMotors.rightServo.fwdSetSpeed(-25)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
    fwdMotors.rightServo.fwdSetSpeed(-25)
    basic.showArrow(ArrowNames.East)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
    fwdMotors.rightServo.fwdSetSpeed(0)
    basic.showIcon(IconNames.No)
})
basic.clearScreen()
fwdMotors.leftServo.fwdSetSpeed(0)
fwdMotors.rightServo.fwdSetSpeed(0)
```

## Activity 1: Build Your Project @showdialog
Let's build an aquatic garbage collector to help with waterway cleanup! We are going to do this in four parts: 
1. **Build** our aquatic garbage collector
2. **Add code** to bring our project to life  
3. **Modify** our project to learn about other sensors  
4. Apply what we learned with a small **challenge**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-render.webp" alt="Full Aquatic Garbage Collector" style="display: block; width: 60%; margin:auto;">

## Electronics Required @showdialog
![Electronic Pieces Required](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs0A.webp)

## Building Blocks Required @showdialog
![Building Blocks Required](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs0B.webp)

## Build Step 1 @showdialog
![Build Step 1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs01.webp)

## Build Step 2 @showdialog
![Build Step 2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs02.webp)

## Build Step 3 @showdialog
![Build Step 3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs03.webp)

## Build Step 4 @showdialog
![Build Step 4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs04.webp)

## Build Step 5 @showdialog
![Build Step 5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs05.webp)

## Build Step 6 @showdialog
![Build Step 6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs06.webp)

## Build Step 7 @showdialog
![Build Step 7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs07.webp)

## Build Step 8 @showdialog
![Build Step 8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs08.webp)

## Build Step 9 @showdialog
![Build Step 9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs09.webp)

## Build Step 10 @showdialog
![Build Step 10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs10.webp)

## Build Step 11 @showdialog
![Build Step 11](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs11.webp)

## Build Step 12 @showdialog
![Build Step 12](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs12.webp)

## Build Step 13 @showdialog
![Build Step 13](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs13.webp)

## Build Step 14 @showdialog
![Build Step 14](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs14.webp)

## Build Step 15 @showdialog
![Build Step 15](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs15.webp)

## Build Step 16 @showdialog
![Build Step 16](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs16.webp)

## Build Step 17 @showdialog
![Build Step 17](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs17.webp)

## Build Step 18 @showdialog
![Build Step 18](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs18.webp)

## Build Step 19 @showdialog
![Build Step 19](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs19.webp)

## Build Step 20 @showdialog
![Build Step 20](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs20.webp)

## Build Step 21 @showdialog
![Build Step 21](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs21.webp)

## Build Step 22 @showdialog
![Build Step 22](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-aquaticgarbage-sbs22.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 60%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Click the ``|Download|`` button to download the starter code to your project.

## Activity 3: Modify Your Project @showdialog
We have an aquatic garbage collector model with rotating motors. Let’s explore how to optimize our sensors by **modifying** our code!

As you go through the next steps:

* Use the instructions at the top of the screen to **modify** your code.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb**!

## Modify Step 1
Think about the features of the aquatic garbage collectors and what they should be able to do.

~hint Tell Me More!
To help clean up aquatic waterways, our garbage collector needs to be able to: 
1. Have a power source and a way to control the collector
2. Move garbage toward the collector
3. Collect garbage in a net
4. Allow small debris like fish and plants to escape the net
hint~

## Modify Step 2
Let’s test out our aquatic garbage collector to see how it works! 

With your model on a table, press the **A+B** at the same time! 

What is happening? 

~hint Tell Me More! 

* The **A+B** button is an **input** that triggers a different set of instructions from either A or B
* The left servo spins in one direction at 25% power
* The right servo motor spins at 25% power in the opposite direction.
* A ``||basic:checkmark||`` displays on the micro:bit LED display. 

hint~

## Modify Step 3

Look at the difference in instructions for the **left** and **right** ``||fwdSensors:servo motors||`` 

Why do you think there are positive and negative numbers? 

~hint Tell Me More! 
* Continuous servo motors work from -100% to 100%! 
* **Negative numbers** spin in one direction, while **positive numbers** spin in the opposite direction.
* When a motor is set to 0, it doesn't spin in any direction. 
hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    // @highlight
    fwdMotors.leftServo.fwdSetSpeed(25)
    // @highlight
    fwdMotors.rightServo.fwdSetSpeed(-25)
    basic.showIcon(IconNames.Yes)
})
```

## Modify Step 4
What happens when we change the speed of the motors? 

Pick another number between 0 and 100, and change the ``||fwdSensors:motor||`` value. 

Remember to `|download|` any changes to your code to test it out!

~hint Tell Me More!
* If the number is **greater than 25**, the motor will spin faster than before
* If the number is **smaller than 25**, the motor will spin slower than before
* If there are **two different numbers** for the left and right motors, the motors will spin at two different speeds
hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    // @highlight
    fwdMotors.leftServo.fwdSetSpeed(50)
    // @highlight
    fwdMotors.rightServo.fwdSetSpeed(-10)
    basic.showIcon(IconNames.Yes)
})
```

## Activity 4: Challenge
Now that we have **modified** our code to understand how our aquatic garbage collector works, we're going to complete a small challenge! 

## Challenge Step 1
Many aquatic garbage collectors are solar-powered, which recharge using the sun's power! Let's imagine that our solar-powered model adds functionality to **sense light levels**.

What type of sensor would we need to add to our project? 

~hint Tell Me More! 

The ``||fwdSensors:solar sensor||`` can detect light in a room! 
hint~

## Challenge Step 2
Add your solar sensor to your model, and attach it somewhere to your project that gets lots of light! 

~hint Tell Me More! 
* We recommend placing the solar sensor in front of your breakout board, on the top of your model. 
* Remember to plug in your solar sensor to the **sensor port**
hint~ 

## Challenge Step 3
Let's think about the functionality we want to add to our model: 

1. When it is **cloudy**, our motors will not spin.
2. When it is **sunny**, our motors will spin!

What type of block could you add to your code to satisfy these **conditions**? 

~hint Tell Me More! 

A ``||logic:conditional statement||``! Look in the logic drawer for the "if/else" block and drag it below your code in the A+B event.
hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    fwdMotors.leftServo.fwdSetSpeed(25)
    fwdMotors.rightServo.fwdSetSpeed(-25)
    basic.showIcon(IconNames.Yes)
    // @highlight
    if (true) {
    
    } 
    else{
    
    }
})
``` 

## Challenge Step 4 
Let's create a comparison! 

What blocks do you need to create the following condition? 

* If the sunlight is **over 50%**, turn both motors on
* Else, turn the motors off

~hint Tell Me More! 

You'll need a ``||comparison:comparison||`` block and a ``||fwdSensors:solar||`` block!

hint~ 

```blocks
input.onButtonPressed(Button.AB, function () {
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.leftServo.fwdSetSpeed(25)
        fwdMotors.rightServo.fwdSetSpeed(-25)
        basic.showIcon(IconNames.Yes)
    } else {
        fwdMotors.leftServo.fwdSetSpeed(0)
        fwdMotors.rightServo.fwdSetSpeed(0)
        basic.showIcon(IconNames.No)
    }
})
```

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. How does the ``||fwdSensors:solar||`` sensor value interact with the ``||logic:if/else||`` comparison to control the motors?
2. How could you add another setting to make the motors move faster on a **very sunny** day? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.