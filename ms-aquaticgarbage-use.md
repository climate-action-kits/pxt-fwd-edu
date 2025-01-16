# Forward Education Aquatic Garbage Collector - Use Tutorial

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
Let's build an aquatic garbage collector to help with waterway cleanup! We are going to do this in three parts: 
1. **Build** our aquatic garbage collector  
2. **Add code** to bring our project to life  
3. **Use** your project to understand how they works

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

## Activity 3: Use Your Project @showdialog
Now that we've built our aquatic garbage collector to help with waterway cleanup, we'll start by **using** the sample code to see how it works.

As you go through the next steps:

* **Use** the instructions at the top of the screen.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb!**

## Use Step 1
Think about the features of the aquatic garbage collectors and what they should be able to do.

~hint Tell Me More!
To help clean up aquatic waterways, our garbage collector needs to be able to: 
1. Have a power source and a way to control the collector
2. Move garbage toward the collector
3. Collect garbage in a net
4. Allow small debris like fish and plants to escape the net
hint~

## Use Step 2
Take a look at the physical project you just built.

What robotic components do you notice? How do you think they’ll work together to make our model function as we expect?

~hint Tell Me More!
The garbage collector has:

* Two ``||fwdMotors:continuous servo motors||`` that rotate in opposite directions to move debris in the water. 

* The ``||basic:LED display||`` on the micro:bit to show which motor the garbage collector is spinning.

* These parts are connected to the **breakout board** through **cables**.

* The breakout board is connected to the **micro:bit** which holds all the code that will tell our sensors what to do and when to do it!

hint~

## Use Step 3
Let’s test out our aquatic garbage collector to see how it works! 

If your motors start running right away, press the logo to stop them. This will work at any point during your project.

## Use Step 4

With your model on a table, press the **A** button on the micro:bit.  

What is happening? 

~hint Tell Me More!

* The **A** button is an **input** that triggers a set of instructions

* The left servo motor spins at 25% power. 

* The right servo motor does not spin.

* A ``||basic:left arrow||`` displays on the micro:bit LED display. 

hint~
```blocks
input.onButtonPressed(Button.A, function () {
    fwdMotors.leftServo.fwdSetSpeed(25)
    fwdMotors.rightServo.fwdSetSpeed(0)
    basic.showArrow(ArrowNames.West)
})
```

## Use Step 5

Now let's press the **B** button. 

Which direction are your motors spinning now? Is it the same, or a different direction? 

~hint Tell Me More!

* The **B** button is an **input** that triggers a different set of instructions

* The left servo does not spin. 

* The right servo motor spins at 25% power in the opposite direction.

* A ``||basic:right arrow||`` displays on the micro:bit LED display. 

hint~

```blocks
input.onButtonPressed(Button.B, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
    fwdMotors.rightServo.fwdSetSpeed(-25)
    basic.showArrow(ArrowNames.East)
})
```

## Use Step 6
Next, let's press **A+B** at the same time! What is happening now? 

~hint Tell Me More! 

* The **A+B** button is an **input** that triggers a different set of instructions from either A or B

* The motors spin in opposite directions to help move debris towards the model's built in **net**

* The left servo spins in one direction at 25% power

* The right servo motor spins at 25% power in the opposite direction.

* A ``||basic:checkmark||`` displays on the micro:bit LED display. 

hint~

## Use Step 7

Look at the difference in instructions for the **left** and **right** ``||fwdMotors:servo motors||`` 

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

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. How do you think the motors spinning in two different directions help the aquatic garbage collector gather debris?
2. What other features might you adapt to help make your aquatic garbage collector more efficient? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.