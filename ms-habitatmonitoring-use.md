# Habitat Monitoring - Use Tutorial

```package
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

## Habitat Monitoring - Use Tutorial @showdialog

Today, we are building a habitat monitoring device to collect data in the field! 

Let's add some starter code to make sure our device collects data when we press a button! 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-habitatmonitoring-render.webp" alt="Habitat monitoring full build render" style="display: block; width: 60%; margin:auto;">

## Step 1 @showdialog

IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 60%; margin:auto;">

## Step 2 @showdialog

Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Step 3

Click the ``|Download|`` button to download the starter code to your micro:bit.

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

Try removing the moisture sensor from your field monitoring device and gently holding it in your fist. 

With your other hand, press the **A** button again. What did you notice happened? 

~hint Tell Me More! 

The ``||fwdSensors:moisture sensor||`` measured the amount of moisture on your hand!  

The more dry your hands, the lower the moisture percentage! 
 
hint~

## Step 6

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

## Step 7

Try removing the ``||fwdSensors:solar sensor||`` and **circular building block** from your field monitoring device and hold it near a bright light or flashlight. 

What do you notice happens to the ``||fwdSensors:solar light level||`` value when you press the **B** button? 

~hint Tell Me More! 

The ``||fwdSensors:solar sensor||`` measured the amount of light in the room!  

The brighter it is, the higher the solar percentage! 
 
hint~

## Field Trip! @showdialog

Now that you understand how your code **functions** it's time to think like an ecologist and take your habitat monitoring device out into the field!

Bring a pen and paper along with you as you collect data about the ``||fwdSensors:solar||`` and ``||fwdSensors:moisture||`` levels in your local habitats. 

## Step 8

Using your habitat monitoring device, create a table with at least 5 different data points from one habitat. 

Use **both sensors** to collect readings **every 5 minutes** in one location. 

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
2. How might you improve the **code** of your model?
3. How do you think the habitat monitoring device helps collect data about an **ecosystem** over time? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.