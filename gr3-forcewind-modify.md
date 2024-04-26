# The Powerful Force of Wind 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1: Build Your Project @showdialog
Let's build a wind turbine!
We are going to do this in 4 parts:
1. Build our wind turbine
2. Add starter code to make it move
3. Modify our code to learn how it works
4. Complete a small coding challenge

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
We need to connect our project to the computer to make it come to life with code!
The code will be the instructions that tell our micro:bit what to do.

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```

## Code Step 1 @showdialog
 Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
![breakout board](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp)

## Code Step 2 
Click three dots beside the ``|Download|`` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Code Step 3 
Next, click the ``|Download|`` button to download code to your project.

## Activity 3: Modify your Project @showdialog 
We are ready to modify our wind turbine! Follow the instructions at the top of the screen. When you are ready for more information, click 'Tell me more!'
After each change, you will need to download your updated code to your project.

## Modify Step 1

The code below will make our wind turbine turn. Let's test it out first. What happens when you turn the dial clockwise? What happens when you push the dial down?

~hint Tell me more!
- The green building block starts spinning when you turn the dial. It stops when you press the dial-down.
  hint~ 


## Modify Step 2 
What happens when you make the number in the  ``||fwdMotors:set leftServo to 50 %||`` bigger? Try changing it to 100%!

~hint Tell me more!
- The blue block represents the output or result of our code. When we make the number bigger, the turbine spins faster!
- hint~
  
## Modify Step 3
What happens when you make the number in  ``||fwdMotors:set leftServo to 50 %||`` smaller? Try it!

~hint Tell me more!
- When we make the number smaller, the turbine spins more slowly.
hint~ 

## Modify Step 3 
What happens when you make the number in  ``||fwdMotors:set leftServo to 50 %||`` negative? Try it!

~hint Tell me more! 
- When you add a '-' sign to the number, the turbine spins in the opposite direction.
  hint~

## Modify Step 4 
What happens when you change the direction of the arrow in  ``||fwdSensors:on dial1 turned difference||``? Try it!

~hint Tell me more! 
- The green block represents the input of the code. This shows us how we need to interact with our project in order to make something happen. 
- When we change the direction arrow, we will now have to turn the dial in the opposite direction to trigger our code/output.
  hint~

## Challenge time!
Can you add another event to your code to make the wind turbine turn in both directions? Think about it!

## Challenge Step 1
The first thing we want to happen is to make the Wind Turbine turn in another direction. Click ``||fwdSensors:Sensors||`` and drag and drop  ``||fwdMotors:set leftServo to 50 %||`` into the workspace.

~hint Why did we do that?
- This is the output we want to happen 
hint~

```blocks 
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})

```

## Challenge Step 2 
Now we need to tell the code when we want this to happen, this is called Input. Click   ``||fwdMotors:Motors||`` drag and drop ``||fwdSensors:on dial1 turned difference||`` into the workspace.  

~hint Why did we do that?
- This is the block that is going to trigger the turning of the Wind turbine.
 hint~ 

## Challenge Step 3 

Next, how can you use these two blocks together to make the wind turbine turn in the opposite direction? 

## Challenge Step 4 
Did you get it right? Check the lightbulb before clicking the ``|download|`` button to download the code to your project.

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(-50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})

```

## Congratulations! @showdialog 

You've completed the activity! 

## Reflection @showdialog 
Think about something about this project that challenged you. How did you overcome the challenge? How did that make you feel?

## Finished! @showdialog 
In the next step, you can click the `|Done|` button to finish the tutorial.

