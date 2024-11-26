# Wind Turbine Energy Storage - Modify Tutorial
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
Let's build our wind turbine! We will do this in four parts:
1. **Build** your wind turbine
2. **Add code** to bring it to life
3. **Modify** the code to learn how it works
4. Complete a **challenge** to improve the wind turbine

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

## Activity 3: Modify Your Project @showdialog
We are now ready to **modify** our wind turbine!

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb**!
4. After each change, ``|Download|`` the new code to your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modify Step 1
Take a moment to review the starter code. Look for the following:
- How the turbine spins: Find the ``||fwdSensors:on dial turned||`` and ``||fwdSensors:on touch down||`` **events** that control the motor.
- How the house lights up: Find the **conditional statement** (if/then) that turns on the house lights if the turbine is spinning (aka generating electricity!)

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetEnabled(false)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-50)
})

basic.forever(function () {
    // @highlight
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
})
```
## Modify Step 2
Our wind turbine also has a battery to store energy for later use. 

At the start of the program, the ``||variables:batteryLevel||`` variable is set to '0' or 0%. As the wind turbine spins, it slowly charges the battery and the number in the variable increases by 1% every 2 seconds. When the battery is full, it stops at 100%.

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    basic.showNumber(batteryLevel)
})
// @highlight
batteryLevel = 0
basic.forever(function () {
    if (fwdMotors.middleServo.fwdIsEnabled() == true) {
        // @highlight
        batteryLevel += 1
        // @highlight
        if (batteryLevel > 100) {
            batteryLevel = 100
        }
        // @highlight
        basic.pause(2000)
    }
})
```

## Modify Step 3
At the moment, there is no obvious sign to tell us when the battery has reached full charged. Let's add a ``||music:play tone||`` block to the code to make a note play when the battery reaches 100%. 

Where should we put this block in our existing code?

~hint Tell me more!
- Add the block inside the **conditional statement** that prevents the ``||variables:batteryLevel||`` from going over 100%. 
- As soon as the ``||variables:batteryLevel||`` is set to 100%, the note will play.
hint~

```block
 if (batteryLevel > 100) {
    batteryLevel = 100
    // @highlight
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
```

## Modify Step 4
Right now, the battery charges by 1% every 2 seconds. How could we make charging happen more _quickly_?

~hint Tell me more!
- You could _increase_ the value in the ``||variables:change batteryLevel by||`` block or _decrease_ the value in the ``||pause||`` block.
- Try one of these options now!
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
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        // @highlight
        basic.pause(500)
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

## Modify Step 5
Right now, the house only lights up when the wind turbine is spinning. As we've learned, we can also power the house with our battery, as long as there is charge!

How might we write another conditional statement to tell the micro:bit to do this?

~hint Tell me more!
- Remember: Real wind turbines store energy in batteries to keep lights and machines running even when there’s no wind.
hint~

## Modify Step 6
We can expand our existing conditional statement by pressing the '+' icon at the bottom. This will add an **else if** statement which will only run when the wind turbine is off!

```block
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
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(500)
    } else if (false) {
    	
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

## Modify Step 7
This new conditional statement should check if the battery level is greater than 0.

Drag a ``||variables:batteryLevel||`` block and a ``||logic:>||`` block into the workspace. How should you combine these with the new conditional statement?

~hint Tell me more!
- Combine these blocks to create the following expression inside the conditional statement: **batteryLevel > 0**
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
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(500)
    } else if (batteryLevel > 0) {
    	
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

## Modify Step 8
Right click the ``||basic:show LEDs||`` block and duplicate it. Add the new block inside the new conditional.

```block
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
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(500)
    } else if (batteryLevel > 0) {
        // @highlight
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

## Modify Step 9
To make things realistic, the battery should _drain_ as it's being used to power the house.

We've used the ``||variables:change batteryLevel by||`` block to _increase_ the battery charge over time. How might we use this block to _decrease_ the charge over time?

~hint Tell me more!
- Add a ``||variables:change batteryLevel by||`` block into the new conditional statement. Change the value to '-1' to decrease the charge.
- Add a ``||basic:pause||`` block to control how quickly the battery drains.
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
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(2000)
    } else if (batteryLevel > 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        // @highlight
        batteryLevel += -1
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
```

## Modify Step 10
Let's test out this new conditional statement.

Download your new code. Then, turn the dial to spin the turbine and charge the battery. Then stop spinning the turbine. What happens when the battery has stored energy?

~hint Tell me more!
- As long as the battery has a charge, it will be able to continue lighting up the house even when the wind turbine stops spinning.
- Once the battery hits 0%, the lights turn off.
- Remember, you can press the A button at any time to see the battery level!
hint~

## Challenge Time! @showdialog
Let’s make your wind turbine even better. Can you:

1. add a sound alert when the house is at risk of having no power at all?
2. adjust how quickly the battery drains?

## Challenge Step 1
To add an alert when the battery reaches 0%, add a ``||music:play tone||`` block in the final **else** condition.

Change the note so it is different than the note that is played when the battery is full!

```block
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
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(2000)
    } else if (batteryLevel > 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        batteryLevel += -1
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        // @highlight
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)

    }
```

## Challenge Step 3
Finally, to adjust the rate the battery drains, change the numbers inside the ``||variables:change batteryLevel by||`` and ``||basic:pause||`` blocks.

Try adjusting these numbers so the battery charges twice as fast as it drains.

```block
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
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(500)
    } else if (batteryLevel > 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        // @highlight
        batteryLevel += -1
        // @highlight
        basic.pause(1000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
```

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
Think about something in this project that was tricky. 

How did you figure it out? How did that make you feel?

What is one additional thing you could do to improve your farm?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial. 