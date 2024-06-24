# Glacier Tracking with Satellites - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
datalogger.setColumnTitles("Light Level (%)")
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a glacier satellite! We are going to do this in five parts:
1. **Build** your satellite
2. **Add code** to your satellite to bring it to life
3. **Modify** the code of your satellite to learn how it works
4. Complete a couple small coding **challenges**
4. **Conduct an experiment** to better understand the impact climate change has on Earth's albedo

Before you begin, make sure you have some white and black paper. You'll also need some small rectangles of white paper, folded in half. These will represent our glaciers.

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

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 60%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Modify Your Project @showdialog
We are now ready to **modify** our satellite!

Tips
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!
4. After each change, you will need to ``|Download|`` the updated code to your micro:bit.

## Modify Step 1
Let's take a look at our glacier satellite.

What are the different parts of this project? How will these parts work together to track the amount of light being reflected off different surfaces?

~hint Tell me more!
- In this project, the LED ring acts like the sun and shines light down on the base plate which acts as Earth's surface.
- We will place different coloured paper on the base plate to represent different surfaces, like a glacier, the ocean, the ground, etc.
- The solar sensor will act as our satellite and will measure the amount of light being reflected off Earth.
- This data will give us information on glacier melting.
hint~

## Modify Step 2
We will be collecting data on light levels using something called a **conditional statement**. Can you find the conditional statement in our code?

Check the lightbulb for the answer.

~hint Tell me more!
- Conditional statements tell our micro:bit what to do when a certain condition is met.
- In this case, we are using a conditional statement to tell our micro:bit to collect solar sensor data when the B button is pressed. This is known as user **input**.
hint~

```block
    if (input.buttonIsPressed(Button.B)) {
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    }
```
## Modify Step 3
Let's change _when_ our micro:bit collects data by changing ``||input:on button B pressed||`` to ``||input:on button A pressed||``.

~hint Tell me more!
- Don't forget to download your new code!
hint~

```block
    if (input.buttonIsPressed(Button.A)) {
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    }
```
## Modify Step 4
Let's try collecting some data. 

Unplug the micro:bit from the computer, then press and hold 'A' for 10 seconds. The collected data will be stored on our micro:bit.

## Modify Step 5 @showdialog
Time to view the data we just logged. To access it:

1. Plug the micro:bit back into your computer.
2. Open File Explorer or My Computer on your device.
3. Select your micro:bit.
4. Open the file called 'MY_DATA'.
5. A new window will show all your data!
6. Click 'Visual Preview' to view as a graph, where the Y-axis is 'Light Level' and X-axis is 'Time (seconds)'.

**Complete these steps, then come back here for a challenge.**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/MyDataWalkthrough.webp" style="width: 100%;">

