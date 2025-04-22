# Smart Garbage Bins - Use Tutorial

```package
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

## Smart Garbage Bins - Use Tutorial @showdialog

Today, we are building a smart garbage bin! 

Let's add some starter code to make sure our garbage bin opens and closes when we press a button! 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-smartbin-render.webp" alt="Smart garbage bin full build render" style="display: block; width: 60%; margin:auto;">

## Step 1 @showdialog

IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 60%; margin:auto;">

## Step 2 @showdialog

Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Step 3

Click the ``|Download|`` button to download the starter code to your micro:bit.

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

With the garbage bin door still open, gently hold a piece of paper close to the ``||fwdSensors:sonar sensor||``. 

What do you notice happens to the smart garbage bin when your paper is **very close** to the ``||fwdSensors:sonar sensor||``? 

~hint Tell Me More! 

* The ``||fwdSensors:LED ring||`` on the smart garbage bin changes from **green** to **red**.
* The **micro:bit display** graph updates the ``||variables:fillLevel||`` variable from 0% to 75% full.

hint~

```blocks 
basic.forever(function () {
// @highlight 
led.plotBarGraph(
    fillLevel,
    100
    )
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.03, fwdSensors.ThresholdDirection.Under)) {
// @highlight      
  fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)   
  fillLevel = 75
  basic.pause(500)
    } 
})
``` 

## Step 8

Now that you understand how to adjust the ``||variables:fillLevel||`` using your piece of paper, let's fill our bin with waste until it is 75% full! 

~hint Tell Me More! 

Think about the waste that you place in the bin. If it is **smaller** how many more pieces of waste can you fit into your smart garbage bin before the ``||fwdSensors:LED ring||`` turns red? 

hint~

## Step 9

Now that your bin is full, what code block do you think controls the door closing? 

~hint Tell Me More! 

The **A** button returns the ``||fwdMotors:servo||`` to 0 degrees!

hint~
Once your smart garbage bin is full, press the **A** button to close the door! 

```blocks
input.onButtonPressed(Button.A, function () {
// @highlight
    fwdMotors.rightServo.fwdSetAngle(0)
})
```

## Challenge @showdialog

Now that we've **used** our model to understand how our smart garbage bin works, we're going to complete a small **challenge**.

Our smart garbage bin is a **rectangular prism**! Let's calculate the area, surface area, and volume of our container to understand how much waste our **Waste Management Specialists** collect from our model. 

## Step 10

Using a ruler or a **back to back connector cube** from the Climate Action Kit, identify the **length, width, and height** of our smart garbage bin container.

~hint Tell Me More!

Using a back to back connector cube from the Climate Action Kit, we measured the following values for our rectangular prism: 

* Width: 3 Back to Back Connector Cubes
* Length: 4 Back to Back Connector Cubes
* Height: 4 Back to Back Connector Cubes

Remember, our **model** includes electronic components that are not part of our smart garbage bin **container**. 

hint~

## Step 11

Now that you know the length, width, and height of your smart garbage bin, represent your rectangular prism as a **net**. 

Remember to label the **length, width, and height** on your drawing!

~hint Tell Me More!

Using the measurements from **Challenge Step 1** we created the following net: 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-smartbin-net.webp" alt="Rectangular prism net with length, width, and height labels" style="display: block; width: 60%; margin:auto;">
hint~ 

## Step 12

What is the surface area of our smart garbage bin?

~hint Tell Me More

Use the following formula to calculate the **surface area** of a rectangular prism: 

**Surface Area = 2(Length x Width) + 2(Length + Width)Height**

1. Surface Area = 2(4 x 3) + 2(4 + 3)4
2. Surface Area = 2(12) + 2(7)4
3. Surface Area = 24 + (14x4)
4. Surface Area = 24 + 56
5. Surface Area = 80 units squared


Remember, with **surface area**, we are adding the areas of each face together, so we are only multiplying by two dimensions, which is why we **square** our units.

hint~ 

## Step 13
What is the **volume** of our smart garbage bin? 


~hint Tell Me More!

**Either** of the formulas below can be used to calculate the **volume** of a rectangular prism: 

**Volume = Length x Width x Height**
* Volume = 4 x 3 x 4
* Volume = 48 Units Cubed

**Volume = Area of Base x Height**
* Volume = (Length x Width) x Height
* Volume = (4 x 3) x 4
* Volume = 12 x 4
* Volume = 48 Units Cubed

Remember, since we are multiplying by **three dimensions**, our units are **cubed**.

hint~

## Step 14

If a Waste Management Specialist empties our smart garbage bin when it is **75% full**, what is the volume of garbage that they collect? 

~hint Tell Me More! 

Use the following formula to calculate **75% of the volume** of our smart garbage bin: 

* Volume x 0.75
* 48 x 0.75
* 36 Units Cubed

When the smart garbage bin is holding **more than 36 units cubed** worth of waste, the Waste Management Specialist will include it in their waste collection route. 

hint~

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. How might you improve the **physical structure** of your smart garbage bin? 
2. How might you improve the **code** of your model?
3. How do you think the smart garbage bin helps to reduce the **environmental impact** of a community? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.