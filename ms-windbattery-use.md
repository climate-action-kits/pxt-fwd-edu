# Wind Turbine Energy Storage - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetEnabled(false)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-50)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(batteryLevel)
})
batteryLevel = 0
basic.forever(function () {
    if (fwdMotors.middleServo.fwdIsEnabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
        `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
        }
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
        `)
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build our wind turbine! We will do this in three parts:
1. **Build** your wind turbine
2. **Add code** to bring it to life
3. **Use** and **test** your wind turbine to see how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-render.webp" alt="Full wind turbine render" style="display: block; width: 70%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs01.webp)

## Build Step 2 @showdialog
![sbs2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs02.webp)

## Build Step 3 @showdialog
![sbs3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs03.webp)

## Build Step 4 @showdialog
![sbs4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs04.webp)

## Build Step 5 @showdialog
![sbs5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs05.webp)

## Build Step 6 @showdialog
![sbs6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs06.webp)

## Build Step 7 @showdialog
![sbs7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs07.webp)

## Build Step 8 @showdialog
![sbs8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs08.webp)

## Build Step 9 @showdialog
![sbs9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs09.webp)

## Build Step 10 @showdialog
![sbs10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-windsample-sbs10.webp)

## Activity 2: Code Your Project @showdialog
It’s time to bring your wind turbine to life with code! 

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
We are now ready to **test** out our wind turbine to see how it works.

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb!**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Use Step 1
Take a close look at the wind turbine. Can you name all its parts? What does each part represent?

~hint Tell me more!
This model uses:
- **Building Blocks:** one baseplate, one cube connector, one long white frame, one green circle, four small green frames, four back-to-back connectors. The building blocks help create the structure of the wind turbine.
- **Robotic components:** a breakout board, micro:bit, continuous servo motor, and dial. These components will make our wind turbine move! 
hint~

## Use Step 2
Before testing the code, let's make some _predictions_:
- What do you think will happen when you turn the dial clockwise? Counterclockwise?
- What will happen if you push the dial down?

Take a look at the code below, if it helps! 

## Use Step 3
Let's test it out!

Turn the dial clockwise or counterclockwise. Then, press down on it. What happens? 

~hint Tell me more!
- When you turn the dial, the turbine spins in the same direction. A house is also displayed on the LEDs. 
- When you push down on the dial, the turbine stops spinning and the house disappears.
- This simulates how wind turbines generate electricity to power houses as they spin! 
hint~

## Use Step 4
We are using two ``||fwdSensors:on dial turned||`` **events** to make the wind turbine spin. The ``||fwdSensors:on touch down||`` **event** stops the turbine.

In this scenario, the dial represents the wind! 

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-50)
})

fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetEnabled(false)
})
```

## Use Step 5
We are using a **conditional statement** to turn on the house lights whenever the turbine is generating electricity. 

Can you find the conditional statement in our code?

~hint Tell me more!
- Conditional statements are if/then rules that help our micro:bit make decisions based on certain criteria. We use if/then rules in real life all the time! For example, "If it is raining, then I open my umbrella!"
- Here, we've told the micro:bit: "If the wind turbine is spinning, then light up the house!"
hint~

```block
if (fwdMotors.middleServo.fwdIsEnabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
```

## Use Step 6
Take a look at your code one more time. What do you think will happen when you press A? 

Try it now.

~hint Tell me more!
- Pressing A will briefly display a number on the LEDs of the micro:bit.
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(batteryLevel)
})
```

## Use Step 7
Leave your wind turbine running for 10 seconds. Then press A again. What happened to the number on the LEDs?

~hint Tell me more!
- The number increased!
hint~

## Use Step 8
Whenever our wind turbine spins, it powers the house, but also slowly "charges" a battery.

We've created a **variable** in our program to track battery charge. At the start of the program, the ``||variables:batteryLevel||`` is '0'. As the turbine spins, the charge increases by 1% every 2 seconds.

~hint Tell me more!
- The ``||variables:change batteryLevel by 1||`` block increases the variable by 1. This happens every 2 seconds because of the ``||basic:pause||`` block.
- This simulates how real wind turbines store energy in batteries for later use.
hint~

```blocks
// @highlight
batteryLevel = 0
basic.forever(function () {
    if (fwdMotors.middleServo.fwdIsEnabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        // @highlight
        batteryLevel += 1
        // @highlight
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
```

## Use Step 9
If the battery starts empty (0%) and charges an additional 1% every 2 seconds, how long will it take to fully charge (100%)? 

How could you solve this problem?

## Use Step 10
Re-download the code to reset your battery. Then, turn the dial and see how long it takes for the battery to reach 100%. Was your calculation accurate?

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
List 2 new things you learned today. 

What is one thing you want to learn more about? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.