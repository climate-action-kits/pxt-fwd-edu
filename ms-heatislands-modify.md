# Urban Heat Islands - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    datalogger.deleteLog()
})
datalogger.setColumnTitles("Temperature")
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
```

## Urban Heat Islands - Modify Tutorial @showdialog
In this activity, we'll improve our temperature-monitoring device so it tracks the highest and lowest temperatures and has a temperature alert.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-heatislands-render.webp" alt="Full model city render" style="display: block; width: 100%; margin:auto;">

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
Take a look at the code in the workspace. 

1. What does the ``||Loops:every 60000 ms||`` block do?
2. What does ``||Input:temperature||`` measure?
3. What does ``||DataLogger:log data||`` do? 

~hint Tell me more!

1. The ``||Loops:every 60000 ms||`` loop repeats the code inside it every 60000 milliseconds (1 minute).

2. ``||Input:temperature||`` gets the current temperature from the micro:bit's sensor.

3. ``||DataLogger:log data||`` saves the temperature data to the micro:bit.

Together, this code will allow us to track the temperature of our model over time.
hint~

```block
    loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
})
```

## Step 5
Let's improve our temperature-monitoring device by adding code to track the highest and lowest temperatures recorded. 

## Step 6
Create two **variables** called ``||Variables:maxTemp||`` and ``||Variables:minTemp||``. 

At the beginning of the code, set both ``||Variables:maxTemp||`` and ``||Variables:minTemp||`` to the current temperature.

~hint Tell me more!

- A **variable** is like a container that can hold a value. We give it a name (like maxTemp) so we can refer to it later in our code.

- In this case, ``||Variables:maxTemp||`` will store the highest temperature recorded, and ``||Variables:minTemp||`` will store the lowest.

hint~

```blocks
let minTemp = 0
let maxTemp = 0
maxTemp = input.temperature()
minTemp = input.temperature()
```

## Step 7
Inside the ``||Loops:every 60000 ms||`` loop, add a **conditional statement** to check if the current ``||Input:temperature||`` is greater than ``||Variables:maxTemp||``. If it is, update ``||Variables:maxTemp||`` to the current ``||Input:temperature||``.

~hint Tell me more!
- A **conditional statement** (like an if statement) allows our code to make decisions.
- It checks if a condition is true (e.g., "is the temperature greater than maxTemp?") and then only runs certain code if so! 
hint~

```blocks
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
    // @highlight
    if (input.temperature() > maxTemp) {
        // @highlight
        maxTemp = input.temperature()
    }
})
```

## Step 8
Add another if statement to check if the current ``||Input:temperature||`` is less than ``||Variables:minTemp||``. If it is, update ``||Variables:minTemp||``.

```blocks
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
    basic.showNumber(input.temperature())
    if (input.temperature() > maxTemp) {
        maxTemp = input.temperature()
    }
    // @highlight
    if (input.temperature() < minTemp) {
        // @highlight
        minTemp = input.temperature()
    }
})
```

## Step 9
Now, let's add code to display the ``||Variables:minTemp||`` when button A is pressed and the ``||Variables:maxTemp||`` when button B is pressed.

```block
input.onButtonPressed(Button.A, function () {
    basic.showNumber(minTemp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(maxTemp)
})
```

## Step 10: Optional Challenge
Use another conditional statement and variable to play a sound when the temperature excceeds a threshold (e.g. 40°C).

~hint Tell me more!
1. Create a **variable** called ``||Variables:tempThreshold||`` and set it to the threshold temperature.

2. Use a **conditional statement** inside the ``||Loop:loop||`` to check if the current ``||Input:temperature||`` is greater than ``||Variables:tempThreshold||``.

3. If it is, use the ``||Music:play tone||`` block to play a sound.

hint~

```blocks
let minTemp = 0
let maxTemp = 0
datalogger.setColumnTitles("Temperature")
maxTemp = input.temperature()
minTemp = input.temperature()
// @highlight
let tempThreshold = 30

loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
    basic.showNumber(input.temperature())
    if (input.temperature() > maxTemp) {
        maxTemp = input.temperature()
    }
    if (input.temperature() < minTemp) {
        minTemp = input.temperature()
    }
    // @highlight
    if (input.temperature() > tempThreshold) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
```

## Step 11
Click the ``|Download|`` button to download the code to your micro:bit.

## Step 12
Set up your experiment! 

Unplug the micro:bit. Place the your first model city under your chosen light source (e.g. heat lamp, window sill, outdoors). Position it so it receives direct light.

## Step 13
Press the micro:bit logo to erase any old data. Then, let the micro:bit collect temperature readings for a set period of time (e.g. 2 hours).

## Step 14
After the experiment, download your data by plugging the micro:bit back into your computer and following [these instructions](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

## Step 15
Repeat steps 11-14 with the second model city. Ensure the model is the same distance from the light source as before.

## Step 16
Analyze your data*:
1. Compare the temperature data from the damp, light model and the dry, dark model.
2. What differences do you observe in the temperature readings?
3. What was the starting temperature of each model?
4. How quickly did each model heat up?
5. What was the highest temperature reached by each model?
6. Can you explain these differences?

*[Or take a look at our sample data](https://docs.google.com/spreadsheets/d/1BZM0QFmotUuUeRaMSvCKPePYzB9TCcv0LGryT8MtGmc/edit?usp=sharing)

## Reflection
Before we wrap up:
- Why is it important to compare data from two different models in this experiment?
- What does this experiment teach us about how colour and moisture affect the heating of urban environments?
- What other factors could affect temperature that we _didn't_ include in our models?
- What are some ways that cities can use this information to design cooler, more sustainable urban spaces?

## Finished
Click the ``|Done|`` button to finish this tutorial.