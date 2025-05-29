# Turbidity Meters - Use Tutorial
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

## Turbidity Meters - Use Tutorial @showdialog
Today, we are going to build our own **NTU sensor** to measure the turbidity of water samples!

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

- ``||input:on button A pressed||`` the value picked up by the solar sensor will be displayed on the micro:bit's LEDs. This is how we can take a reading of our sample!

hint~

```blocks
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
input.onButtonPressed(Button.A, function () {
    basic.showNumber(fwdSensors.solar1.fwdLightLevel())
})
```

## Step 6
Grab your prepared water samples. 

Remember, our lower turbidity sample should be tap water, while the second, higher turbidity sample will be tap water with a tablespoon baking soda mixed in. 

## Step 7
Place the sample with low turbidity between the LED ring and solar sensor as shown in the lightbulb hint. Ensure the water sample is stable and won't spill. 

![Low turbidity sample](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-turbidity-water-render.webp)

## Step 8

Press A. What was the reading for this sample? Record it.

## Step 9
Place the high turbidity sample between the LED ring and solar sensor as shown in the lightbulb hint. Ensure the water sample is stable.

How do you predict this sample's reading will differ from the first? Why?

![High turbidity sample](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-turbidity-dirty-render.webp)

## Step 10
Press A. Record the reading. Was your prediction correct?

## Step 11
Analyze your data:
1. Which sample had a higher turbidity reading?
2. What does this difference in readings tell you about the clarity of the two samples?
3. What does this difference tell you about the amount of particles in each sample?

## Reflection
Before we wrap up:
- Why is it important to test more than one water sample when measuring turbidity?
- How does the amount of light scattered relate to the turbidity of a water sample?
- What are some real-world situations where it's important to measure turbidity?
- If you found a high turbidity reading in a local water sample, what might be some possible sources of the particles causing the turbidity?

## Finished
Click the ``|Done|`` button to finish this tutorial.