# Forward Education Optimizing Waste Management with Smart Garbage Bins - Use Tutorial

```package
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

Let's build an automated smart garbage bin to optimize waste collection routes! We are going to do this in four parts: 

1. **Build** our smart garbage bin   
2. **Add code** to bring our project to life  
3. **Use** your project to understand how they works
4. Calculate the volume of our garbage bin in a small **challenge**

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

Click the ``|Download|`` button to download the starter code to your micro:bit.

## Activity 3: Use Your Project @showdialog

Now that we've built our smart garbage bin to help optimize waste collection routes, we'll start by **using** the sample code to see how it works.

As you go through the next steps:

* **Use** the instructions at the top of the screen.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb!**

## Use Step 1

Think about how smart garbage bins in our lesson worked. 

What do you think that the building blocks and electronic components in your **model** represents?

~hint Tell Me More! 

* The **building blocks** represent the container to hold waste.

* The **servo motor** opens and closes the waste container to keep it away from pests or environmental elements like wind and rain.

* The **sonar sensor** measures the percentage of waste in the container.

* The **micro:bit display** and the **LED ring** communicate how full the container is. 

* These components help to communicate to **Waste Management Specialists** if the bin should be emptied during their waste collection route. 

hint~ 

## Use Step 2

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

## Use Step 3

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

## Use Step 4

With the garbage bin door still open, gently place your fingers near the sonar sensor. 

What do you notice happens to the smart garbage bin when your hand is **very close** to the sonar sensor? 

~hint Tell Me More! 

* The **LED Ring** on the smart garbage bin changes from **green** to **red**.
* The **micro:bit display** graph updates the fillLevel variable from 0 to 75% full.

hint~

```blocks 
basic.forever(function () {
// @highlight 
led.plotBarGraph(
    fillLevel,
    100
    )
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.02, fwdSensors.ThresholdDirection.Under)) {
// @highlight      
  fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)   
  fillLevel = 75
    } 
})
``` 

## Use Step 5

Now that you understand how to adjust the **fillLevel** using your hand, crumple up some paper and add it to your smart garbage bin until it is 75% full! 

~hint Tell Me More! 

Think about how tightly you crumple the paper - if the waste is **tightly crumpled** how many more pieces can you fit into your smart garbage bin before the **LED ring** turns red? 

hint~

## Use Step 6

Now that your bin is full, what code block do you think controls the door closing? 

~hint Tell Me More! 

The **A** button returns the **servo motor** to 0 degrees!

hint~
Once your smart garbage bin is full, press the **A** button to close the door! 

```blocks
input.onButtonPressed(Button.A, function () {
// @highlight
    fwdMotors.rightServo.fwdSetAngle(0)
})
```

## Activity 4: Challenge @showdialog

Now that we've **used** our model to understand how our smart garbage bin works, we're going to complete a small **challenge**.

Our smart garbage bin is a **rectangular prism**! Let's calculate the area, surface area, and volume of our container to understand how much waste our **Waste Management Specialists** collect from our model. 

## Challenge Step 1

Using a ruler or a **connector cube** from the Climate Action Kit, identify the **length, width, and height** of our smart garbage bin container.

~hint Tell Me More!

Using a connector cube from the Climate Action Kit, we measured the following values for our rectangular prism: 

* Width: 3 Connector Cubes
* Length: 4 Connector Cubes
* Height: 4 Connector Cubes

Remember, our **model** includes electronic components that are not part of our smart garbage bin **container**. 

hint~

## Challenge Step 2

Now that you know the length, width, and height of your smart garbage bin, represent your rectangular prism as a **net**. 

Remember to label the **length, width, and height** on your drawing!

~hint Tell Me More!

Using the measurements from **Challenge Step 1** we created the following net: 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-smartbin-net.webp" alt="Rectangular prism net with length, width, and height labels" style="display: block; width: 60%; margin:auto;">
hint~ 

## Challenge Step 2

What is the surface area of our Smart Garbage Bin?

~hint Tell Me More

Use the following formula to calculate the **surface area** of a rectangular prism: 

* 2(Length x Width) + 2(Length + Width)Height = Surface Area

1. 2(4 x 3) + 2(4 + 3)4 = Surface Area
2. 2(12) + 2(7)4 = Surface Area
3. 24 + (14x4) = Surface Area
4.  24 + 56 = Surface Area
5. 80 units squared = Surface Area


Remember, with **surface area**, we are adding the areas of each face together, so we are only multiplying by two dimensions, which is why we **square** our units.

hint~ 

## Challenge Step 3
What is the **volume** of our Smart Garbage Bin? 


~hint Tell Me More!

**Either** of the formulas below can be used to calculate the **volume** of a rectangular prism: 

* Length x Width x Height = Volume
* 4 x 3 x 4 = Volume
* 48 Units Cubed = Volume 

* Area of Base x Height = Volume
* (Length x Width) x Height = Volume

1. (4 x 3) x 4 = Volume
2. 12 x 4 = Volume
3. 48 Units Cubed = Volume

Remember, since we are multiplying by **three dimensions**, our units are **cubed**.

hint~

## Challenge Step 4

If a Waste Management Specialist empties our smart garbage bin when it is **75% full**, what is the volume of garbage that they collect? 

~hint Tell Me More! 

Use the following formula to calculate **75% of the volume** of our Smart Garbage Bin: 

* Volume * 0.75
* 48 * 0.75
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