# Forward Education Optimizing Waste Management with Smart Garbage Bins - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
input.onButtonPressed(Button.A, function () {
    fwdMotors.rightServo.fwdSetAngle(0)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.rightServo.fwdSetAngle(60)
})
fwdMotors.rightServo.fwdSetAngle(0)
let fillLevel = 0
basic.forever(function () {
    led.plotBarGraph(
    fillLevel,
    100
    )
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.02, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fillLevel = 75
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        fillLevel = 0
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build an automated Smart Garbage Bin to optimize waste collection routes! We are going to do this in three parts:  
1. **Build** our Smart Garbage Bin
2. **Add code** to bring our project to life  
3. **Modify** our project to learn about other sensors

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bits what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 60%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Click the ``|Download|`` button to download the starter code to the micro:bit.

## Activity 3: Modify Your Project @showdialog
We have a Smart Garbage Bin that **senses** how much waste is in the container. Let’s explore how to optimize our project by **modifying** our code!

As you go through the next steps:

* Use the instructions at the top of the screen to **modify** your code.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb**!

## Modify Step 1
Think about how smart garbage bins in our lesson worked. 

What do you think that the building blocks and electronic components in your **model** represents?

~hint Tell Me More! 

* The **building blocks** represent the container to hold waste.

* The **servo motor** opens and closes the waste container to keep it away from pests or environmental elements like wind and rain.

* The **sonar sensor** measures the percentage of waste in the container.

* The **micro:bit display** and the **LED ring** communicate how full the container is. 

* These components help to communicate to **Waste Management Specialists** if the bin should be emptied during their waste collection route. 

hint~ 

## Modify Step 2

Let's test the functionality of our **smart garbage bin**!

Press the **B** button on the micro:bit. What do you notice happens? 

~hint Tell Me More! 

The **B** button is an **input** that triggers the instructions **"set right servo motor to 60 degrees"** 

When the servo motor rotates, the garbage bin is open! 

hint~

```blocks
input.onButtonPressed(Button.B, function () {
// @highlight   
 fwdMotors.rightServo.fwdSetAngle(60)
})
```

## Modify Step 3

Now let's test how the smart garbage bin **senses** how full it is. 

~hint Tell Me More! 

The **sonar sensor** measures the **distance between** the waste and the top of the smart garbage bin. 

If there is **less than 2 cm** of space between the sonar sensor and the waste in the smart garbage bin, the bin is 75% full! 
 
hint~

```blocks
basic.forever(function () {
      if (fwdSensors.sonar1.fwdDistancePastThreshold(0.02, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        //@highlight
        fillLevel = 75
 
```

## Modify Step 4
Let's add more specific readings to measure how full our Smart Garbage Bin is! 