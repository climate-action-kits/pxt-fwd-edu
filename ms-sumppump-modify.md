# Sump Pumps - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
let threshold = 0
threshold = 25

input.onButtonPressed(Button.A, function () {

   })

input.onButtonPressed(Button.AB, function () {
    fwdMotors.pump.fwdSetActive(false)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.pump.fwdTimedRun(500)
})

basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.pump.fwdTimedRun(500)
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
```

## Sump Pump - Modify Tutorial @showdialog

Today, we are building a sump pump model to protect our homes from flooding! 

We'll add some starter code to make sure our pump turns on as the water level rises. Then, we'll modify the code to make it our own! 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-sumppump-render.webp" alt="Sump Pump full build render" style="display: block; width: 60%; margin:auto;">

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

Let's learn about how our sump pump model works **before** we add water to it. 

With the sensor cable plugged in, try gently grabbing the ``||fwdSensors:moisture sensor||`` in your fist. 

What do you notice happens? 

~hint Tell Me More!

The ``||fwdSensors:moisture sensor||`` measures the moisture in your hand, activating the rest of the code that controls our sump pump model.

hint~

## Step 5

Let's look at the code in the ``||basic:forever||`` loop. 

What percentage of moisture does the ``||fwdSensors:moisture sensor||`` need to detect before it activates the **sump pump**? 

~hint Tell Me More! 

When the ``||fwdSensors:moisutre sensor||`` detects that the sump pit is **more than 20% full** the sump pump will activate! 

hint~ 

```blocks
basic.forever(function () {
// @highlight
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Over)) {
        }
    }
})
```

## Step 6

Now that we understand when the ``||fwdSensors:moisture sensor||`` activates the sump pump in the ``||basic:forever||`` loop, let's **modify** our code to add more functionality.

Our code includes a ``||variables:threshold||`` variable in the ``||basic:on start||`` event that is set to the value of **25**. 

What code block should we use to activate the sump pump when the ``||fwdSensors:moisture sensor||`` is equal to the ``||variables:threshold||``?


~hint Tell Me More!

Drag a ``||variables:threshold||`` block to replace the value **20** in the ``||fwdSensors:moisture sensor is over||`` block.

Remember to ``|Download|`` your code and test your ``||fwdSensors:moisture sensor||`` to test that your pump still activates with your hand!

hint~

```blocks 
//@highlight
let threshold = 25
basic.forever(function () {
 // @highlight
  if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(threshold, fwdSensors.ThresholdDirection.Over)) {
```

## Step 7
Let's add a feature to **decrease** the threshold that activates the sump pump.

We'll use the empty ``||input:on button A||`` event in our workspace to do this. 

What code block should we use to **change** the value of the ``||variables:threshold||`` variable by **-5** when the **A** button is pressed? 

~hint Tell Me More! 

We can use a ``||variables:change threshold by||`` block in the ``||input:on button A||`` 

Change the value from **1** to **-5**

hint~ 

```blocks 

input.onButtonPressed(Button.A, function () {
// @highlight    
threshold += -5
 })
```

## Step 8

Now that we can manually **lower** the ``||variables:threshold||`` value, we need to update our code to communicate the value as it changes. 

Which code block should you use to **display the threshold value** each time the **A** button is pressed? The number should **display for 1 second**, before the micro:bit **screen is cleared**. 

~hint Tell Me More! 

We need to add code blocks to our ``||event:on button A||`` event.

1. Drag a ``||basic:showNumber||`` block, and drop it below the ``||variables:change Threshold||`` block.
2. Drag and drop a ``||variables:threshold||`` block into the empty field of the ``||basic:showNumber||`` block.
3. Add a ``||basic:pause||`` block, and set the value to **1 second**.
4. Add a ``||basic:clear screen||`` block below the ``||basic:pause||`` block. 

Remember to ``|Download|`` your code to your micro:bit and test how it works by pressing the **A** button on your micro:bit!

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    threshold += -5
// @highlight   
 basic.showNumber(threshold)
// @highlight    
basic.pause(1000)
// @highlight 
   basic.clearScreen()
})
```

## Step 9 

Our sump pump can now be manually updated to lower the ``||variables:threshold||`` that activates the ``||fwdMotors:water pump||``. 

How can we add the functionality to **increase** the threshold variable by **5** when the **B** button is pressed?

~hint Tell Me More!

We can duplicate the ``||input:on button A||`` event and edit some of the code. 

1. Right click on the ``||input:on button A||`` event and duplicate the code. 
2. Click on the dropdown in the ``||input: on button A pressed||`` and change it to **B**
3. Change the value of the ``||variables:change threshold by||`` block from **-5** to **5**

Remember to ``|Download|`` your code to your micro:bit to test how it works by pressing the **B** button on your micro:bit!

hint~

```blocks  
input.onButtonPressed(Button.B, function () {
// @highlight    
   threshold += 5
basic.showNumber(threshold)  
basic.pause(1000)
basic.clearScreen()
})
```

## Step 10

Take a look at the code in the ``||basic:forever||`` loop. Which code blocks control the  **length of time** that the water pump runs for when it is activated?

~hint Tell Me More! 

The ``||fwdMotors: run pump for||`` block controls how long the pump stays on.

500 ms is equal to 1/2 second!

hint~

```blocks 
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(threshold, fwdSensors.ThresholdDirection.Over)) {
// @highlight       
 fwdMotors.pump.fwdTimedRun(500)
```

## Step 11

Let's increase how much water is removed from the sump pit when the sump pump activates. 

What code block should you update to run the ``||fwdMotors:water pump||`` to run for **twice as long**? 

~hint Tell Me More! 

Right now, our ``||fwdMotors:water pump||`` runs for 1/2 second each time it is activated. 

We need to change our ``||fwdMotors:run pump for||`` block to 1 second.

Remember to hit the `|Download|` button when you are ready to test your code again.

hint~

```blocks 
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(threshold, fwdSensors.ThresholdDirection.Over)) {
// @highlight       
 fwdMotors.pump.fwdTimedRun(1000)
```

## Step 12 @showdialog

Now that we have **modified** our code to enhance how our **sump pump** senses how full the sump pit is using our hand, we're going to add water! 

Remember to re-attach your ``||fwdSensors:moisture sensor||`` to your **sump pump model**

Make sure that your water tubing is securely connected to your water pump, and position the end of the tube into your second water tight container.

## Step 13 @showdialog

Important! Remember that our project uses electronic wires and sensors that should not get wet! If any part other than the building blocks gets wet, turn off your project and fully dry it before continuing.

## Step 14

Carefully pour water into the container holding your ``||fwdSensors:moisture sensor||`` and ``||fwdMotors:water pump||``. 

What do you notice happens when you fill the container **more than 25% full?** 

~hint Tell Me More! 


The sump pump activates until the container is less than 25% full!

hint~

## Step 15
Try pressing the **A** or **B** button on your micro:bit. What do you notice changes about how quickly your ``||fwdMotors:water pump||`` activates? 

~hint Tell Me More! 


When you press the **A** button, the ``||variables:threshold||`` decreases by 5, making the ``||fwdSensors:moisture sensor||`` activate the ``||fwdMotors:water pump||`` **more frequently**. 

When you press the **B** button, the ``||variables:threshold||`` increases by 5, making the ``||fwdSensors:moisture sensor||`` activate the ``||fwdMotors:water pump||`` **less frequently**.

hint~

## Congratulations! @showdialog

You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. What do you think the value in having the ability to **manually** change the threshold of our sump pump?
2. Our sump pump model uses **sound** to communicate when it is turned on. How else could it communicate when the sump pump is activated? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.