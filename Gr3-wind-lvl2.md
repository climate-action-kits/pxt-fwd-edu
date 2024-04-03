# Powering the Future with Wind Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 
## Activity 1 Building your Protoype @showdialog 
Welcome to the Level 2 Wind Turbine Project! 

## Step 1 @showdialog 

## Step 2 @showdialog 

## Step 3 @showdialog 

## Step 4 @showdialog 

## Step 5 @showdialog 

## Step 6 @showdialog 

## Step 7 @showdialog 

## Step 8 @showdialog 

## Step 9 @showdialog 

## Actitity 2 Coding your Prototype @showdialog 
Welcome to the coding section!

```template 
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
	})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
	})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
	})
```
## Step 1 @showdialog 
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 

## Step 2 @showdialog 
Start coding! Follow the steps at the top of the screen for your instructions. Click the lightbulb icon for a hint if you get stuck. 

## Step 3 
Click the three dots beside [Download] button, and click on Connect Device. Next, follow the steps to pair your micro:bit. 

## Step 4 
Next, click the [Download] button to download the blank project to start-up the simulators. 

## Step 5 
This is how the simulators should look after a successful pairing and download. 

## Step 6 
Look below the virtual micro:bit on the left to see the virtual robotic components - these are our simulators! Try turning the Dial on your project in real-life. The virtual simulator Dial will react to it! 

## Step 7 
Try clicking the on/off button on the virtual simulator for the first Servo Motor (labelled Left). What happens? Can you use the slider to change the speed? 

## Time to start Coding 

## Step 8 
Look at our coding workspace below. We have three sets of code blocks. What do you notice is different about each of the ``||fwdSensors:on dial1 turned difference||`` blocks?
~hint Click here 
- One block is for clockwise direction
- One block is for counterclockwise 
- One is for pushing down on the dial
hint~

## Step 9 
These ``||fwdSensors:on dial1 turned difference||`` blocks are called Inputs. They wait for a specific action, in our case, a Dial turned. Once triggered, the code that's inside will take place.

## Step 10 
Let's add an action inside of our input blocks. Click on the ``||fwdMotors:Motors||`` drawers and find the 'Servo (Continuous)' section. Drag a ``||fwdMotors:set leftServo to 50 %||`` block onto the workspace.

```blocks 
fwdMotors.leftServo.fwdSetSpeed(50) 
``` 
## Step 11 
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
## Step 12 
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
## Step 13 
Change the speed of last ``||fwdMotors:set leftServo to 50 %||`` to to be - 50% 

~hint Why did we do that? 
- Making the speed a negative value will cause the Motor to go backwards 
- This way, we have one Motor block that goes clockwise, and one that goes counterclockwise
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
## Step 14 
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
## Step 15 
Now, change the speed of that ``||fwdMotors:set leftServo to 50 %||`` block to be 0%. 

~hint Why did we did that?  
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
## Step 16 
Click the [Download] button to download the code to your project. 

## Step 17 @showdialog 
Congratulations on finishing your coding prototype! Try testiny our project in real0life! This is what your finish prototype should look like! 

# Step 18 
In the next step, you can click the [Done] button to finish the tutorial. This will end the tutorial and keep your code! 



