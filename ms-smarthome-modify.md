# Forward Education Designing Sustainable Smart Homes - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        Temperature += -1
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 1) {
        Temperature += 1
        basic.showArrow(ArrowNames.North)
    }
    basic.showNumber(Temperature)
})
input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    radio.sendString(openDoor)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.leftServo.fwdGetAngle() < 100) {
            fwdMotors.leftServo.fwdSetAngle(100)
        } else {
            fwdMotors.leftServo.fwdSetAngle(0)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})

fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})

let Temperature = 0
let openDoor = ""
openDoor = "openDoor"
Temperature = 17
fwdMotors.leftServo.fwdSetAngle(0)
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(Temperature)
})
```

## Activity 1: Build Your Project @showdialog
Let's build an automated smart home model to reduce energy consumption! We are going to do this in three parts:  
1. **Build** our automated smart home
2. **Add code** to bring our project to life  
3. **Modify** our project to learn about other sensors  
4. Apply what we learned with a small **challenge**

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
Click the ``|Download|`` button to download the starter code to your project on **both** of the micro:bits in your project.

Place one micro:bit into the **breakout board in the model**, and hold one micro:bit **in your hand** throughout this project.

## Activity 3: Modify Your Project @showdialog
We have an automated smart home model with a remote thermostat and a door that unlocks. Let’s explore how to optimize our project by **modifying** our code!

As you go through the next steps:

* Use the instructions at the top of the screen to **modify** your code.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb**!

## Modify Step 1
Think about how smart homes in our lesson worked. 

What do you think that the micro:bit in your **model** represents inside of your house? 

What do you think that the micro:bit in your hand represents? 

~hint Tell Me More! 

* The micro:bit in your **model** represents a smart thermostat in our house. 

* The micro:bit in your **hand** represents a phone or smart app that can control automated functions in our house. 

* These micro:bits communicate using **radio waves**, similar to how most smart apps control lights in a house. 

hint~ 

## Modify Step 2
Think back to our lesson about wireless communication. Which blocks do you think the two micro:bits use to communicate with each other using **radio waves**? 

~hint Tell Me More!

The ``||Radio:radio set group||`` makes sure that both micro:bits are communicating on the same radio channel.

``||Radio:radio send||`` number or string blocks **send** a message from the micro:bit you pressed a button on, to the second micro:bit.

The ``||Radio:radio received||`` number or string blocks **listen** for instructions from the micro:bit you pressed a button on.

hint~

```blocks
// @highlight
radio.setGroup(1)

input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
   // @highlight
    radio.sendNumber(-1)
})

// @highlight
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        basic.showArrow(ArrowNames.South)
        Temperature += -1
    }
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.North)
        Temperature += 1
    }
    basic.showNumber(Temperature)
})
```

## Modify Step 3
Let’s test out our automated smart home model and see how it works! 

Look at the difference in the code when we press **A**, versus when we press **B** on either of the micro:bits. 

Why do you think there are positive and negative numbers in the ``||variables:change Temperature by||`` blocks? 

~hint Tell Me More! 

When you press the **A** button on either micro:bit, the ``||variables:Temperature||`` variable lowers by 1. The thermostat is now set to **1 degree Celsius cooler.**

When you press the **B** button on either micro:bit, the ``||variables:Temperature||`` variable raises by 1. The thermostat is now set to **1 degree Celsius warmer.**

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        Temperature += -1
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 1) {
        Temperature += 1
        basic.showArrow(ArrowNames.North)
    }
    basic.showNumber(Temperature)
})
basic.forever(function () {
    basic.showNumber(Temperature)
})
```
## Modify Step 4

What do you think will happen if we change the number in the ``||variables:change Temperature by||`` block from 1 to 5? 

~hint Tell Me More!

Pressing **A** or **B** now increases and decreases the thermostat by **5 degrees Celsius** each time! 

Remember to ``|download|`` your code to **both** of your micro:bits when you're ready to test your code.

hint~

```blocks 
input.onButtonPressed(Button.A, function () {
    // @highlight
    Temperature += -5
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})
input.onButtonPressed(Button.B, function () {
    // @highlight
    Temperature += 5
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        // @highlight        
        Temperature += -5
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 1) {
        // @highlight
        Temperature += 5
        basic.showArrow(ArrowNames.North)
    }
    basic.showNumber(Temperature)
})
```

## Modify Step 5
Now that you understand how to adjust the **thermostat** using both micro:bits, which code blocks do you think **unlock the door** and **turns on the lights**? 

~hint Tell Me More! 

Pressing **A+B** on the **micro:bit in your hand** unlocks the door and turns on the lights remotely, like waking up in the morning, or getting home for the day! 

If the door is locked, the ``||fwdMotors:leftServo||`` turns to 100 degrees, so we can slide open the door. 

