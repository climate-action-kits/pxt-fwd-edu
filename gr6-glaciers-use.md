# Glacier Tracking with Satellites
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger 
```
## Activity 1: Build your Project @showdialog 
Welcome to the Glacier Tracking with Satellites! <br> We are going to do this in three parts!
1. Build your project
2. Code your Project 
3. Use your project to learn how it works

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



## Activity 3: Use your Project @showdialog 
We are now ready to use our **Glacier Tracking System**. Follow the instructions at the top of the screen. <br> When you are ready for more information, click *'Tell me more!'* <br>
After each change, you will need to ``|Download|`` your updated code for your project.

## Use Step 1 
The code below will make our Glacier tracking system measure the light reflected off different surfaces! Look at your Glacier Tracking System and think about this question. <br>
Think about the **Albedo-Ice Feedback** diagram when looking at your project. Which part of this project represents the sun?

~hint Tell me More 
- Here the LED lights represent the sun.
hint~

```template
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.forever(function () {
    datalogger.log(datalogger.createCV("Light Level", fwdSensors.solar1.fwdLightLevel()))
})
```

## Use Step 2 
Now look again: which part do you think represents Earth's surface? Which part is meant to be the satellite?

~hint Tell me more!
- In this project, we are using the base plate to represent Earth's surface.
- The solar sensor acts like a satellite, collecting data using the live data simulator.
hint~

## Use Step 3 
Take a look at the code below. What do you think it does? Make some predictions!

## Use Step 4 
Got your predictions? Let's see if you were right! Click the ``|Download|`` button to load your code and test it out! 

## Use Step 5 
Since the base plate represents Earth's surface and the solar sensor acts as the satellite, this project tracks the light levels being reflected onto different surfaces, like the ocean. The micro:bit stores all of this information for us to analyze. At the bottom of your screen, click ``|Show Data Simulator|``. Take a look at the data collected so far, then go back to the code. Try it now! 

## Use Step 6 
Next, let's see what happens when we make some changes. To do that, we have to follow three steps:
1. First, get a piece of black paper and cover the base plate.
2. Then, open the data simulator and see what happens to your data.
3. Go back to the code for the next step.

## Use Step 7 
Now let's try using a white piece of paper, then a yellow piece, and finally, aluminum foil. Follow the same steps,
1. First, get a piece of black paper and cover the base plate.
2. Then, open the data simulator and see what happens to your data.
3. Go back to the code for the next step.

## Use Step 8 
Welcome back! Were your predictions correct? Did any of the results surprise you?

## Congratulations! @showdialog 
You've completed the activity! Did anything surprise you about this project? 

## Reflection @ Showdialog 
List 2 new things you learned today. What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|`` button to finish the tutorial.

