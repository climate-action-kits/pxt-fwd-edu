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

## Activity 1: Code Your Project @showdialog
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

## Activity 2: Modify Your Project @showdialog
We have a Smart Garbage Bin that **senses** how much waste is in the container. Let’s explore how to optimize our project by **modifying** our code!

As you go through the next steps:

* Use the instructions at the top of the screen to **modify** your code.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb**!

## Modify Step 1
Think about how Smart Garbage Bins in our lesson worked. 

What do you think that the building blocks and electronic components in your **model** represents?

~hint Tell Me More! 

* The **building blocks** represent the container to hold waste.

* The ``||fwdMotors:servo||`` opens and closes the waste container to keep it away from pests or environmental elements like wind and rain.

* The ``||fwdSensors:sonar sensor||`` measures the percentage of waste in the container.

* The **micro:bit display** and the ``||fwdSensors:LED ring||`` communicate how full the container is. 

* These components help to communicate to **Waste Management Specialists** if the bin should be emptied during their waste collection route. 

hint~ 

## Modify Step 2

Let's test the functionality of our **Smart Garbage Bin**!

Press the **B** button on the micro:bit. What do you notice happens? 

~hint Tell Me More! 

The **B** button is an **input** that triggers the instructions ``||fwdMotors:set rightServo to 60 degrees||``

When the ``||fwdMotors:servo||`` rotates, the garbage bin is open! 

hint~

```blocks
input.onButtonPressed(Button.B, function () {
// @highlight   
 fwdMotors.rightServo.fwdSetAngle(60)
})
```

## Modify Step 3

Now let's test how the Smart Garbage Bin **senses** how full it is. 

~hint Tell Me More! 

The ``||fwdSensors:sonar sensor||`` measures the **distance between** the waste and the top of the Smart Garbage Bin. 

If there is **less than 2 cm** of space between the ``||fwdSensors:sonar sensor||`` and the waste in the Smart Garbage Bin, the bin is 75% full! 
 
hint~

```blocks
basic.forever(function () {
      if (fwdSensors.sonar1.fwdDistancePastThreshold(0.02, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        //@highlight
        fillLevel = 75
 
```

## Modify Step 4

We need to know when the bin is 0%, 25%, 50%, and 75% full. 

What code block will help us create more **conditions** to our Smart Garbage Bin ``||variables:fillLevel||``? 

~hint Tell Me More! 

We already know when the bin is **empty**, and when it is **75% full**!

We need to add another condition using an ``||logic:else if||`` block. 

Click on the **+** button underneath the ``||logic:else||`` condition in the ``||basic:forever||`` loop in the workspace. 

hint~

```blocks 
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.02, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fillLevel = 75
    } 
// @highlight
else if (false) {
    } 
    // @highlight 
    else if (false){}
else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        fillLevel = 0
    }
```

## Modify Step 5

What is the average ``||fwdSensors:sonar sensor||`` reading when the bin is **half full**?

~hint Tell Me More! 

1. Using a ruler, measure the distance in centimeters from the bottom of your bin to the ``||fwdSensors:sonar sensor||``. 

2. Make sure to look at the **simulator** to get live readings of the distance between your waste and the ``||fwdSensors:sonar sensor||``.

3. We know that when the bin is **three quarters full**, there is less than **two centimeters** between the ``||fwdSensors:sonar sensor||`` and the waste in the bin. 

4. If the bin is **50% full**, there should be less than **four centimeters** of space between the ``||fwdSensors:sonar sensor||`` and the waste in the bin! 

hint~

## Modify Step 6

What code blocks should we use to tell a Waste Management Specialist when our bin is **50% full**? 

~hint Tell Me More! 

1. Drag a ``||fwdSensors:sonar distance is under||`` block into an empty ``||logic:if else||`` condition.
2. Set the value of the ``||fwdSensors:sonar distance||`` to be 0.04 meters 
3. Change the colour of the ``||fwdSensors:LED ring||`` to another colour!
4. Set the value of the ``||variables:fillLevel||`` variable to 50

hint~

```blocks 
{
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.02, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fillLevel = 75
    } else if (fwdSensors.sonar1.fwdDistancePastThreshold(0.04, fwdSensors.ThresholdDirection.Under)) {
// @highlight
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
// @highlight
        fillLevel = 50
    } 
    else if (false)
    {}
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        fillLevel = 0
    }
```

## Modify Step 7

What is the average ``||fwdSensors:sonar sensor||`` reading when the bin is **one quarter full**?

~hint Tell Me More! 

Remember to look at the **simulator** to get live readings of the distance between your waste and the ``||fwdSensors:sonar sensor||``.

If the bin is 25% full, there should be less than **six centimeters** of space between the ``||fwdSensors:sonar sensor||`` and the waste in the bin! 

hint~

## Modify Step 8 

What code blocks should we use to tell a Waste Management Specialist when our bin is **25% full**? 

~hint Tell Me More! 

1. Drag a ``||fwdSensors:sonar distance is under||`` block into the empty ``||logic:if else||`` condition.
2. Set the value of the ``||fwdSensors:sonar distance||`` to be 0.06 meters 
3. Change the colour of the ``||fwdSensors:LED ring||`` to another colour!
4. Set the value of the ``||variables:fillLevel||`` variable to 25

hint~

```blocks 
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.02, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fillLevel = 75
    } else if (fwdSensors.sonar1.fwdDistancePastThreshold(0.04, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
        fillLevel = 50
    } else if (fwdSensors.sonar1.fwdDistancePastThreshold(0.06, fwdSensors.ThresholdDirection.Under)) {
// @highlight         
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
// @highlight        
fillLevel = 25
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        fillLevel = 0
    }
    })
```

## Modify Step 9 

Let's test our code! Remember to hit the `|Download|` button when you're ready to test your new settings. 

## Congratulations! @showdialog

You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog

How does having four fill levels instead of two help Waste Management Specialists make more sustainable route collection choices? 

What other features might you adapt to help make your Smart Garbage Bin more sustainable for the community? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.