At the same time, the ``||fwdSensors:LED ring||`` turns on so we can see inside our house!

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    radio.sendString(openDoor)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.leftServo.fwdGetAngle() < 100) {
            fwdMotors.leftServo.fwdSetAngle(100)
        } else {
            fwdMotors.leftServo.fwdSetAngle(0)
        }
    }
})
```

## Modify Step 6

Let's add the ability to unlock the door using the ``||fwdSensors:touch||`` sensor on our model!

There's an empty ``||fwdSensors:on touch down||`` event in the code space, what code do you think you should add to control the door unlocking? 

~hint Tell Me More! 

Right-click and select "duplicate" on the ``||logic:if leftservo angle < 100||`` statement. 

Next, drag it into the empty ``||fwdSensors: on touch down||`` event.

Remember to ``|download|`` your code onto **both** of your micro:bits when you're ready to test out your change! 

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        // @highlight
        if (fwdMotors.leftServo.fwdGetAngle() < 100) {
            fwdMotors.leftServo.fwdSetAngle(100)
        } else {
            fwdMotors.leftServo.fwdSetAngle(0)
        }
    }
})

// @highlight
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    if (fwdMotors.leftServo.fwdGetAngle() < 100) {
        fwdMotors.leftServo.fwdSetAngle(100)
    } else {
        fwdMotors.leftServo.fwdSetAngle(0)
    }
})
```
## Activity 4: Challenge @showdialog
Now that we have **modified** our code to understand how the automated smart home model works, we will complete a small challenge! 

## Challenge Step 1
To make our home more sustainable, we can **sense** how much sunlight is coming through the windows to help us adjust the **lights** inside our house automatically! 

What type of sensor would we need to add to our project? 

~hint Tell Me More! 

The ``||fwdSensors:solar||`` sensor can detect light in a room! 

hint~

```block
fwdSensors.solar1.fwdIsLightLevelPastThreshold(,fwdSensors.ThresholdDirection.Under)
```
## Challenge Step 2
Let's think about the functionality we want to add to our model: 

1. When it is **night time** our ``||fwdSensors:LED light||`` will turn on all the pixels in the ring.

2. When it is **cloudy**, ``||fwdSensors:LED light||`` will turn on half of the pixels.

3. When it is **sunny**, ``||fwdSensors:LED light||`` will turn off all of the pixels. 

What type of block could you add to your code to satisfy these **conditions**? 

~hint Tell Me More! 

A ``||logic:conditional statement||``! Look in the logic drawer for the "if/else" block and drag it below the ``||basic:showNumber||`` block in the ``||basic:forever||`` loop. 

Click the + button below your ``||logic:if/else||`` block to add another condition to your code.

hint~

```blocks
basic.forever(function () {
    basic.showNumber(Temperature)
    // @highlight
    if (true) {
    } else if (true){} 
    else {
    }
})
``` 

## Challenge Step 3
If it's dark outside, we'll need to turn on all of the lights in our room so we can see! 

Which blocks do you need to add to your code to create the following condition? 

If the sunlight is **under 25%**, turn **all of the pixels on**. 

~hint Tell Me More! 

You'll need a ``||fwdSensors:solar||`` block to detect if the sunlight is **under 25%**.

You'll need a ``||fwdSensors:set all ledRing LEDs||`` block to turn all the LEDs on simultaneously.

Pick any LED colour; we've picked white for this project.

hint~ 

```blocks
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(25, fwdSensors.ThresholdDirection.Under)) {
        // @highlight
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    }
    else if(true) {}
    else {
    }
```

## Challenge Step 4
If it's cloudy outside, we have some sunlight, but we may need to turn our lights on dimly. 

Which blocks do you need to add to your code to create the following condition? 

If the sunlight is **under 50%**, turn **half of the pixels on**.

~hint Tell Me More! 

You'll need a ``||fwdSensors:solar||`` block to detect if the sunlight is **under 50%**.

You'll need four ``||fwdSensors:set ledRing to||`` blocks to turn four of the eight LED pixels on.

Remember, the LED pixels count from 0-7! 

hint~ 

```blocks
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(25, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    }
    else if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(50, fwdSensors.ThresholdDirection.Under)) {
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xffffff)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xffffff)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(2, 0xffffff)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(3, 0xffffff)
    } else {
    }
```

## Challenge Step 5
If it's sunny outside, we don't need to turn the lights on in our house at all! 

Which block will you need to add to your code to create the following condition? 

Otherwise, turn **all of the pixels off**

~hint Tell Me More! 

You'll need a ``||fwdSensors:set all ledRing LEDs||`` block to turn all the LEDs off simultaneously.

Pick the colour black to turn off the LEDs on your project. 

``|Download|`` your code to **both** of your micro:bits when you're ready to test your automated lighting system! 

hint~ 

```blocks
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(25, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(50, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xffffff)
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xffffff)
        fwdSensors.ledRing.fwdSetPixelColour(2, 0xffffff)
        fwdSensors.ledRing.fwdSetPixelColour(3, 0xffffff)
    } 
    else {
        // @highlight
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```
## Challenge Step 6
What do you notice happens to the ``||fwdSensors:LED ring||`` when you cover the ``||fwdSensors:solar||`` sensor with your hand? 

What happens to the ``||fwdSensors:LED ring||`` when you move your project to another room? 

~hint Tell Me More! 

When you cover the ``||fwdSensors:solar||`` sensor with your hand, there's less light detected by the sensor, and the ``||fwdSensors:LED ring||`` will turn on! 

When you move your project to another room, the ``||fwdSensors:LED ring||`` may turn on or off depending on the difference in lighting.

hint~

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog

Do you think a ``||variables:change Temperature by||`` 1, or 5 degrees Celsius is more eco-friendly? Share your reasoning. 

What other features might you adapt to help make your automated smart home more sustainable?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.