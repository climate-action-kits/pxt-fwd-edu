# Monitoring Bees and Pollination with a Bug Counter

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```
## Activity 1: Building Your Project @showdialog 
Welcome to Monitoring Bees and Pollination with a Bug Counter! 
In this tutorial, we will…
Build our project with the Climate Action Kit
Connect our project to the computer
Code our project to make it interactive

## Building Step 1 

## Building Step 2 

## Building Step 3 

## Building Step 5

## Building Step 6 

## Building Step 7 

## Activity 2 Coding Set up @showdialog
 Coding Set Up Step 1 
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
![plugin](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp) 

## Coding Set up Step 2 @showhint
Click three dots beside ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![downloadgif](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Coding Set up Step 3 
Next, click the ``|Download|`` button to download the blank project to start up the simulators. 

## Coding Set up Step 4 @showdialog 
This is how the simulators should look after a successful download. You can see the Dial, and the Servo Motors alongside the Pump.
![initialdownload](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif) 

## Coding Set up Step 5 @showhint
Look below the @boardname @simulator to see the Climate Action kit Breakout Board and the connected sensors.
Try turning the Dial on your project, the virtual  simulator will react to it.
![simulator](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif) 

## Coding Set up Step 6  @showhint
Start coding! Follow the steps at the top of the screen for your instructions. Click the lightbulb icon for a hint if you get stuck.

## Activity 3:Coding Your Project Step 1 
Take a look at our starter code in the workspace below. We have three groups of code blocks. 

```template
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
}) 
```

## Coding Step 2 
These two LED code blocks are rapped inside of another block called ``||logic:if true then||`` 

~hint What does this mean?
- This block is called a conditional statement
- The code inside only happens when this condition is met
  hint~
  
```blocks
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Coding Step 3 
The condition for the ``||logic:if true then||`` statement is when a ``||fwdSensors:on touch down||`` occurs. 

~hint What does this mean?
- This means the code inside of the 'if/then' statement will only occur if the Touch Sensor is pressed
  hint~

  ```blocks
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Coding Step 4 
Now we need to create something to keep track of the number of 'bee' visits. This is called a 'Variable'.

~hint What does this mean?
- A 'variable' is a special code word that holds a value
- When we call the 'variable' code word, it will tell us what number it's holding
  hint~

```blocks
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
