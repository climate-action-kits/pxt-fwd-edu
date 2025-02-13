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

## Activity 1: Build Your Project @showdialog
Let's build a smart streetlight! We'll do this in four parts:
1. **Build** your streetlight
2. **Add code** to bring it to life
3. **Modify** your streetlight to learn how it works
4. **Customize** the streetlight to make it better

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-render.webp" alt="Full compost tumbler render" style="display: block; width: 70%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs01.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Modify Your Project @showdialog
We are now ready to **modify** our streetlight!

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb**!
4. After each change, ``|Download|`` the new code to your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modify Step 1
Let's start by reviewing the code that controls our streetlight.

Test the project out by moving your hand towards the sonar sensor!

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

## Modify Step 2
Right now, the light turns on when something is nearby (less than 0.2 m or 20 cm away). 

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

## Modify Step 3
Streetlights don’t always have to be bright white. Some cities use different colours to create ambiance and reduce light pollution. Let’s change the LED ring color!

Click on the white circle in the ``||fwdSensors:set all ledRing LEDs to||`` block and pick another colour.

```block
    if (fwdSensors.sonar1.fwdDistancePastThreshold(1, fwdSensors.ThresholdDirection.Under)) {
        // @highlight
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```

## Modify Step 4
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

## Challenge Time!
Streetlights aren't just for safety. They can also bring art and celebration to cities! 

Let's customize your streetlight around a certain theme! Change the colour and message on your streetlight to celebrate a holiday or event that is important to you! 

**Bonus Challenge:** Use craft supplies like construction paper to further customize the light post! 

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
Think about something in this project that was tricky. 

How did you figure it out? How did that make you feel?

What is one additional thing you could do to improve your streetlight? Try it now!

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.