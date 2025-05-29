# Turbidity Meters - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
input.onButtonPressed(Button.A, function () {
    basic.showNumber(fwdSensors.solar1.fwdLightLevel())
})
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
```

## Turbidity Meters - Modify Tutorial @showdialog
Today, we are going to build and code our own **NTU sensor**!

We'll add some **starter code** that allows us to measure the turbidity of water samples! Then, we'll modify the code to add more features.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-turbidity-render.webp" alt="Full turbidity meter render" style="display: block; width: 100%; margin:auto;">

## Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Step 3
Click the ``|Download|`` button to download the code to your micro:bit.

## Step 4
Take a look at your physical project. Can you identify the main parts of the NTU sensor? 

~hint Tell me more!

Remember:

- **NTU sensors** require a light _source_ and a light _sensor_.

- We are using the **LED ring** as our light source and the **solar sensor** as our light sensor.

- The LED ring will shine a light directly through the water sample. 

- The solar sensor is placed perpendicularly to the LED ring to pick up any light scattered by suspended particles in the sample! Check out the lightbulb hint for a visual.

hint~

![Light scatter in NTU sensors](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/NTUsensor-cloudysample.png)

## Step 5
Take a look at the code in the workspace. What do you think this code will do?

~hint Tell me more!

- The two ``||fwdSensors:LED ring||`` blocks in ``||basic:on start||`` tell the micro:bit to turn the light source of our NTU sensor to full brightness.

- ``||input:on button A pressed||`` the value being picked up by the solar sensor will be displayed on the micro:bit's LEDs. This is how we can take a reading of our sample!

hint~

```blocks
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
input.onButtonPressed(Button.A, function () {
    basic.showNumber(fwdSensors.solar1.fwdLightLevel())
})
```

## Step 6 
Grab a glass of tap water to test. Place the sample between the LED ring and solar sensor as shown in the lightbulb hint. Ensure the water sample is stable and won't spill. 

![Low turbidity sample](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-turbidity-water-render.webp)

## Step 7
Press A. What is the reading for this tap water sample? Record it.

## Step 8
Record several more readings of the same sample. Then, calculate the average NTU score.

## Step 9
Let's modify the code to round the reading to the nearest whole number before it is displayed. This will make the output easier to read. 

Drag the ``||math:round||`` block over the ``||fwdSensors:solar light level||`` block and release. 

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    basic.showNumber(Math.round(fwdSensors.solar1.fwdLightLevel()))
})
```

## Step 10
A raw sensor reading doesn't immediately tell us if water is clear or turbid. 

Next, let's modify the code to classify the turbidity and provide an even more user-friendly output. We'll categorize readings as "Clear" or "Turbid" *compared to our tap water sample*.

## Step 11
Since you measured tap water in Step 7 and 8, let's consider that reading as our 'Clear' baseline. We'll add a **conditional statement** to display "CLEAR" when the sensor reading is _less than or equal to_ your tap water reading.

~hint Tell me more!
- We'll use a **conditional statement** to check if the sensor reading meets our 'Clear' criteria.
- Conditional statements allow the program to make decisions. The code inside the conditional will only run if the condition is true.
hint~

## Step 12
Drag an ``||logic:if then||`` block from the ``||Logic||`` category. Add it under the ``||basic:show number||`` block.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(fwdSensors.solar1.fwdLightLevel()))
    // @highlight
    if (true) {
    }
})
```

## Step 13
Drag a ``||logic: 0 < 0||`` block into your conditional statement. Change the 'less than' operator to 'less than or equal to'. 

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(fwdSensors.solar1.fwdLightLevel()))
    // @highlight
    if (0 <= 0) {

    }
})
```

## Step 14
Drag a ``||fwdSensors:solar light level||`` block into the first space in your expression. Then, replace the second '0' with the average reading you recorded for tap water in Step 8.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(fwdSensors.solar1.fwdLightLevel()))
    // @highlight
    if (fwdSensors.solar1.fwdLightLevel() <= 70) {

    }
})
```

## Step 15
Add a ``||basic:show string||`` block into the conditional. Edit "Hello!" to "CLEAR".

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(fwdSensors.solar1.fwdLightLevel()))
    // @highlight
    if (fwdSensors.solar1.fwdLightLevel() <= 70) {
        basic.showString("CLEAR")
    }
})
```

## Step 16
Press the '+' under your conditional statement. Add an else statement to display "TURBID" for all other readings. 

```block
if (fwdSensors.solar1.fwdLightLevel() <= 70) {
        basic.showString("CLEAR")
    } else {
        // @highlight
        basic.showString("TURBID")
    }
```

## Step 17
Add a ``||music:play tone||`` block to play a sound when the water is considered turbid.

```block
if (fwdSensors.solar1.fwdLightLevel() <= 70) {
        basic.showString("CLEAR")
    } else {
        basic.showString("TURBID")
        // @highlight
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
```

## Step 18 
Customize your sound alert using other blocks from the ``||Music||`` and ``||Loops||`` block categories.

```block
if (fwdSensors.solar1.fwdLightLevel() <= 70) {
        basic.showString("CLEAR")
    } else {
        basic.showString("TURBID")
        // @highlight
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
```

## Test & Refine
Test your alarm with different water samples! Refine your threshold and alarm as needed to make it work effectively.

## Finished
Click the ``|Done|`` button to finish this tutorial.