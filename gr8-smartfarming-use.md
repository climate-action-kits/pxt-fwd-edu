#  Data-driven Smart Farming - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```

```template
let pumpStart = 0
let pumpStop = 0
input.onButtonPressed(Button.A, function () {
    pumpStart = input.runningTime()
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(1000)
    }
    pumpStop = input.runningTime()
})


// @collapsed
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```

## Data-driven Smart Farming Project @showdialog
Let's build a smart hydroponic farming system! We are going to do this in 3 parts:
1. **Build** our smart farming system
2. **Add code** to bring it to life
3. **Use** the system to learn how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-projectrender.webp" alt="Full smart farm render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs01.webp)

## Build Step 2 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs02.webp)

## Build Step 3 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs03.webp)

## Build Step 4 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs04.webp)

## Build Step 5 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs05.webp)

## Build Step 6 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs06.webp)

## Build Step 7 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs07.webp)

## Build Step 8 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs08.webp)

## Build Step 9 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs09.webp)

*Note: For now, you may place the moisture sensor in an empty cup.*

## Build Step 10 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs10.webp)

## Build Step 11 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs11.webp)

## Build Step 12 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs12.webp)

## Build Step 13 @showdialog
![smartfarmsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr8-smartfarm-sbs13.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Turn on breakout board" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the  ``|Download|`` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Full wildfire render" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Click the ``|Download|`` button to download the starter code.

## Activity 3: Use Your Project @showdialog
We are ready to **use** our smart hydroponic farming system!

**Tips**
1. Follow the instructions at the top of the screen.
2. Whenever you are ready for more information, click **‘Tell me more!’**
3. If you need help with the code, click the lightbulb!

## Use Step 1
Take a look at your physical project build. Can you name all of its pieces or components?

~hint Tell me more!
Our farming system has:
- **Building blocks:** one baseplate, three white long frames, two cube connectors, two corner connectors
- **Robotic components:** a micro:bit, a breakout board, a battery, a water pump & tubing, a moisture sensor and an LED ring
- Two long cable connectors
hint~

## Use Step 2
What is the purpose of each part? How do they interact with one another?

~hint Tell me more!
- The **building blocks** are like the bones of our project. They help hold up everything else, like the robotic parts and plants!
- The **micro:bit** is like the brain of our project. It stores all the instructions (aka code!) that tell our farming system what to do.
- The **breakout board** sends these instructions from the micro:bit to the **pump**, **moisture sensor**, and **lights** through **cables**.
- The **battery** on the breakout board powers our project when it's not plugged into the computer.
hint~

## Use Step 3
Let's take a look at the instructions (aka the code!) we've given our smart farm. This will help us understand how it works!

## Use Step 4
Find the ``||input:on button A pressed||`` block in the workspace and read the code that comes after it.

Based on this, when do you think the water pump will turn on? When will it turn off?

```block
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(1000)
    }
```

## Use Step 5
Let’s test it out! Make sure the pump is in a cup with water, the moisture sensor is in an empty cup, and the tubing is secure.

Press A on the micro:bit and watch what happens! Were your predictions right?

~hint Tell me more!
- Pressing A is an **event** that triggers the code below it in order. Each time we press A, we are checking the moisture level of our plant and determining whether it needs to be watered.
- As long as the moisture level remains below 20%, the pump stays on. We do this using a ``||loops:while||`` loop. A ``||loops:while||`` loop repeats a series of instructions until a certain condition is met.
- When the moisture level reaches 20% or more, the loops ends and the pump turns off!
hint~

```block
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Under)) {
        // @highlight
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(1000)
    }
```

## Use Step 6
Take a look at the code under ``||input:on button B pressed||``. What do you think this does?

~hint Tell me more!
- Press the arrow beside the block to see the code!
hint~

## Use Step 7
Let’s try it! Press the ‘B’ button on the micro:bit. What happened?

~hint Tell me more!
- When you press B you first see a clock on the micro:bit’s LEDs. Then, you see a number. The number is shown for 2 seconds and then it disappears.
hint~

## Use Step 8
When you press B, a number is displayed on the micro:bit. What do you think this number represents?

~hint Tell me more!
This number represents how long the pump was on, in seconds, the last time it ran.
hint~

```block
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
```

## Use Step 9
Try to identify all the blocks of code that might be involved in calculating how long the pump was running.

~hint Tell me more!
- We are using ``||variables:Variables||`` to figure out how long the pump runs. Think of variables like boxes where we keep information to use later.
- In MakeCode, the blocks for variables are red.
- Check the lightbulb for the answer!
hint~

```blocks
let pumpStop = 0
let pumpStart = 0
input.onButtonPressed(Button.A, function () {
    // @highlight
    pumpStart = input.runningTime()
   
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(1000)
    }
    // @highlight
    pumpStop = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    // @highlight
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```

## Use Step 10
Think about where the ``||variables:set pumpStart||``, ``||variables:set pumpStop||`` , and ``||basic:show number||`` ``||math:round||`` blocks are within the ``||loops:loop||`` and ``||input:events||`` we talked about earlier.

Why is the order or placement of these blocks is important?

~hint Tell me more!
The order of these blocks is really important, just like it's important to follow the order of operations in math. If we change the order, we will get a different result. Here is how it should go:

1. All micro:bits always automatically track how long they have been on in a variable called ``||input:running time (ms)||``.
2. As soon as A is pressed, we save this running time in another variable called ``||variables:pumpStart||``.
3. Once the loop ends and the pump turns off, we save the running time in a variable called ``||variables:pumpStop||``.
4. When B is pressed, we find out how long the pump ran by subtracting the time in ``||variables:pumpStart||`` from the time in ``||variables:pumpStop||``. This number is in milliseconds, so we divide it by 1000 to convert into seconds.
hint~

```blocks
let pumpStop = 0
let pumpStart = 0
input.onButtonPressed(Button.A, function () {
    // @highlight
    pumpStart = input.runningTime()
   
    while (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(1000)
    }
    // @highlight
    pumpStop = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    // @highlight
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about this project?

## Reflection @showdialog
List 2 new things you learned today.

What is one thing you want to learn more about?

## Reflection @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.