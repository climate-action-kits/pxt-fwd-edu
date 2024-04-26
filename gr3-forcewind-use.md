# The Powerful Force of Wind 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1: Build Your Project @showdialog
Let's build a moving wind turbine!
We are going to do this in 3 parts:
1. Build our wind turbine
2. Add code to make it move
3. Use our wind turbine to learn how it works

![Step by step](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr5-wind-lvl1-render.webp) 


## Build Step 1 @showdialog 

![wind](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs1.png)

## Build Step 2 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs2.png) 

## Build Step 3 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs3.png). 

## Build Step 4 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs4.png) 

## Build Step 5 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs5.png) 

## Build Step 6 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs6.png)

## Build Step 7 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs7.png)

## Build Step 8 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs8.png)

## Build Step 9 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs9.png)

## Build Step 10 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs10.png)

## Build Step 11 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs11.png)

## Activity 2: Code your Project @showdialog 
We need to connect our project to the computer to make it come to life with code! The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
![breakout board](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp)

## Code Step 2 @showhint
Click three dots beside ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Code  Step 3 
Next, click the ``|Download|`` button to download the blank project to start up the simulators. 

## Activity 3: Use your Project 
We are ready to use our wind turbine! Follow the instructions at the top of the screen. When you are ready for more information, click 'Tell me more!'

## Use Step 1  
Think back to the wind turbine picture. 
What part of our physical project represents: 
The wind? 
The blades?

~hint Tell me more!
- The dial represents the wind!
- The circular, green building block represents the blades of the wind turbine.
  hint~

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```

## Use Step 2 
Take a look at the code below. What do you think will happen to your project when you start turning? 
Try it now

~hint Tell me more!
- When we turn the dial to clockwise, the green building block should also turn to the right!
-  This is what is called the input and output of the code.
  hint~

## Use Step 3 
What do you think will happen when you turn the dial to the opposite way? Try it now!

~hint Tell me more! 
-  Nothing happens! There is no code that tells the computer what to do when the dial is turned this direction.
  hint~

## Use Step 4 
Look at your code. How do you think we can stop the motor from spinning? Try it!

~hint Tell me more!
- Answer: The motor will stop when you press down on the dial!
hint~

## Use Step 5 
Feeling confident? Can you add more blocks to your Wind turbine and still have it move? Give it a try now!
 Remember to add one thing at a time to see if your Turbine can still move with the extra pieces!

## Congratulations! @showdialog 
You've completed the activity! Did anything surprise you about this project? 

## Reflection @showdialog 
List 2 new things you learned today. What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|`` button to finish the tutorial.

