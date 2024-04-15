# Powering the Future with Wind Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 
## Activity 1: Building your Protoype @showdialog 
Welcome to the Level 2 Wind Turbine Project! In this project, you will use the dial to control the servo motor! 
In this tutorial, we will…
Build our project with the Climate Action Kit
Connect our project to the computer
Code our project to make it interactive

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

## Activity 2: Coding set up @showdialog  
Step 1
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 

![plugin](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl1-pluganim.webp) 

```template 
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
	})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
	})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
	})
```
## Step 2 @showhint
Click three dots beside ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

## Step 3 
Next, click the ``|Download|`` button to download the blank project to start-up the simulators. 

## Step 4 @showdialog 
This is how the simulators should look after a successful download. You can see the Dial, and the Servo Motors along side the Pump.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif)

## Step 5 @showhint
Look below the @boardname @simulator to see the Climate Action kit Breakout Board and the connected sensors.
Try turning the Dial on your project, the virtual  simulator will react to it.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 6 @showhint
Try clicking the on/off button on the virtual simulator for the first Servo Motor (labelled Left). What happens? Can you use the slider to change the speed? 

## Step 7 @showhint
Start coding! Follow the steps at the top of the screen for your instructions. Click the lightbulb icon for a hint if you get stuck.

## Activity 3 Coding Your Project @showdialog
Coding your Project

## Coding Step 1 
Look at our coding workspace below. We have three sets of code blocks. What do you notice is different about each of the ``||fwdSensors:on dial1 turned difference||`` blocks?

~hint Why did we do that? 
- One block is for clockwise direction
- One block is for counterclockwise 
- One is for pushing down on the dial
hint~

## Coding Step 2 
These ``||fwdSensors:on dial1 turned difference||`` blocks are called Inputs. They wait for a specific action, in our case, a Dial turned. Once triggered, the code that's inside will take place.

## Coding Step 3  
Let's add an action inside of our input blocks. Click on the ``||fwdMotors:Motors||`` drawers and find the 'Servo (Continuous)' section. Drag a ``||fwdMotors:set leftServo to 50 %||`` block onto the workspace.

```blocks 
fwdMotors.leftServo.fwdSetSpeed(50) 
``` 
## Coding Step 4
Place the ``||fwdMotors:set leftServo to 50 %||`` block inside of the first ``||fwdSensors:on dial1 turned difference||`` block. 

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
	
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
	
})
```
## Coding Step 5 
Repeat the previous step to add a ``||fwdMotors:set leftServo to 50 %||`` block inside of the other ``||fwdSensors:on dial1 turned difference||`` block. 
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
	
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```
## Coding Step 6  
Change the speed of last ``||fwdMotors:set leftServo to 50 %||`` to to be - 50% 

~hint Why did we do that? 
- Making the speed a negative value will cause the Motor to go backwards 
- This way, we have one Motor block that goes counterclockwise, and one that goes clockwise
hint~

```blocks 
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
	
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(-50)
})
```
## Coding Step 7 
Drag another ``||fwdMotors:set leftServo to 50 %||`` block into the workspace and add it inside of the ``||fwdSensors:on touch down||`` input block. 

~hint Why did we do that? 
- This input block will be our trigger to stop the Motor
hint~

```blocks 
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(-50)
})
``` 
## Coding Step 8 
Now, change the speed of that ``||fwdMotors:set leftServo to 50 %||`` block to be 0%. 

~hint Why did we do that?  
-  A speed of 0% will stop the motor 
hint~ 

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(-50)
})
```
## Coding Step 9 
Click the ``|Download|`` button to download the code for your project. 
![download](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Coding Step 10  @showdialog 
Congratulations on finishing your coding prototype! Try testing our project in real life! This is what your finished prototype should look like! 
In the next step, you can click the ``|Done|`` button to finish the tutorial. This will end the tutorial and keep your code! 



