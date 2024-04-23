# The Powerful Force of Wind 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1: Building Your Project @showdialog
Let's build a wind turbine!
We are going to do this in 4 parts:
1. Build our wind turbine
2. Add starter code to make it move
3. Tinker with our code to learn how it works
4. Complete a small coding challenge

![Step by step](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr5-wind-lvl1-render.webp) 


## Building Step 1 @showdialog 

![wind](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs1.png)

## Building Step 2 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs2.png) 

## Building Step 3 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs3.png). 

## Building Step 4 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs4.png) 

## Building Step 5 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs5.png) 

## Building Step 6 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs6.png)

## Building Step 7 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs7.png)

## Building Step 8 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs8.png)

## Building Step 9 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs9.png)

## Building Step 10 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs10.png)

## Building Step 11 @showdialog 
![stepbystep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs11.png)

## Activity 2: Coding @showdialog
We need to connect our project to the computer to make it come to life with code!
The code will be the instructions that tell our micro:bit what to do.
```template
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```

## Coding Step 1 @showdialog
 Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
![breakout board](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl1-pluganim.webp)

## Coding Step 2 
Click three dots beside the ``|Download|`` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Coding Step 3 
Next, click the ``|Download|`` button to download code to your project.

## Activity 3: Tinkering @showdialog 
We are ready to tinker with our wind turbine! Follow the instructions at the top of the screen. When you are ready for more information, click 'Tell me more!'
After each change, you will need to flash your updated code to your project.

## Tinkering Step 1
The code below will make our wind turbine turn. Let's learn some more.  What happens when you make the number in the ``||fwdMotors:set leftServo to 50 %||`` bigger? Try it!

~hint Tell me more?
- The blue block represents the output or result of our code. When we make the number bigger, the turbine spins faster!
-  hint~

## Tinkering Step 2
What happens when you make the number in the ``||fwdMotors:set leftServo to 50 %||`` smaller? Try it!

~hint Tell me more!
- When we make the number smaller, the turbine spins more slowly.
hint~ 

## Tinkering Step 3 
What happens when you make the number in the ``||fwdMotors:set leftServo to 50 %||`` negative? Try it!

~hint Tell me more! 
- When you add a '-' sign to the number, the turbine spins in the opposite direction.
  hint~

## Tinkering Step 4 
What happens when you change the direction of the arrow in the ``||fwdSensors:on dial1 turned difference||``? Try it!

~hint Tell me more! 
- The green block represents the input of the code. This shows us how we need to interact with our project in order to make something happen. 
- When we change the direction arrow, we will now have to turn the dial in the opposite direction to trigger our code/output.
  hint~

## Tinkering Step 5:Challenge time!
Can you add another event to your code to make the wind turbine turn in both directions?"

## Congratulations! @showdialog 

You've completed the activity! 

## Reflection @showdialog 
Think about something about this project that challenged you. How did you overcome the challenge? How did that make you feel?

## Finished! @showdialog 
In the next step, you can click the `|done|` button to finish the tutorial.