**Need more support?** Check out this [micro:bit resource on Data Logging](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

## Activity 4: Challenge @showdialog
Let's improve the user experience of our glacier satellite. We are going to:

1. Add visual output to tell the user when data is being collected
2. Use a conditional statement to delete old data

## Challenge Step 1
As a user, we had to trust that our data had been saved. We could only confirm this had _actually_ happened once we opened the MY_DATA file.

Let's add some visual sign or **output** on our micro:bit's display to reassure the user that data is being collected.

## Challenge Step 2
Drag a ``||basic:show icon||`` block from the ``||basic:Basic||`` category and add it to the workspace.

If we want the icon to appear _while_ data is being collected, where should we put this block in our code?

~hint Tell me more!
- You will add the ``||basic:show icon||`` block right before the ``||datalogger:log data||`` block inside the conditional statement.
- Feel free to change the icon.
- Download your code and test it out!
hint~

```block
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    }
```

## Challenge Step 3
You probably noticed that the icon stays visible all the time now! That's because we haven't told the micro:bit what to display when A is _not_ being pressed.

Expand your conditional statement by clicking the + icon below it. This reveals an ``||logic:else||`` condition. Let's add a ``||basic:show icon||`` block here, too.

~hint Tell me more!
- If A is pressed, we'll show a checkmark and collect data, _else_ we'll display an 'X' icon.
- Download your code and test it out!
hint~

```block
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    } else {
        basic.showIcon(IconNames.No)
    }
```

## Challenge Step 4
We've collected some random data while testing our code, but we don't actually want to save this data. At the moment, there is no way to delete data from our log.

Let's add another conditional statement to clear the data.

## Challenge Step 5
First, we need to set up our input, which will trigger our code. Go to the ``||input:Input||`` section and drag the ``||input:on button A pressed||`` block into the workspace. Change A to B.

_Note: The block will be greyed out._

## Challenge Step 6
Next, we need to build another conditional statement. Click on ``||logic:Logic||`` and drag an ``||logic:if true then||`` block into the workspace. You'll notice that this block is also greyed out.

## Challenge Step 7
How do we connect these two blocks to make something happen _when_ we press 'B'? Also, where should we placed the completed conditional statement in our code?

Think you got it right? Click the lightbulb to check your answer.

~hint Tell me more!
- The ``||logic:if then||`` block has a blank space meant for another block.
- The ``||input:on button B pressed||`` block is shaped differently and needs to fit inside another block to function. We can insert it into the blank space in our conditional.
- Then, place this new conditional within the ``||basic:forever||`` block. This will make our micro:bit continuously checks if the buttons have been pressed.
hint~

```blocks
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    } else {
        basic.showIcon(IconNames.No)
    }
    // @highlight
    if (input.buttonIsPressed(Button.B)) {
    }
})
```

## Challenge Step 8
Lastly, we need to specify what happens after the B button is pressed. Go to the ``||datalogger:Data Logger||`` category and add the ``||datalogger:delete log||`` block inside the ``||logic:if then||`` block.

~hint Tell me more!
- ``||datalogger:delete log||`` clears any saved data.
- Download your new code.
- Test it out: Unplug your micro:bit, record some data, then clear it by pressing B!
hint~

```block
    if (input.buttonIsPressed(Button.B)) {
        datalogger.deleteLog()
    }
```

## Challenge Step 9 @showdialog
Let's see if this worked! Plug your micro:bit back into your computer. Then, open your MY_DATA file to confirm the data log is empty.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/MyDataWalkthrough.webp" style="width: 100%;">

## Activity 5: Experiment @showdialog
Now we are ready to conduct our albedo experiment.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr6-glacier-thumbnail-render.webp" alt="Full glacier render" style="display: block; width: 60%; margin:auto;">

We are going to record the amount of light reflected back to the solar sensor (aka the satellite) in a few scenarios:

1. Base plate alone
2. White paper (snowy glacier)
3. Black paper with four white rectangles (ocean or land with melting glaciers)
4. Black paper with three white rectangles
5. Black paper with two white rectangles
6. Black paper with one white rectangle
7. Black paper (dark ocean or land)

How do you think the light level will change in these scenarios? Make a prediction!

## Experiment Step 1
Let's start logging some real data. Make sure there is nothing on your base plate. Then, unplug your project from the computer. Next, hold down the A button on the micro:bit for 10 seconds. Let go.

~hint Tell me more!
- We first collect light levels without any paper on the base plate to see what "normal" looks like. This is our control.
- Holding the A button for 10 seconds allows us to gather a lot of data.
hint~

## Experiment Step 2
Now, grab your white piece of paper and cover the base plate with it. Hold 'A' for 10 seconds. Let go.

~hint Tell me more!
- The white paper represents a healthy, snowy glacier. Glaciers are white and shiny, so they have high albedo and reflect a lot of sunlight back into space.
hint~

## Experiment Step 3
Take your black piece of paper and add it to the base plate. Then, add the folded white rectangles randomly on top. Hold 'A' for 10 seconds to collect data on this condition.

~hint Tell me more!
- The black paper represents the ocean and ground because it is dark. It has a low albedo and will absorb a lot of light from the sun.
- The white rectangles represent glaciers that are starting to melt. You can start to see the ocean and ground below.
hint~

## Experiment Step 4
Now, remove one 'glacier' at a time. Each time you remove a glacier, press 'A' for 10 seconds to record data on the new condition.

~hint Tell me more!
- This represents glaciers that are melting over time.
- What do you think will happen to the amount of light reflected back into the solar sensor each time you remove a glacier?
hint~

## Experiment Step 5
Once all the white rectangles have been removed, take one last measurement of your black paper alone. Hold 'A' for 10 seconds. Let go.

~hint Tell me more!
- This condition represents the ocean or ground without _any_ glaciers.
hint~

## Experiment Step 6 @showdialog

Let's compare our real data to our predictions.

1. Plug the micro:bit back into your computer.
2. Open File Explorer or My Computer on your device.
3. Select your micro:bit.
4. Open the file called 'MY_DATA'.
5. A new window will show all your data!
6. Click 'Visual Preview' to view as a graph, where Y-axis is 'Light Level' and X-axis is 'Time (seconds)'.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/MyDataWalkthrough.webp" style="width: 100%;">

## Reflection @showdialog
How did the data you collected compare to your predictions?

Can you explain any differences?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.
