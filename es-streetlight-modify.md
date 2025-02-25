# Smart Streetlights - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(100)
})
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
    basic.pause(100)
})
```

## Smart Streetlights - Modify Tutorial @showdialog
Today, we are building and coding a **smart streetlight**! 

We'll add some **starter code** to make sure our streetlight is activated by nearby movement. Then, we'll modify the code to make it our own!

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-smartstreetlight-render.webp" alt="Full streetlight render" style="display: block; width: 70%; margin:auto;">

## Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Step 3
Click the ``|Download|`` button to download the code to your project.

## Step 4
Let's start by reviewing the starter code that controls our streetlight. Test the project out by moving your hand towards the sonar sensor!

~hint Tell me more!
The streetlight should:
- show the current temperature on the micro:bit's LED screen
- light up if an object (like your hand!) gets close to the sonar sensor
hint~

```blocks
basic.forever(function () {
    // @highlight
    basic.showNumber(input.temperature())
})

basic.forever(function () {
    // @highlight
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Step 5
Right now, the light turns on whenever something is nearby (less than 0.2 m or 20 cm away). 

How could you change the code to detect objects that are farther away?

~hint Tell me more!

- Change the number in the ``||fwdSensors:sonar distance||`` block from '0.2 m' to something larger like '0.5 m' or '1 m'.

- Don't forget to download your new code before testing it out!

hint~

```block
    // @highlight
    if (fwdSensors.sonar1.fwdDistancePastThreshold(1, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```

## Step 6
Streetlights don’t have to be bright white. Some cities use different colours to create ambiance and reduce light pollution. Let’s change the colour of the LED ring!

Click on the white circle in the ``||fwdSensors:set all ledRing LEDs to||`` block and pick another colour.

```block
    if (fwdSensors.sonar1.fwdDistancePastThreshold(1, fwdSensors.ThresholdDirection.Under)) {
        // @highlight
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```

## Step 7
Right now, the micro:bit displays the temperature, but streetlights can share many types of information! What if we wanted it to show an icon or message instead?

Replace the ``||basic:show number||`` block with a ``||basic:show icon||`` or ``||basic:show string||`` block.

```blocks
basic.forever(function () {
    // @highlight
    basic.showString("Traffic ahead!")
    basic.pause(100)
})

basic.forever(function () {
    // @highlight
    basic.showIcon(IconNames.Umbrella)
    basic.pause(100)
})
```

## Step 8
Streetlights aren't just for safety. They can also bring art and celebration to cities! 

Let's customize your streetlight around a certain theme. Change the colour and message on your streetlight to celebrate a holiday or event that is important to you!

## Step 9
Right-click on the new blocks you've added. Add a comment to describe how these blocks relate to your theme.

## Step 10 (Optional)
Use craft supplies like construction paper to further customize the light post! 

## Reflection
Before we wrap up:
- Think about something in this project that was tricky. 
- How did you figure it out? How did that make you feel?
- What is one additional thing you could do to improve your streetlight? Try it now!

## Finished
Click the ``|Done|`` button to finish this tutorial.