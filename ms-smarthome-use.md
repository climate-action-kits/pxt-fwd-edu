# Forward Education Designing Sustainable Smart Homes - Use Tutorial

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
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
        } else {
            fwdMotors.leftServo.fwdSetAngle(0)
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})
let Temperature = 0
let openDoor = ""
openDoor = "openDoor"
Temperature = 17
fwdMotors.leftServo.fwdSetAngle(0)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(Temperature)
})
```

## Activity 1: Build Your Project @showdialog
Let's build an automated smart home model to reduce energy consumption! We are going to do this in three parts: 
1. **Build** our automated smart home model   
2. **Add code** to bring our project to life  
3. **Use** your project to understand how they works

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

## Activity 3: Use Your Project @showdialog
Now that we've built our automated smart home model to help reduce energy consumption, we'll start by **using** the sample code to see how it works.

As you go through the next steps:

* **Use** the instructions at the top of the screen.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb!**

## Use Step 1
Take a look at the physical project you just built.

What robotic components do you notice? How do you think they’ll work together to make our model function as we expect?

~hint Tell Me More!
The automated smart home model has:

* One ``||fwdMotors:servo motor||`` that rotates to unlock the front door. 

* One ``||fwdSensors:LED ring||`` to turn the lights on and off in the room. 

* One ``||fwdSensors:touch sensor||`` and one ``||fwdSensors:solar sensor||`` that we're not using **yet** but we will in the **modify** tutorial.

* These parts are connected to the **breakout board** through **cables**.

* The breakout board is connected to a **micro:bit** which holds all the code that will tell our sensors what to do and when to do it

* A second **micro:bit** holds the same code and communicates wirelessly back and forth!

hint~

## Use Step 2
Think about how smart homes in our lesson worked. 

What do you think that the micro:bit in your **model** represents inside of your house? 

What do you think that the micro:bit in your hand represents? 

~hint Tell Me More! 

* The micro:bit in your **model** represents a smart thermostat in our house. 

* The micro:bit in your **hand** represents a phone or smart app that can control automated functions in our house. 

* These micro:bits communicate using **radio waves**, similar to how most smart apps control lights in a house. 

hint~ 

## Use Step 3
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

## Use Step 4

Let's test the functionality of our **thermostat inside our house**!

Press the **A** button on the micro:bit inside your model. What do you notice happens? 

~hint Tell Me More! 

The **A** button is an **input** that triggers a set of instructions: 

1. 1 degree is subtracted from the ``||Variables:temperature||`` variable on the first micro:bit. 

2. The micro:bit ``||Basic:displays||`` an arrow pointing down.

3. The micro:bit in the model ``||radio:sends||`` the number "-1" to the micro:bit in your hand.

4. The micro:bit in your hand ``||Radio:receives||`` the number "-1" and repeats steps 2. and 3. on its ``||Basic:LED display||``.

5. Both micro:bits display the new ``||Variables:temperature||`` on their ``||Basic:LED dispalys||``. 

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        Temperature += -1
        basic.showArrow(ArrowNames.South)
    }
    basic.showNumber(Temperature)
})

basic.forever(function () {
    basic.showNumber(Temperature)
})
```

## Use Step 5

Now let's test the same functionality with our **remote controlled app**. 

Press the **A** button using the micro:bit in **your hand**. What do you notice? 

~hint Tell Me More! 
The micro:bit in your hand sends the same message as in the previous step! 

The thermostat is now set to **1 degree Celsius cooler.**
hint~ 

```blocks 
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})

radio.onReceivedNumber(function (receivedNumber) {
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

## Use Step 6

How can we **increase** the temperature of our thermostat? 

~hint Tell Me More! 

If we press the **B** button on either micro:bit, the ``||variables:Temperature||`` variable increases by 1 degree Celsius! 

hint~ 

```blocks 
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})

radio.onReceivedNumber(function (receivedNumber) {
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

## Use Step 7

Now that you understand how to adjust the **thermostat** using both micro:bits, which code blocks do you think **unlock the door** and **turns on the lights**? 

~hint Tell Me More! 

Pressing **A+B** on the **micro:bit in your hand** unlocks the door and turns on the lights remotely, like waking up in the morning, or getting home for the day! 

If the door is locked, the ``||fwdMotors:leftServo||`` turns to 100 degrees, so we can slide open the door. 

At the same time, the ``||fwdSensors:LED ring||`` turns on so we can see inside our house!

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    // @highlight
    radio.sendString(openDoor)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.leftServo.fwdGetAngle() < 100) {
            // @highlight
            fwdMotors.leftServo.fwdSetAngle(100)
            // @highlight
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
        } else {
            fwdMotors.leftServo.fwdSetAngle(0)
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        }
    }
})
```

## Use Step 8 

What will happen when we press **A+B** a second time? 

~hint Tell Me More! 

If the door is unlocked, pressing **A+B** sets the ``||fwdMotors:leftServo||`` to 0 degrees and the ``||fwdSensors:LEDRing||`` to black. 

This is especially helpful in conserving energy when we **go to bed** or **leave the house**. 
hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    // @highlight
    radio.sendString(openDoor)
})

radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.leftServo.fwdGetAngle() < 100) {
            fwdMotors.leftServo.fwdSetAngle(100)
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
        } else {
            // @highlight 
            fwdMotors.leftServo.fwdSetAngle(0)
            // @highlight 
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        }
    }
})
```

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. How do you think using the remote controller or automated features helps reduce energy usage in our home? 
2. What other features might you adapt to help make your automated smart home more sustainable?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.