# Smart Garbage Bins - Modify Tutorial

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
    fwdMotors.rightServo.fwdSetAngle(45)
})
fwdMotors.rightServo.fwdSetAngle(0)
let fillLevel = 0
basic.forever(function () {
    led.plotBarGraph(
    fillLevel,
    100
    )
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.03, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fillLevel = 75
        basic.pause(500)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        fillLevel = 0
        basic.pause(500)
    }
})
```

## Smart Garbage Bin: Modify Tutorial @showdialog

Today, we are building and coding a smart garbage bin! 

We'll add some starter code to make sure our garbage bin opens and closes with a button push. Then, we'll modify the code to make it our own! 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-smartbin-render.webp" alt="Smart garbage bin full build render" style="display: block; width: 60%; margin:auto;">

## Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 60%; margin:auto;">

## Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Step 3
Click the ``|Download|`` button to download the starter code to the micro:bit.

## Step 4
Think about how smart garbage bins in our lesson worked. 

What do you think that the building blocks and electronic components in your **model** represents?

~hint Tell Me More! 

* The **building blocks** represent the container to hold waste.

* The ``||fwdMotors:servo||`` opens and closes the waste container to keep it away from pests or environmental elements like wind and rain.

* The ``||fwdSensors:sonar sensor||`` measures the percentage of waste in the container.

* The **micro:bit display** and the ``||fwdSensors:LED ring||`` communicate how full the container is. 

* These components help to communicate to **Waste Management Specialists** if the bin should be emptied during their waste collection route. 

hint~ 

## Step 5

Let's test the functionality of our **smart garbage bin**!

Press the **B** button on the micro:bit. What do you notice happens? 

~hint Tell Me More! 

The **B** button is an **input** that triggers the instructions ``||fwdMotors:set rightServo to 45 degrees||``

When the ``||fwdMotors:servo||`` rotates, the garbage bin is open! 

hint~

```blocks
input.onButtonPressed(Button.B, function () {
// @highlight   
 fwdMotors.rightServo.fwdSetAngle(45)
})
```

## Step 6

Now let's test how the smart garbage bin **senses** how full it is. 

~hint Tell Me More! 

The ``||fwdSensors:sonar sensor||`` measures the **distance between** the waste and the top of the smart garbage bin. 

If there is **less than 3 cm** of space between the ``||fwdSensors:sonar sensor||`` and the waste in the smart garbage bin, the bin is 75% full! 
 
hint~

```blocks
basic.forever(function () {
      if (fwdSensors.sonar1.fwdDistancePastThreshold(0.03, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        //@highlight
        fillLevel = 75
        basic.pause(500)
      }
 
```

## Step 7

We need to know when the bin is 0%, 25% and 75% full. 

What code block will help us create more **conditions** to our smart garbage bin ``||variables:fillLevel||``? 

~hint Tell Me More! 

We already know when the bin is **empty**, and when it is **75% full**!

We need to add another condition using an ``||logic:else if||`` block. 

Click on the **+** button underneath the ``||logic:else||`` condition in the ``||basic:forever||`` loop in the workspace. 

hint~

```blocks 
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.03, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fillLevel = 75
        basic.pause(500)
    } 
// @highlight
else if (false) {
    } 
else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        fillLevel = 0
    }
```

## Step 8

What is the average ``||fwdSensors:sonar sensor||`` reading when the bin is **one quarter full**?

~hint Tell Me More! 

1. Using a ruler, measure the distance in centimeters from the bottom of your bin to the ``||fwdSensors:sonar sensor||``. 

2. Make sure to look at the **simulator** to get live readings of the distance between your waste and the ``||fwdSensors:sonar sensor||``.

3. We know that when the bin is **three quarters full**, there is less than **three centimeters** between the ``||fwdSensors:sonar sensor||`` and the waste in the bin. 

4. If the bin is **25% full**, there should be less than **seven centimeters** of space between the ``||fwdSensors:sonar sensor||`` and the waste in the bin! 

hint~

## Step 9

What code blocks should we use to tell a Waste Management Specialist when our bin is **25% full**? 

~hint Tell Me More! 

1. Drag a ``||fwdSensors:sonar distance is under||`` block into an empty ``||logic:if else||`` condition.
2. Set the value of the ``||fwdSensors:sonar distance||`` to be 0.07 meters 
3. Change the colour of the ``||fwdSensors:LED ring||`` to another colour!
4. Set the value of the ``||variables:fillLevel||`` variable to 25
5. Add a ``||basic:pause||`` block and set the time interval to 500 ms

hint~

```blocks 
{
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.03, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fillLevel = 75
        basic.pause(500)
    } else if (fwdSensors.sonar1.fwdDistancePastThreshold(0.07, fwdSensors.ThresholdDirection.Under)) {
// @highlight
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
// @highlight
        fillLevel = 25
        // @highlight
        basic.pause(500)
    } 
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        fillLevel = 0
    }
```

## Step 10

Let's test our code! Remember to hit the `|Download|` button when you're ready to test your new settings. 

## Congratulations! @showdialog

You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog

How does having four fill levels instead of two help Waste Management Specialists make more sustainable route collection choices? 

What other features might you adapt to help make your smart garbage bin more sustainable for the community? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.