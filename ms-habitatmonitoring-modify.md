# Habitat Monitoring - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(fwdSensors.soilMoisture1.fwdMoistureLevel()))
    basic.clearScreen()
    basic.showString("%")
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(fwdSensors.solar1.fwdLightLevel()))
    basic.clearScreen()
    basic.showString("%")
    basic.pause(1000)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
})

```

## Habitat Monitoring - Modify Tutorial @showdialog

Today, we are building a habitat monitoring device to collect data in the field! 

We'll add some starter code to make sure our device collects data when we press a button. Then, we'll modify the code to make it our own! 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-habitatmonitoring-render.webp" alt="Habitat monitoring full build render" style="display: block; width: 60%; margin:auto;">

## Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 60%; margin:auto;">

## Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Step 3
Click the ``|Download|`` button to download the starter code to the micro:bit.

## Step 4

Let's test the functionality of our **habitat monitoring device**!

What do you think will happen when you press the **A** button on the micro:bit? 

~hint Tell Me More! 

1. The **A** button is an **input** that sends the instructions to the micro:bit. 

2. The micro:bit **outputs** an icon symbolizing the soil to the micro:bit ``||basic:display||``.

3. The micro:bit ``||basic:display||`` clears.

4. The ``||fwdSensors:soil moisture||`` value to the micro:bit ``||basic:display||``, rounded to the nearest **whole number**, out of 100%.

5. The micro:bit pauses for 1 second. 

6. The micro:bit returns to following the instructions in the ``||basic:forever||`` function. 

hint~

```blocks
    // @highlight
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(fwdSensors.soilMoisture1.fwdMoistureLevel()))
    basic.clearScreen()
    basic.showString("%")
    basic.pause(1000)
})
```
## Step 5

Now that we understand how the ``||fwdSensors:moisture sensor||`` collets data, let's investigate other **sensors** in our code! 

Based on the blocks in our code, what do you think will happen when we press the **B** button on our micro:bit?

~hint Tell Me More! 

1. The **B** button is an **input** that sends the instructions to the micro:bit. 

2. The micro:bit **outputs** an icon symbolizing the sun to the micro:bit ``||basic:display||``.

3. The micro:bit ``||basic:display||`` clears.

4. The ``||fwdSensors:solar light level||`` value to the micro:bit ``||basic:display||`` rounded to the nearest **whole number**, out of 100%.

5. The micro:bit pauses for 1 second. 

6. The micro:bit returns to following the instructions in the ``||basic:forever||`` function. 

hint~

```blocks 
    // @highlight
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(fwdSensors.solar1.fwdLightLevel()))
    basic.clearScreen()
    basic.showString("%")
    basic.pause(1000)
})
```
## Step 6

We have a habitat monitoring device that collects data about ``||fwdSensors:soil moisture||`` and ``||fwdSensors:sunlight||`` levels. 

Let's collect data about the ``||input:temperature||`` of our habitats!

~hint Tell Me More! 

We'll add code to the empty ``||input: on button A+B||`` event in our workspace that will collect data from our ``||input:thermometer||``.

hint~ 

```blocks
// @highlight
input.onButtonPressed(Button.AB, function () {

})
```

## Step 7

First, we'll need to design a **symbol** to inform ecologists that we're gathering data about the ``||input:temperature||`` of the habitat. 

~hint Tell Me More! 

1. Drag a ``||basic:show leds||`` block from the toolbox into the ``||input:on button A+B pressed||`` event. 

2. Get creative! Design any symbol that will represent **temperature** to an ecologist when they are in the field.

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
// @highlight
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
})
```
## Step 8

Next, we'll need to ``||display:display||`` the ``||input:temperature||`` of our habitat! 

~hint Tell Me More!

1. Drag a ``||basic:clear screen||`` from the toolbox into the ``||input:on button A+B pressed||`` event in the workspace. 
2. Drag a ``||basic:show number||`` block from the toolbox beneath your ``||basic:clear screen||`` block. 

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
        // @highlight
    basic.clearScreen()
   // @highlight 
    basic.showNumber()
})
```

## Step 9

We want ecologists to collect data **consistently**!

What code block should we use to display our ``||input:temperature||`` value as a **whole number**?

~hint Tell Me More! 

We need the ``||math:round||`` block! 

1. Drag the block from the toolbox into the empty space in the ``||basic:show number||`` block in our workspace. 

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
    //@highlight
    basic.showNumber(Math.round())
})
```

## Step 10

Which code block do you think we should use to display the ``||input:temperature||`` of a habitat before we **clear the screen** of the micro:bit ``||basic:display||``? 

~hint Tell Me More! 

1. Drag the ``||input:temperature||`` block from the ``||input:input||`` drawer of your toolbox into the ``||math:round||`` block in your workspace. 
2. Use a ``||basic:clear screen||`` block to reset your micro:bit ``||basic:display||``.

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
    //@highlight
    basic.showNumber(Math.round(input.temperature()))
    //@highlight
    basic.clearScreen()
})
```

## Step 11

Let's make our data more clear! We need to clarify to our users that the ``||input:temperature||`` value is displayed in degrees **Celcius (C)** 

~hint Tell Me More!

Just like our ``||fwdSensors:moisture||`` and ``||fwdSensors:solar||`` sensors, we can use the ``||basic:show string||`` block to display the **temperature unit**. 

1. Drag a ``||basic:show string||`` block from the toolbox into your ``||input:on button A+B pressed||`` event. 

2. In the empty field, type 'C' for 'Celcius' 

3. Add a ``||basic:pause||`` block to your event and set the interval to **1000 ms** 

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(input.temperature()))
    basic.clearScreen()
    //@highlight 
    basic.showString("C")
    //@highlight
    basic.pause(1000)
})
```

## Step 12

Let's test our code! Remember to hit the `|Download|` button when you're ready to test your new temperature collection feature. 

## Field Trip! @showdialog

Now that you understand how your code **functions**, and we've added a **new data source** to our device, it's time to think like an ecologist and take your habitat monitoring device out into the field!

Bring a pen and paper along with you as you collect data about the ``||fwdSensors:solar||``, ``||fwdSensors:moisture||`` and ``||input:temperature||`` levels in your local habitats. 

## Step 13

Using your habitat monitoring device, create a table with at least 5 different data points from one habitat. 

Use **all three sensors** to collect readings **every 5 minutes** in one location. 

~hint Tell Me More!

Remember to write down other observations about the habitat as you collect your data! 

For example: 

1. What was the time of each reading? 
2. What location did you collect your data in? 
3. What was the weather like when you collected your data? 
4. What types of plants and animals are part of the habitat you collected data from?

hint~

## Congratulations! @showdialog

You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog

1. What trends did you notice in the data you collected? 
2. What other types of **sensors** might enhance your device?
3. How do you think the habitat monitoring device helps collect data about an **ecosystem** over time? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.