# Protecting Pollinators with a Bee Counter
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```
### @activities 1 

## Activity 1 @showdialog 
Welcome to the Monitoring Bees and pollination with a bug counter. 

## Step 1 
For this project, we will use the Touch Sensor to detect when a 'bee' has landed on our project .  The LED light will turn on when a 'bee' visits the project .

## Step 2 @showdialog 
SBS 1 

## Step 3 @showdialog 
SBS 2 

## Step 4 @showdialog 
SBS 3 

## Step 5 @showdialog 
SBS 4

## Step 6 @showdialog 
SBS 5 

## Step 7 @showdialog 
SBS 6 

## Step 8 @showdialog 
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 


```package 
basic.forever(function () {
    if (true) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Activity 2 Setting up Coding @showdialog 
Start coding! Follow the steps at the top of the screen for your instructions. Click the lightbulb icon for a hint if you get stuck. 

## Step 1 
Click the three dots beside [Download] button, and click on Connect Device. Next, follow the steps to pair your micro:bit. 

## Step 2 
Next, click the [Download] button to download the blank project to start-up the simulators. 

## Step 3 
This is how the simulators should look after a successful pairing and download. 

## Step 4 
Look below the virtual micro:bit on the left to see the virtual robotic components - these are our simulators! Try touching the Touch Sensor on your project in real-life. The virtual simulator Touch Sensor will react to it! 

## Step 5 
Try clicking the lights on the virtual simulator for the LED Light. What happens? Can you make it different colours?

## Activity 3 
Now that we have set up for coding, let's begin to code our project . 

```blocks 
basic.forever(function () {
    if (true) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Step 1 
Take a look at our starter code in the workspace below. We have two ``||fwdSensors:set all ledRing LEDs to||`` with a pause in between. 

```blocks
basic.forever(function () {
    if (true) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```


## Step 2 
These two LED code blocks are rapped inside of another block called ``||logic:if true then||``.  

```blocks
basic.forever(function () {
    if (true) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Step 3 
Click ``||fwdSensors:Sensors||`` find the Touch next section. Drag ``||fwdSensors:on touch down||`` and use it to replace to true condiction in the ``||logic:if true then||`` statment. 

~ hint Why did we do this?
- Now our conditional statement is looking for the condition of the Touch Sensor being pressed
  hint~
  
```blocks
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Step 4
Now, let's change the LED Light colour. Go to the first ``||fwdSensors:set all ledRing LEDs to||`` block and click on the colour bubble. Choose any colour you would like. Make sure you leave the last  black. 

~hint 
- This is how we customize our LED Light colour 
- We left the last LED Light code block as black because we want the LED Light to turn off after the Touch Sensor is pressed
hint~

```blocks
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
``` 
## Step 5 
Click the Download button to download the code to your project.

## Step 6 @showdialog 
Try testing your project in real-life! This is what it should look like.  


## Step 7 @showdialog 
Congratulations on finishing your coding project! 
In the next step, you can click the [Done] button to finish the tutorial.




