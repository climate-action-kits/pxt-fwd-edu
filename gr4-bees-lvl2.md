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

## Coding Step 5 
Go to the ``||Variables:Variables||`` drawer and click 'Make a Variable'. Call your ``||Variables:bugVisits||``.

~hint Why did we do this
- You will now see that we have new code blocks available to control our variable
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

## Coding Step 6 
Click ``||Variables:Variables||``, drag and drop ``||variables:set bugVisits to 0||`` block inside the ``||basic:on start||`` above the ``||basic:show number||`` block. 

```blocks
let bugvisits = 0
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Coding Step 7 
Click ``||Variables:Variables||``, drag and drop ``||variables:set bugVisits to 0||`` to replace the 0 inside the ``||basic:show number||`` block. 

~hint Why did we do that? 
- Now the value of the 'bugVisits' variable will be shown on the micro:bit LEDs
  hint~
  
```blocks
let bugvisits = 0
basic.showNumber(bugvisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Coding Step 8 
We have now set up our code to display the value of ``||Variables:bugVisits||`` when our code starts up. But we want this number to update and show with every visit. To do this, we need to add that same ``||basic:show number||`` and ``||Variables:bugVisits||`` code to the Forever block. 

~hint What does this mean? 
- Instead of something just happening once, on start, we want it to happen the whole time 
- The Forever block is a loop, meaning it will happen over and over again, forever, while our code is on
hint~ 

```blocks
let bugvisits = 0
basic.showNumber(bugvisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Coding Step 9 
Click ``||basic||`` , drag and drop ``||basic:show number||`` block under the first ``||fwdSensors:set all ledRing LEDs to||`` block within the ``||basic:forever||`` block. 

~hint Why did we do this?
- This will allow us to display the 'bugVisits' number on the micro:bit LEDs every time the Touch Sensor is pressed
- hint~
- 
```blocks
let bugvisits = 0
basic.showNumber(bugvisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.showNumber(0)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Coding Step 10 

Click ``||Variables:Variables||``, drag and drop ``||Variables:bugVisits||`` to replace the 0 inside the ``||basic:show number||`` block.  

~hint Why did we do this?
- Now the value of the 'bugVisits' variable will be shown on the micro:bit LEDs
 hint~
  
```blocks
let bugvisits = 0
basic.showNumber(bugvisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.showNumber(bugvisits)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Coding Step 11 
Click the ``|download|`` button to download the code for your project.
![downloadbuttongif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp) 

## Coding 12 @showdialog 
Try testing your project in real-life! This is what it should look like. (missing asset) 

## Coding Step 13 
Congratulations on finishing your coding project! 
In the next step, you can click the ``|done|``  button to finish the tutorial.



