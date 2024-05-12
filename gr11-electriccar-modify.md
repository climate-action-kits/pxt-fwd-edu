# Autonomous Electric Vehicles of the Future 

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```
## Activity 1: Build your Project 
Let's build an electric vehicle! We are going to complete this in 3 parts: 
1. Build our electric vehicle
2. Add code to make it move
3. Modify the code for our electric vehicle to learn how it works
4. Complete a short challenge to improve your electric vehicle

   ![projectrender](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-render.png)

## Build Step 1 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs1edit.png) 

## Build Step 2 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs2.png) 

## Build Step 3 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs3.png) 

## Build Step 3B @showdialog 
![sbs3b](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs3b.png) 

## Build Step 4 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs4.png) 

## Build Step 5 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs5.png) 

## Build Step 6 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs6.png) 

## Build Step 7 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs7.png) 

## Build Step 8 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs8.png) 

## Build Step 9 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs9.png) 

## Build Step 10 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs10.png) 

## Build Step 11 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs11.png) 

## Build Step 12 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs12.png) 

## Build Step 13 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs13.png) 

## Build Step 14 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs14.png) 

## Build Step 15 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs15.png) 

## Build Step 16 @showdialog 
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr11-electriccar-sbs16.png) 

## Activity 2: Code your Project @showdialog 
We need to connect our project to the computer to make it come to life with code!
The code will be the instructions that tell our micro:bit what to do. 

## Code Step 1 @showdialog
 Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" width="400">


## Code Step 2 @showdialog
Click three dots beside ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Code  Step 3 
Next, click the ``|Download|`` button to download the blank project to start up the simulators. 

## Activity 3: Modify your Project @showdialog  
We are now ready to modify our electric vehicle project. Follow the instructions at the top of the screen. 
When you're ready for more information, click *'Tell me more!'* <br>
After each change to the code, you will need to download the updated code to your project.

## Modify Step 1 
In this project, we use the sonar sensor to detect obstacles in the path of our electric vehicle. 
Take a look at the code in the workspace below. What do you think will happen when there's an obstacle? Make a prediction!

~hint  Tell me More!
- The sonar sensor works similarly to how bats find their way around. It sends out sound waves and checks how long they take to bounce back after hitting an object.
- Depending on what the sensor picks up, our electric vehicle can decide to keep going, slow down, or turn to avoid hitting something.
hint~
  
## Modify Step 2 

The code below directs the electric car to turn 15 degrees when it encounters an obstacle, controlled by the  ``||fwdMotors:Turn 0°||`` block.
Can you identify the type of block we use to make this happen?

~hint Tell me More 
- We are adding a decision-making point into the code. What kind of block allows us to do that?
hint~
