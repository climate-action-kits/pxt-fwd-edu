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

## Build Step 2 @showdialog 

## Build Step 3 @showdialog 

## Build Step 4 @showdialog 

## Build Step 5 @showdialog 

## Build Step 6 @showdialog 

## Build Step 7 @showdialog 

## Build Step 8 @showdialog 

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
Did you guess that right? 'Button A pressed' is an Event block. <br>What do you think will happen when you press the A button?

~hint Tell me More
- Pressing the A button will change the icon on the Micro:bit.
- It will also start collecting data on light levels!
hint~



