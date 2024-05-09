# Glacier Tracking with Satellites
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```
## Activity 1: Build your Project @showdialog 
Welcome to the Glacier Tracking with Satellites! <br> We are going to do this in four parts!
1. Build your project
2. Code your Project 
3. Modify your Project
4. Complete a coding challenge 

```template 
datalogger.setColumnTitles("Light Level (%)")
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    } else {
        basic.showIcon(IconNames.No)
    }
})
```
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

## Activity 2: Code your Project @showdialog 
We need to connect our project to the computer to make it come to life with code! <br> The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
 Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" width="400">

## Code Step 2 @showdialog
Click three dots beside ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp) 

## Code  Step 3 
Next, click the ``|Download|`` button to download the blank project to start up the simulators. 

## Activity 3: Modify your Project @showdialog
We are now ready to modify our project to better understand how it works! Follow the instructions at the top of the screen. 
When you are ready for more information, click *'Tell me More!'*

After each change to the code, you will need to ``|Download|`` the updated code to your project.

## Modify Step 1 

In this project, we are tracking the levels of light being reflected onto different surfaces. We do this by using something called conditionals.<br>
How many conditional statements do you see in the code below?

~hint Tell me More
- Conditional statements tell our micro:bit what to do when a certain condition is met.
- We use conditional statements in our own lives too.
- For example, 'If it is raining, then I will bring an umbrella.'
  hint~ 

## Modify Step 2 
Did you guess correctly? The code below has only one conditional statement. This condition is triggered by an event.<br>
Looking at the code below, which blocks represent the event?

~hint Tell me More 
- An event in coding is when one thing causes another thing to happen!
- For example, when you press the button for the elevator, the elevator arrives!
- Pressing the button of the elevator is the event that triggers an action.
hint~

## Modify Step 3 
Did you guess that right? ``||Input:on button A pressed||`` is an Event block. <br>What do you think will happen when you press the A button?

~hint Tell me More
- Pressing the A button will change the icon on the Micro:bit.
- It will also start collecting data on light levels!
- Holding the A button will record information.
hint~

## Modify Step 4 

Let's change the event block from ``||Input:on button A pressed||`` to ``||Input:on button B pressed||`` and see what happens. Click the arrow to open the dropdown menu in the ``||Input:on button A pressed||`` block. Change the event to 'Button B', then download the new code to your Micro:bit.

~hint Tell me More 
- If you don't see the change on your micro:bit, check that you've downloaded the new code.
- Changing to 'Button B' won’t change what happens; your micro:bit will still show the check mark if everything is set up right!
hint~

## Modify Step 5 
Did you see the check mark when you pressed the B button? Great job! Now let’s switch it back. Change ``||Input:on button B pressed||`` to ``||Input:on button A pressed||`` Before we move on to collect data, make sure you did it right by looking for the lightbulb icon.

~hint Tell me More
- Didn't see the change? Make sure you've downloaded the new code to your Micro:bit.
- Now, you can unplug the Micro:bit from your computer safely.
hint~ 

```blocks
datalogger.setColumnTitles("Light Level (%)")
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    } else {
        basic.showIcon(IconNames.No)
    }
})
```
## Modify Step 6 
First, let’s get our materials ready. You will need:<br>
Two pieces of paper: one white and one black <br>
Some small rectangles of white paper, folded in half—these are our 'icebergs.'

~hint Tell me More
- We use black and white paper to show how different parts of our Earth works.
- The black paper is like the ocean. It helps us see how much light and heat the ocean can soak up or bounce off.
- The white paper 'icebergs' help reflect light back up into the sky, which keeps the ocean from getting too warm
hint~

## Modify Step 7 
Now, let’s get our code ready to log data. First, unplug your project from the computer. Next, hold down the A button on the micro:bit. While you’re holding it, cover the baseplate with white paper. Keep holding the button for 8 seconds, then let go and take off the paper.

~hint Tell me More 
- We start with a white paper to see what normal data looks like.
- Holding the A button for 8 seconds lets our Micro:bit gather a lot of data.
hint~

## Modify Step 8 
Now, grab your black piece of paper and cover the baseplate with it. This time, let's count to ten while you hold the A button!

~hint Tell me More 
- The black paper is like the ocean because it acts similar to how the ocean does with light.
- Counting to ten helps us get a lot of information about our 'ocean.
hint~

## Modify Step 9 
Take your folded white pieces of paper that are like icebergs. Place them one by one on the baseplate, counting to eight each time as you hold the A button. Then take them off one at a time. What do you think the data will show?

~hint Tell me More 
- The white paper acts as 'icebergs' in our ocean.
- Just like real icebergs, they reflect light away from the ocean
hint~

## Modify Step 10 
Now we want to look at the data we have logged. Plugging the micro:bit back into your computer and open the file  explorer on your device. Then, select your micro:bit and open the file called 'My Data.' A new window will show all your data! Complete these steps, then come back here for a challenge.

~hint Tell me More 
- Think of the micro:bit as the brain; it stores all the information.
- We need to open the micro:bit on your computer to see the data inside!
hint~

## Modify Step 11 

What did you think of your data? Could you understand what was happening? Now for a fun challenge: We want you to use another conditional statement to make the data logger look neater.

~hint Tell me More!
- A conditional statement helps us organize and display data in a way that’s easy to understand.
hint~

## Challenge @showdialog 
When we looked at our data logger, the graph was a bit messy! It was hard to tell what was our hand and what was our data. So let’s add another conditional to help clear up the data. Plug the micro:bit back into your computer now. 

## Challenge Step 1 
First, we need to set up our input, which triggers our code. Go to the ``||Input:Input||`` section and select the ``||Input:on button A pressed||`` block, change A to B. *Note: The block will be greyed out.* 

## Challenge Step 2 
Next, we need to build another conditional. Click on ``||logic:Logic||`` and select an ``||logic:if true then||`` block to add it to the workspace. You'll notice that both of these blocks will appear greyed out now.

~hint Tell Me More 
- We need this because we want something to happen when we press button B.
- Remember, the A button is already being used to record data.
hint~ 

## Challenge Step 3 
How do we connect these two blocks to make something happen when we press the B button? Also, where should we place this conditional in our code?

~hint Tell me More
- The 'if/then' block has a blank space meant for another block.
- The 'button B pressed' block is shaped differently and needs to fit inside another block to function.
- That's why we insert it into the blank space in our 'if/then' block.
hint~

## Challenge Step 4 
Think you got it right? Check the light bulb icon to see if you're correct. If not, change your code to match what's shown in the light bulb.

~hint Tell me More
We placed the second conditional within the 'forever' block.
This setup ensures our code continuously checks if the buttons have been pressed.
hint~

```blocks
datalogger.setColumnTitles("Light Level (%)")
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.fwdLightLevel()))
    } else {
        basic.showIcon(IconNames.No)
    }
    if (input.buttonIsPressed(Button.B)) {
    	
    }
})
```
## Challenge Step 5 
Lastly, we need to specify what happens after pressing the B button. Go to ``||datalogger.datalogger||`` and add the ``||datalogger.deleteLog||`` action inside the ``||logic:if true then||`` block.

~hint Tell me More
- 'Delete log' clears the data you see in the simulator.
- This allows us to reset and collect different data under various settings
hint~ 

## Challenge Step 5 
Let's see if this worked! Press the B button on the micro:bit, this will trigger the delete log event and clear your data. Check the data within the micro:bit using your file explorer. 

~hint Tell me More!
- This step checks that the 'delete log' command inside the 'if/then' block is working properly when you press the B button. 
hint~

## Congratulations! @showdialog 

You've completed the activity! Congratulations!

## Reflection @showdialog 
Think about something about this project that challenged you. How did you overcome the challenge? How did that make you feel?

## Finished! @showdialog 
In the next step, you can click the `|Done|` button to finish the tutorial."
