# Urban Heat Islands - Use Tutorial
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

## Urban Heat Islands - Use Tutorial @showdialog
Today, we are going to compare how quickly a dry, dark model city and a damp, light model city heat up.

We'll use the micro:bit's temperature sensor to collect data and learn more about how colour and moisture levels impact the urban heat island effect.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-heatislands-render.webp" alt="Full model city render" style="display: block; width: 70%; margin:auto;">

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
Take a look at the code in the workspace. What do you think this code will do?

~hint Tell me more!
- We are using the [Data Logger extension](https://microbit.org/get-started/user-guide/data-logging/) to track and save data from the [temperature sensor](https://microbit.org/get-started/features/sensors/#temperature-sensor) on the micro:bit.
- Every _60,000 milliseconds (60 seconds or 1 minute)_, the micro:bit will take a temperature reading and save it to the data log.

- The ``||basic:forever||`` loop will ensure the micro:bit continuously displays the current temperature on its LED screen.

- The ``||input:on logo pressed||`` block will clear any previously logged data when the micro:bit logo is pressed.

hint~

```block
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    datalogger.deleteLog()
})
```

## Step 5
It's time to set up our experiment! 

Unplug your micro:bit. Place the _dark_ model city under your chosen light source (e.g. heat lamp, window sill, outdoors). Position it so it receives direct light.

## Step 6
Press the micro:bit logo to erase any old data. Then, let the micro:bit collect temperature readings for a set period of time (e.g. 2 hours).

## Step 7
After the experiment, download your data by plugging the micro:bit back into your computer and following [these instructions](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

## Step 8
Repeat steps 5-7 with the _light_ model city. Ensure the model is the same distance from the light source as before.

## Step 9
Analyze your data*:
1. Compare the temperature data from the dry, dark model and the damp, light model.
2. What differences do you observe in the temperature readings?
3. What was the starting temperature of each model?
4. How quickly did each model heat up?
5. What was the highest temperature reached by each model?
6. Can you explain these differences?

*[Or take a look at our sample data](https://docs.google.com/spreadsheets/d/1BZM0QFmotUuUeRaMSvCKPePYzB9TCcv0LGryT8MtGmc/edit?usp=sharing)

## Reflection
Before we wrap up:
- Why is it important to compare data from two different models in this experiment?
- What does this experiment teach us about how color and moisture affect the heating of urban environments?
- What other factors could affect temperature in a real city that we didn't include in our models?
- What are some ways that cities use this information to design cooler, more sustainable urban spaces?

## Finished
Click the ``|Done|`` button to finish this tutorial.