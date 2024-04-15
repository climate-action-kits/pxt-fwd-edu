# Powering the Future with Wind Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1: Building Your Project @showdialog
Welcome to Powering the Future with Wind Energy Level 1. For this project, we will use the Dial to trigger different symbols to show on the micro:bit LEDs. Here's what it will look like. 

![Step by step](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind-lvl1ProjectRender.webp) 


## Build Step 1 @showdialog 
![Step by step](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind-lvl1sbs1.png)
  

## Build Step 2 @showdialog 
![Step by step](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind-lvl1sbs2.png) 

## Build Step 3 @showdialog
![Step by step](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind-lvl1sbs3.png) 

## Build Step 4 @showdialog
![Step byStep](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind-lvl1sbs4.png)

## Build Step 5 @showdialog
![Step by Step](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind-lvl1sbs5.png)  

## Activity 2 Coding Set up @showdialog
## Step 1 
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
![breakout board](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl1-pluganim.webp)

## Step 2 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Step 3 
Next, click the ``|Download|`` button to download the blank project to start-up the simulators. 

## Step 4 @showdialog 
This is how the simulators should look after a successful download. You can see the Dial, and the Servo Motors along side the Pump.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif)

## Step 5 @showhint
Look below the @boardname@ simulator to see the Climate Action kit Breakout Board and the connected sensors.
Try turning the Dial on your project, the virtual  simulator will react to it.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 6 @showhint
Start coding! Follow the steps at the top of the screen for your instructions. Click the lightbulb icon for a hint if you get stuck. 

## Activity 3 Coding Your Project @showdialog
Coding your Project

## Step 1 
Look at our coding workspace below. We have three sets of code blocks here. What do you notice is different about each of the ``||fwdSensors:on dial1 turned difference||`` blocks?  

~hint What does this mean?
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

## Step 2 
What do you notice about each one of the ``||show icon||`` blocks in our code?

~hint What does this mean?
- Each block will display a different icon on the mirco:bit LED
- One icon for each direction
hint~

## Step 3 
Try changing the icons in the ``||basic:show icon||`` blocks for yourself! Click the dropdown arrow, and choose any pattern. 

~hint What does this mean?
- Make sure you choose a different for each one. 
hint~ 

## Step 4 
Click the ``|Download|`` button to download the code for your project. 

## Step 5 
Try testing your project in real life! This is what it should look like. What happens to the number when you turn left? Right?

## Step 6 @showdialog 
Congratulations on finishing your coding project! 
In the next step, you can click the ``|Done|`` button to finish the tutorial. 






