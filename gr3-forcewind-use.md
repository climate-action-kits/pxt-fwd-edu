# The Powerful Force of Wind 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1: Building Your Project @showdialog
Let's build a moving wind turbine!
We are going to do this in 3 parts:
1. Build our wind turbine
2. Add code to make it move
3. Play with our wind turbine to learn how it works

![Step by step](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/Jessica-forwardedu-patch-1/tutorial-assets/gr5-wind-lvl1-render.webp) 


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

## Building Step 12 @showdialog 
We need to connect our project to the computer to make it come to life with code! The code will be the instructions that tell our micro: bit what to do.

## Activity 2:Coding Set up @showdialog
## Coding Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
![breakout board](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl1-pluganim.webp)

## Coding Set up Step 2 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Coding Set up Step 3 
Next, click the ``|Download|`` button to download the blank project to start up the simulators. 

## Activity 3: Coding Your Project 
We are ready to play with our wind turbine! Follow the instructions at the top of the screen. When you are ready for more information, click 'Tell me more!'

## Coding Step 1 @showdialog 
Think back to the wind turbine picture. What part of our physical project represents:
The force of the wind? 
The Spinning blades 

```template
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```
## Coding Step 2 
Take a look at the two code blocks below. What do you think they do? Take a guess! 

## Coding Step 3 @showdialog
Let's test it out! We are going to interact with our project and see what happens.

## Coding Step 4 @showdialog 
What do you think will happen when you turn the dial to the right? Try it now!

~hint Tell me more!
- When we turn the dial to the right, the green building block should also turn to the right!
-  This what is called the input and output of the code.
  hint~

## Coding Step 5 
What do you think will happen when you turn the dial to the left? Try it now!

~hint Tell me more! 
-  Nothing happens! There is no code that tells the computer what to do when the dial is turned to the left.
  hint~

## Coding Step 6 
If you have time, try making other changes to your project. What happens if you connect the dial or motor to different parts of the breakout board? 
Remember, make one change at a time so you can learn what is happening.

## Congratulations! @showdialog 
You've completed the activity! Did anything surprise you about this project? 

## Reflection @ Showdialog 
List 2 new things you learned today. What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|``button to finish the tutorial.

