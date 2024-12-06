# Forward Education Sea Level Rise Satellite - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    Logging = true
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
datalogger.onLogFull(function () {
    Logging = false
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
let WaterLevel = 0
let Logging = false
datalogger.setColumnTitles("Water Level")
Logging = false
loops.everyInterval(1000, function () {
})
basic.forever(function () {
    WaterLevel = fwdSensors.sonar1.fwdDistance()
    basic.pause(1000)
    led.plotBarGraph(
    WaterLevel,
    0.3
    )
})
```
## Activity 1: Build Your Project @showdialog
Let's build a satellite to monitor sea level change! We are going to do this in four parts: 
1. **Build** our satellite
2. **Add code** to bring our project to life  
3. **Modify** our project to learn about other sensors  
4. Apply what we learned with a small **experiment**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-render.webp" alt="Full rising sea satellite render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![Build Step 1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs01.webp)

## Build Step 2 @showdialog
![Build Step 2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs02.webp)

## Build Step 3 @showdialog
![Build Step 3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs03.webp)

## Build Step 4 @showdialog
![Build Step 4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs04.webp)

## Build Step 5 @showdialog
![Build Step 5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs05.webp)

## Build Step 6 @showdialog
![Build Step 6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs06.webp)

## Build Step 7 @showdialog
![Build Step 7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs07.webp)

## Build Step 8 @showdialog
![Build Step 8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs08.webp)

## Build Step 9 @showdialog
![Build Step 9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs09.webp)

## Build Step 10 @showdialog
![Build Step 10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs10.webp)

## Build Step 11 @showdialog
![Build Step 11](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs11.webp)

## Build Step 12 @showdialog
![Build Step 12](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs12.webp)

## Build Step 13 @showdialog
![Build Step 13](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs13.webp)

## Build Step 14 @showdialog
![Build Step 14](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs14.webp)

## Build Step 15 @showdialog
![Build Step 15](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs15.webp)

## Build Step 16 @showdialog
![Build Step 16](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs16.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 60%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Click the ``|Download|`` button to download the starter code to your project.

## Activity 3: Modify Your Project @showdialog
We have a satellite that **detects the water level** and **visualizes water level using the LED display**. Let’s explore how to optimize our sensors by **modifying** our code!

As you go through the next steps:

* Use the instructions at the top of the screen to **modify** your code.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb**!

## Modify Step 1
Let’s test out our satellite to see how it can monitor sea level change!

With your model on a table, gently move your hand between the table and the sonar sensor while looking at the **LED display** on the micro:bit.

What is happening? 

~hint Tell Me More!
* When the distance between the table and the sonar sensor is **bigger**, more LEDs turn on! 
* When the distance between your hand and the sonar sensor is **smaller**, fewer LEDs turn on!
hint~

## Modify Step 2
Can you identify the **code block** that is telling the code to control the LEDs on the micro:bit?

~hint Tell Me More! 
* The micro:bit collects data from the sonar sensor. 
* The code creates a graph between 0.3 meters and your hand.
hint~

```blocks
basic.forever(function () {
    WaterLevel = fwdSensors.sonar1.fwdDistance()
    basic.pause(1000)
   //@highlight 
   led.plotBarGraph(
    WaterLevel,
    0.3
    )
})
```
## Modify Step 3
Let's set up data logging to track sea water rise.

Data logging will let us compare how much ice has melted, to how much our ocean is rising. This data can help us identify patterns, like differences between land and sea ice, or how temperature affects the speed of ice melting.

## Modify Step 4
We can use the blocks from the [Data Logger Extension](https://microbit.org/get-started/user-guide/data-logging/) to record sea water level as ice melts. 

In our code, we've already made sure we have a way to turn on data logs, and delete old data. 

```blocks 
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    // @highlight
    Logging = true
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})

input.onButtonPressed(Button.AB, function () {
  // @highlight
    datalogger.deleteLog()
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
```

## Modify Step 5
Use the ``||Datalogger:log data||`` block to save the ``||fwdSensors:sonar distance||`` data as your ice is melting. Remember to name your column **"Water Level"**.

```block
    loops.everyInterval(1000, function () {
    // @highlight
    datalogger.log(datalogger.createCV("Water Level", fwdSensors.sonar1.fwdDistance()))
})
```

## Modify Step 6
Let's reduce how often our data is being recorded. 

Select the dropdown on the ``||loops:everyInterval||`` block. What do you think a better frequency to log our ice melting is?

~hint Tell Me More! 
Try selecting once every minute, or 60,000 milliseconds. 
hint~

```blocks
// @highlight
    loops.everyInterval(60000, function () {
       datalogger.log(datalogger.createCV("Water Level", fwdSensors.sonar1.fwdDistance()))
})
```

## Activity 4: Sea Level Experiment
Now that we have **modified** our code to understand how our satellite **collects data**, we're going to add water!

Remember to press the ``|Download|`` button to download our modified code.

**Important!** Remember that our project uses electronic wires and sensors that should not get wet! If any part other than the building blocks get wet, turn off your project and fully dry it before continuing. 

## Build Step 17 @showdialog
To help your green circular building block float in water, wrap it with plastic wrap.

![Build Step 17](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs17.webp) 

## Build Step 18 @showdialog
Place your model in a water tight container filled 1/4 full with **cold water.** 

Be careful not to drop any electronic components into the water.

![Build Step 18](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs18.webp)

## Build Step 19 @showdialog
Fill one side of your container full of ice.

The large green rectangular building block should stop the ice from getting to the other side of the container.

![Build Step 19](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs19.webp)

## Build Step 20 @showdialog
Place your green circular building block on the opposite side of the container. 

The circular block is like **our hand**, it should sit in the container underneath the sonar sensor.

![Build Step 20](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs20.webp)


## Experiment Step 1
Leave your micro:bit on in your container of ice and water, what do you think will happen to the LEDs as the ice melts?

Write your prediction down!

## Experiment Step 2
Now it’s time to test your prediction!

Press the **A and B** buttons on your micro:bit to delete any old logs. Then, press the **touch sensor** to turn on your data logger.

~hint Tell Me More!
As the ice melts and the water rises
* Our data logger will record the level of the sonar sensor into a table we can look at later.
* Fewer LEDs will light up.

Depending on the size of your container, the water will rise more or less as your ice melts.
hint~

## Experiment Step 3
How quickly did the ice melt with the cold water? 

Plug the micro:bit back in and [view the log data](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

Create a copy of your data log, and save it somewhere on your computer later. 

## Experiment Step 4
Get a new container with the **same amount of ice** but this time, use **hot water**. 

How quickly do you think that your ice will melt with the warmer water? Write your prediction down! 

~hint Tell Me More! 
Remember to use the same amount of ice and water so that you can compare the level of water rising over time.
hint~

## Experiment Step 5
Once your ice has melted, plug your micro:bit back into your computer and [view the log data](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

Save your data log on your computer for the next step.

## Experiment Step 6
How do your two data logs compare? Create a graph to visualize your water level experiment.

~hint Tell Me More!
You may choose to create a bar or a line graph, with the following axes: 

* X: Time
* Y: Percentage of ice melted
* Colour of line/bar: Cool Water versus Hot Water
hint~

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. How did using predictions and data collection help you better understand your code?

2. How do you think a different amount of ice would change the results of your experiment?

3. How did the temperature of the water influence the speed of ice melting?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.