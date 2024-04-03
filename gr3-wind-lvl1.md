# Powering the Future with Wind Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1 Bulding your Project
Welcome to Powering the Future with Wind Energy Level 1!

## Welcome @showdialog
For this project, we will use the Dial to trigger different symbols to show on the micro:bit LEDs. Here's what it will look like. 

## Step 1 @showdialog 
Step  

## Step 2 @showdialog 
Step 

## Step 3 @showdialog
Step 

## Step 4 @showdialog
Step 

## Step 5 @showdialog
Step 

## Activity 2 @showdialog

## Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 2 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 3 @showhint
Start coding! Follow the steps at the top of the screen for your instructions. Click the lightbulb icon for a hint if you get stuck. 

## Step 4 @showdialog
Click the three dots beside [Download] button, and click on Connect Device. Next, follow the steps to pair your micro:bit. 

## Step 5 @showdialog 
Next, click the [Download] button to download the blank project to start-up the simulators. 

## Step 6 @showdialog 
This is how the simulators should look after a successful download. You can see the Dial, and the Servo Motors along side the Pump.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif)

## Step 7 @showhint
Look below the @boardname@ simulator to see the Climate Action kit Breakout Board and the connected sensors.
Try turning the Dial on your project, the virtual  simulator will react to it.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 8 
Look at our coding workshop below. We have three sets of code blocks here. What do you notice is different about each of the ``||fwdSensors:on dial1 turned difference||`` blocks?  

~hint
- One block is for clockwise direction
- One block is for counterclockwise 
- One is for pushing down on the dial
hint~

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    basic.showIcon(IconNames.No)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    basic.showIcon(IconNames.SmallSquare)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    basic.showIcon(IconNames.Diamond)
})
```

## Step 9 
What do you notice about each one of the [show icon] blocks in our code?

~hint 
- Each block will display a different incon on the mirco:bit LED
- One icon for each direction
hint~

## Step 10 
Try changing the icons in the ``||basic:show icon||`` blocks for yourself! Click the dropdown arrow, and choose any pattern. Click the drop down arrow and choose any pattern. 
~hint 
- Make sure you choose a different for each one. 
hint~ 

## Step 10 
Click the [Download] button to download the code to your project. 

## Step 11 
Try testing your project in real-life! This is what it should look like. 

## Step 12 @showdialog 
Congratulations on finishing your coding project! 

## Step 13 @showdialog 
In the next step, you can click the [Done] button to finish the tutorial. 






