# Solar-Powered Compost Tumbler - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
basic.forever(function () {
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(95, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.leftServo.fwdSetEnabled(true)
        basic.pause(2000)
        fwdMotors.leftServo.fwdSetEnabled(false)
        basic.pause(5000)
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a compost tumbler powered by the sun! We will do this in four parts:
1. **Build** your tumbler
2. **Add code** to bring it to life
3. **Modify** your tumbler to learn how it works
4. Complete a **challenge** to improve it

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-render.webp" alt="Full compost tumbler render" style="display: block; width: 70%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs01.webp)

## Build Step 2 @showdialog
![sbs2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs02.webp)

## Build Step 3 @showdialog
![sbs3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs03.webp)

## Build Step 4 @showdialog
![sbs4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs04.webp)

## Build Step 5 @showdialog
![sbs5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs05.webp)

## Build Step 6 @showdialog
![sbs6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs06.webp)

## Build Step 7 @showdialog
![sbs7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs07.webp)

## Build Step 8 @showdialog
![sbs8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs08.webp)

## Build Step 9 @showdialog
![sbs9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs09.webp)

## Build Step 10 @showdialog
![sbs10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs10.webp)

## Build Step 11 @showdialog
![sbs11](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs11.webp)

## Build Step 12 @showdialog
![sbs12](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs12.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Modify Your Project @showdialog
We are now ready to **modify** our compost tumbler!

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb**!
4. After each change, ``|Download|`` the new code to your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modify Step 1
Let's test out our compost tumbler! Shine a light on the solar sensor for 10-30 seconds. This light represents sunlight.

Write down what you see happening with as much detail as possible. Do you notice any patterns?

~hint Tell me more!
While the light is on the sensor, the motor:
1. Turns on
2. Spins for 2 seconds
3. Turns off
4. Stays still for 5 seconds

This cycle repeats again and again. 
hint~

## Modify Step 2
What happens when you take the light away from the solar sensor?

~hint Tell me more!
- The tumbler stops spinning.
hint~

## Modify Step 3
Which code block do you think makes the tumbler spin _when light is present_?

~hint Tell me more!

- The ``||loops:while||`` loop controls the motor.

- When the solar sensor detects bright sunlight (more than 95%), then the motor is turned on.

hint~

```block
    // @highlight
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(95, fwdSensors.ThresholdDirection.Over)) {
        // @highlight
        fwdMotors.leftServo.fwdSetEnabled(true)
        basic.pause(2000)
        fwdMotors.leftServo.fwdSetEnabled(false)
        basic.pause(5000)
    }
```

## Modify Step 4
What do you think will happen if you change the threshold (the sunlight level) for the solar sensor?

Change the number in the ``||fwdSensors:solar1 light level over||`` block to a lower value. What do you notice?

~hint Tell me more!
- The threshold controls when the tumbler starts spinning. 
- If you lower the threshold, the tumbler will spin even when there is a lower level of sunlight. 
hint~

```block
    // @highlight
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {

    }
```

## Modify Step 5
Change the threshold back to 95%.

```block
    // @highlight
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(95, fwdSensors.ThresholdDirection.Over)) {

    }
```

## Modify Step 6
Which specific blocks of code do you think make the tumbler spin and stop?

~hint Tell me more!

- The ``||fwdMotors:set leftServo ON||`` block turns the motor on and makes the tumbler spin.

- The ``||fwdMotors:set leftServo OFF||`` block turns the motor off and stops the tumbler.

hint~

```block
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(95, fwdSensors.ThresholdDirection.Over)) {
        // @highlight
        fwdMotors.leftServo.fwdSetEnabled(true)
        basic.pause(2000)
        // @highlight 
        fwdMotors.leftServo.fwdSetEnabled(false)
        basic.pause(5000)
    }
```

## Modify Step 7
Why do you think there are two ``||basic:pause||`` blocks?

Try removing them and see what happens!

~hint Tell me more!
- The pauses control how long the motor spins and how long it waits before the next spin. 
- Without the pauses, the motor would turn on and off so quickly that we wouldn't even see it happen!
hint~

```blocks
basic.forever(function () {
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(95, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.leftServo.fwdSetEnabled(true)
        fwdMotors.leftServo.fwdSetEnabled(false)
    }
})
```

## Modify Step 8
Add the ``||basic:pause||`` blocks back into the code.

```block
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(95, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.leftServo.fwdSetEnabled(true)
        // @highlight
        basic.pause(2000) 
        fwdMotors.leftServo.fwdSetEnabled(false)
        // @highlight
        basic.pause(5000)
    }
```

## Modify Step 9
Think back to what we learned in the lesson. The tumbler needs to spin enough to mix the compost but not _too_ often, or it wastes energy. How long should the tumbler spin? How long should it pause?

Do some rapid research and adjust the numbers in the ``||basic:pause||`` blocks based on what you learn.

## Challenge Time! @showdialog
Let’s add some visual output to show what part of the composting cycle we are on.

## Challenge Step 1
Drag a ``||basic:show LEDs||`` block and a ``||basic:clear screen||`` block into the workspace. Where should we add these in our existing code to show an animation _while_ the tumbler is spinning?

~hint Tell me more!

- Add the ``||basic:show LEDs||`` block right after the motor turns on to show that the tumbler is spinning.

- Add the ``||basic:clear screen||`` block after the motor turns off to show that the tumbler has stopped.

hint~

```block
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(95, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.leftServo.fwdSetEnabled(true)
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        fwdMotors.leftServo.fwdSetEnabled(false)
        // @highlight
        basic.clearScreen()
        basic.pause(5000)
    }
```

## Challenge Step 2
What kind of symbol should we use for the animation? 

You could make a spinning wheel, a happy face, or something else. Get creative and draw your own!

```block
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(95, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.leftServo.fwdSetEnabled(true)
        // @highlight
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
        fwdMotors.leftServo.fwdSetEnabled(false)
        basic.clearScreen()
        basic.pause(5000)
    }
```

## Challenge Step 3
Instead of clearing the animation, what symbol could represent the second stage of composting (when the tumbler is resting)?

Try for yourself and then check the lightbulb for our solution!

```block
    while (fwdSensors.solar1.fwdIsLightLevelPastThreshold(95, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.leftServo.fwdSetEnabled(true)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
        fwdMotors.leftServo.fwdSetEnabled(false)
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
    }
```

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
Think about something in this project that was tricky. 

How did you figure it out? How did that make you feel?

What is one thing you could do to improve your compost tumbler?

## Reflection @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.
