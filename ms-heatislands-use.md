# Urban Heat Islands - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
datalogger.setColumnTitles("Temperature")
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
    basic.showNumber(input.temperature())
})
```

## Urban Heat Islands - Use Tutorial @showdialog
Today, we are setting up temperature-monitoring devices to compare temperature in the two different models that you built.

We'll use these devices to collect temperature data and learn more about how to mitigate the urban heat island effect.

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
- Every _60,000 milliseconds (60 seconds or 1 minute)_, the micro:bit will take a temperature reading and save it to the data log. It will also update the LED display with this new temperature reading.
hint~

```block
    loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
    basic.showNumber(input.temperature())
})
```

## Step 5
Observe the micro:bit. What do you see on the LED screen?

~hint Tell me more!
You should see the current temperature of the model.
hint~

## Step 6
It's time to set up our experiment! 

Unplug your micro:bit. Move both models to your chosen location (e.g., under a heat lamp, near a window, or directly outside on a sunny day). Ensure both models experience the same environmental conditions.

## Step 7
Then, power on the breakout board and let the micro:bit collect temperature data for a set period of time.

## Step 8
After the experiment, you'll need to analyze your data.

To view the data saved on your micro:bit, follow [these instructions](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

## Step 9
Analyze the data:
1. Compare the temperature data from your different model designs and/or locations.
2. What differences do you observe in the temperature readings?
3. Can you explain these differences based on the design of each model?

## Reflection
Before we wrap up:
- Why is it important to compare data from two different models in this experiment?
- What did you learn about how design affects temperature in urban environments?

## Finished
Click the ``|Done|`` button to finish this tutorial.