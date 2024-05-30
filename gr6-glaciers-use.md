# Glacier Tracking with Satellites
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger 
```
## Activity 1: Build your Project @showdialog 
Welcome to Glacier Tracking with Satellites!  We are going to do this in three parts!
1. **Build** your project
2. **Code** your project 
3. **Use** your project to learn how it works <br>
<span style="font-size: 17;">***Note:*** Before you begin, make sure you have your supplies: white paper, black paper, yellow paper, and aluminum foil.</span> 


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
Next, follow the steps to pair your micro:bit. <br> 
![pair gif](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp) 

## Code Step 2 
Next, click the ``|Download|`` button to download the code to your project. 

## Activity 3: Use your Project @showdialog 
We are now ready to use our **glacier tracking system**. Follow the instructions at the top of the screen. <br> When you are ready for more information, click *'Tell me more!'* <br>


## Use Step 1 
The code below will allow our glacier tracking system to measure the light reflected off different surfaces! <br> Look at your Glacier Tracking System and think about this question: Which part of this project represents the sun?

~hint Tell me more!
- Here, the LED lights represent the sun's rays.
hint~

```template
fwdSensors.ledRing.fwdSetBrightness(10)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.forever(function () {
    datalogger.log(datalogger.createCV("Light Level", fwdSensors.solar1.fwdLightLevel()))
})
```

## Use Step 2 
Now look again: Which part do you think represents Earth's surface? Which part is meant to be the satellite?

~hint Tell me more!
- In this project, we are using the base plate to represent Earth's surface.
- The solar sensor acts like a satellite, collecting data using the live data simulator.
hint~

## Use Step 3 
Now take a look at the code in the workspace below. What do you think it does? Make some predictions!

## Use Step 4 
The base plate represents Earth's surface and the solar sensor acts as the satellite, this project tracks the light levels being reflected onto different surfaces, like the ocean. The micro:bit stores all of this information for us to analyze later. 

## Use Step 5 
At the bottom left-hand side of the page, click ``|Show Data Simulator|`` This is where you will see the live data collected by your project.  

## Use Step 6 
Next, turn on your breakout board to begin collecting data from your project. Then click "Console" to see the live data from the glacier monitoring system. 

## Use Step 7 
Now, turn on your breakout board to begin collecting data from your project. Then click "Console" to see the live data from the glacier monitoring system. 

## Use Step 8 

The purple line on the graph shows the level of solar light reflection over time. The **X-axis** represents time, while the **Y-axis** indicates the amount of light reflected back as a decimal. 
To convert this decimal to a percentage, simply multiply by 100. The higher the purple line, the more reflection is occurring; the lower the line, the less reflection is going back into the environment.

~hint Tell me more!
- The graph helps us understand how much solar light is being reflected at different times. 
- By looking at the Y-axis values, you can see the reflection amount as a decimal. 
- When you multiply this decimal by 100, you get the percentage of light being reflected. 
- This can help you visualize how reflective surfaces can affect the environment. 
hint~

## Use Step 9 
Now let's collect some data using our system. Start by placing a piece of paper on the base plate. What do you notice about the data below? 
~hint Tell me more!
-Notice how the light level values change. 
-The white paper reflects more light, so you should see an increase in the light level readings. 
-This shows how different materials can affect light reflection.
hint~

## Use Step 10 
After looking at the data with the black paper, let's try a different color. Place a yellow piece of paper on the base plate. What do you notice about the data below? 

~hint What should I be looking for?
- Watch how the light level numbers change. 
- The yellow paper reflects some light but not as much as the white paper.
- You should see the light level go up, but maybe not as much as with the white paper.
- This shows how different colors can change how light reflects.
hint~

## Use Step 11 
After looking at the data with the yellow paper, let's try another material. Place a piece of aluminum foil on the base plate. What do you notice about the data below? 

~hint What should I be looking for?
- Watch how the light level numbers change. 
- The aluminum foil reflects a lot of light, so you should see a big increase in the light level readings. 
- This shows how shiny materials can reflect light very well.
hint~

## Use Step 12 
After looking at the data with the aluminum foil, let's try a combination. Place a piece of white paper with some aluminum foil on top of it on the base plate. This simulates icebergs (the foil). What do you notice about the data below? 

~hint Tell me more!
- Watch how the light level numbers change. 
- The white paper with foil reflects a lot of light, like icebergs in the ocean. 
- You should see a big increase in the light level readings. 
- This shows how icebergs can reflect sunlight.
hint~

## Congratulations! @showdialog 
You've completed the activity! Did anything surprise you about this project? 

## Reflection @ Showdialog 
List 2 new things you learned today. What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|`` button to finish the tutorial.

