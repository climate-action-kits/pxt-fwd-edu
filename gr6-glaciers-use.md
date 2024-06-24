# Glacier Tracking with Satellites - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.forever(function () {
    datalogger.log(datalogger.createCV("Light Level", fwdSensors.solar1.fwdLightLevel()))
})
```

## Activity 1: Build Your Project @showdialog
Let's build a glacier satellite! We are going to do this in three parts:
1. **Build** your satellite
2. **Add code** to your satellite to bring it to life
3. **Use** your satellite to learn how it works

Before you begin, make sure you have your supplies: white paper, black paper, and yellow paper.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-thumbnail-render.webp" alt="Full glacier render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs1.webp)

## Build Step 2 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs2.webp)

## Build Step 3 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs3.webp)

## Build Step 4 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs4.webp)

## Build Step 5 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs5.webp)

## Build Step 6 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs6.webp)

## Build Step 7 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs7.webp)

## Build Step 8 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs8.webp)

## Build Step 9 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs9.webp)

## Build Step 10 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs10.webp)

## Build Step 11 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-sbs11.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

*Note: For now, please leave the breakout board **off**.*

## Code Step 1 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 2
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
We are now ready to **use** our satellite!

Tips
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!

## Use Step 1
The code below will allow our satellite to measure the amount of light reflected off different surfaces!

Look at your physical project and think about this question: Which part of this project represents the sun?

~hint Tell me more!
- Here, the LED ring represents the sun's rays.
hint~

```block
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
```

## Use Step 2
Now look again: Which part do you think represents Earth's surface? Which part is meant to be the satellite itself?

~hint Tell me more!
- In this project, we are using the base plate to represent Earth's surface.
- The solar sensor acts like a satellite, collecting data on surface reflectivity using the live data simulator.
hint~

```block
datalogger.log(datalogger.createCV("Light Level", fwdSensors.solar1.fwdLightLevel()))
```

## Use Step 3
Let's start looking at our data! At the bottom left-hand side of the page, click ``|Show Data Simulator|``. This is where you will see the live data collected by your project.

_Note: If you can't see the button, you may need to zoom out. Press **Ctrl** and **-** (Windows, Linux, or Chrome OS) or **Command** and **-** (Mac)._

## Use Step 4
Turn on your breakout board to begin collecting data from your project. Click "Console" to see the live data from the glacier monitoring system.

~hint Tell me more!
- This graph helps us understand how much light is being reflected off the Earth's surface over time.
- It will help us visualize how different types surfaces might impact Earth's albedo. Remember, albedo refers to how reflective a particular surface is.
- By looking at the Y-axis values, you can see the amount of light the solar sensor is collecting as a decimal.
- When you multiply this decimal by 100, you can convert it to a _percentage_.
hint~

## Use Step 5
Let's experiment! First, let's make some predictions. How do you think the light level will change when you place the following paper on the base plate:
- white paper (to represent snow and ice)
- black paper (to represent dark oceans or dirt)
- yellow paper (to represent partially melted snow)

## Use Step 6
Start by placing a white piece of paper on the base plate. What do you notice about the data below? Were your predictions right?

~hint Tell me more!
- Notice how the light level values change.
- The colour white reflects all visible light, so you should see an increase in the light level collected by the solar sensor.
hint~

## Use Step 7
Place a black piece of paper on the base plate. What do you notice about the data below? Were your predictions right?

~hint Tell me more!
- Notice how the light level values change.
- The black paper absorbs all visible light, so you should see a decrease in the light level collected by the solar sensor.
hint~

## Use Step 8
Let's try a different color. Place a yellow piece of paper on the base plate. What do you notice about the data below?

~hint Tell me more!
- Watch how the light level numbers change.
- The yellow paper reflects _some_ light.
- You should see the light level go up, but not as high as with the white paper.
hint~

## Use Step 9
Let's try other colors and materials (e.g. aluminum foil)! Place each item you'd like to test on the base plate and observe what happens. Can you explain the changes?

## Congratulations! @showdialog
You've completed the activity! Did anything surprise you about this project?

## Reflection @showdialog
List 2 new things you learned today. What is one thing you want to learn more about?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.