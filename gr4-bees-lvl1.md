# Protecting Pollinators with a Bee Counter
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```

## Activity 1 Building your Project @showdialog 
Welcome to the Monitoring Bees and pollination with a bug counter. 
For this project, we will use the Touch Sensor to detect when a 'bee' has landed on our project.  The LED light will turn on when a 'bee' visits the project.

## Building Step 1 @showdialog 
![beelvl1sbs1](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr4-bees-lvl1-sbs1.png) 

## Building Step 2 @showdialog 
![beelvl1sbs2](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr4-bees-lvl1-sbs2.png) 

## Building Step 3  @showdialog 
![beeslvl1sbs3[]()](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr4-bees-lvl1-sbs3.png)

## Building Step 4 @showdialog 
![beeslvl1sbs4](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr4-bees-lvl1-sbs4.png)

## Building Step 5 @showdialog 
![beeslvl1sbs5](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr4-bees-lvl1-sbs5.png)

## Building Step 6 @showdialog 
![beeslvl1sbs6](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/gr4-bees-lvl1-sbs6.png) 

## Activity 2: Coding Set up @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 

![breakout board](ttps://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/pluganim.webp)

## Step 1 @showhint
Click three dots beside ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Step 2 @showhint
Click three dots beside ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

## Step 3 
Next, click the ``|Download|`` button to download the blank project to start up the simulators. 

## Step 4 @showdialog 
This is how the simulators should look after a successful download. You can see the Dial, and the Servo Motors alongside the Pump.
![download](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif) 

## Step 5 @showhint
Look below the @boardname @simulator to see the Climate Action kit Breakout Board and the connected sensors.
Try clicking the lights on the virtual simulator for the LED Light. What happens? Can you make it different colours?

## Step 6 @showhint
Start coding! Follow the steps at the top of the screen for your instructions. Click the lightbulb icon for a hint if you get stuck.

```package 
basic.forever(function () {
    if (true) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Activity 3 Start Coding  
Start coding! Follow the steps at the top of the screen for your instructions. Click the lightbulb icon for a hint if you get stuck. 

```blocks 
basic.forever(function () {
    if (true) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Coding Step 1 
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


## Coding Step 2 
These two LED code blocks are wrapped inside of another block called ``||logic:if true then||``.  

~hint WHat does this mean?
- This block is called a conditional statement
- The Code inside only happens if this condition is met

```blocks
basic.forever(function () {
    if (true) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        basic.pause(500)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Coding Step 3 
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
## Coding Step 4
Now, let's change the LED Light colour. Go to the first ``||fwdSensors:set all ledRing LEDs to||`` block and click on the colour bubble. Choose any colour you would like. Make sure you leave the last  black. 

~hint Why did we do that?
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
## Coding Step 5 
Click the `|Download|` button to download the code for your project.

## Coding Step 6 @showdialog 
Try testing your project in real life! This is what it should look like.  


## Coding Step 7 @showdialog 
Congratulations on finishing your coding project! 
In the next step, you can click the ``|done|`` button to finish the tutorial.




