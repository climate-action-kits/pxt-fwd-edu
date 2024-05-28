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
We need to connect our project to the computer to make it come to life with code! <br> The code will be the instructions that tell our micro:bit what to do. <br> *Note* For the project leave the breakout board off 

## Code Step 1 @showdialog 
Click three dots beside ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp) 

## Code Step 2 
Next, click the ``|Download|`` button to download code to your project. 

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
The base plate represents Earth's surface and the solar sensor acts as the satellite, this project tracks the light levels being reflected onto different surfaces, like the ocean. The micro:bit is storing all of this information for us to analyze

## Use Step 5 
At the bottom left-hand side of the page, click ``||Show Data Simulator||`` This is where you will see the live data collected by your project. 

## Use Step 6 
Next, turn on your breakout board to begin collecting data from your project. Then click "Console" to see the live data from the glacier monitoring system.

## Use Step 7 
The purple line on the graph shows the level of solar light reflection. The higher the line, the more reflection is occurring; the lower the line, the less reflection is going back into the environment.

## Use Step 8 
Now, let's collect some data using our system. Start by placing a white piece of paper on the breakout board. What do you notice about the data below? 

## Use Step 9 
Next, remove the white paper and test it with a yellow sheet of paper. What do you notice about the data below?

## Use Step 10 
Now, put the white paper back and add bits of aluminum foil on top of it. Observe the changes in the data below. What differences do you notice compared to the previous tests?

## Use Step 11 
Were your predictions correct? Did any of the results surprise you? What other test could you do? 

## Congratulations! @showdialog 
You've completed the activity! Did anything surprise you about this project? 

## Reflection @ Showdialog 
List 2 new things you learned today. What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|`` button to finish the tutorial.

