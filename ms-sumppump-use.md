# Sump Pump - Use Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
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

## Sump Pump - Use Tutorial @showdialog

Today, we are building a sump pump model to protect our homes from flooding! 

Let's add some starter code to make sure our pump activates when the water level rises! 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-sumppump-render.webp" alt="Sump Pump Build Render" style="display: block; width: 60%; margin:auto;">

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
Let's learn about how our sump pump model works **before** we add water to it. 

Think back to what we've learned about sump pumps. What do you think that the electronic components and waterproof containers in your **model** represents? 

~hint Tell Me More!

* The **waterproof container** holding the ``||fwdSensors:moisture sensor||`` and ``||fwdMotors:water pump||`` represents the **sump pit** where water collects. 

* The ``||fwdSensors:moisture sensor||`` measures the percentage of water in the sump pit. 

* The **micro:bit** controls the ``||fwdMotors:water pump||`` and communicates how much water is in the sump pit. 

* The ``||fwdMotors:water pump||`` moves water out of our sump pit to a **storm sewer or grassy area**. 

* The **breakout board** powers the model using its **battery**.

* These components help to communicate to **Plumbers** and home owners if the **sump pump** needs to be turned on to help lower the **water table**. 

hint~ 

## Step 5

Take a look at some of the **code blocks** in the workspace. What do you think will happen when you press the **micro:bit logo**? 

~hint Tell Me More! 

The ``||fwdMotors:water pump||`` runs for one half second before turning back off! 

hint~ 

```blocks 
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
// @highlight   
 fwdMotors.pump.fwdTimedRun(500)
})
```

## Step 6 

Let's test how the ``||fwdSensors:moisture sensor||`` functions. With the sensor cable plugged in, try gently grabbing the ``||fwdSensors:moisture sensor||`` in your fist. 

What do you notice happens? 

~hint Tell Me More!

The ``||fwdSensors:moisture sensor||`` measures the moisture in your hand, activating the rest of the code that controls our sump pump model.

hint~

## Step 7 

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

## Step 8 

Which code blocks in the ``||basic:forever||`` loop control the **length of time** that the water pump runs for? 

~hint Tell Me More! 

The ``||fwdMotors: run pump for||`` block controls how long the pump stays on.

500 ms is equal to 1/2 second!

hint~

```blocks 
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Over)) {
// @highlight       
 fwdMotors.pump.fwdTimedRun(500)
```

## Step 9

Can you describe how the ``||loops:repeat||`` loop works?

~hint Tell Me More!

The ``||loops:repeat||`` block repeats the code blocks nested inside the loop two times! 

The ``||music:play tone||`` blocks play a sound using the **micro:bit** to communicate to a **Plumber** or a home owner that the sump pump is turned on.

hint~ 

```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.pump.fwdTimedRun(500)
// @highlight      
  for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})

```

## Step 10 @showdialog

Now that we have **used** our code to understand how our **sump pump** senses how full the sump pit is using our hand, we're going to add water! 

Remember to re-attach your ``||fwdSensors:moisture sensor||`` to your **sump pump model**

Make sure that your water tubing is securely connected to your water pump, and position the end of the tube into your second water tight container.

## Step 11 @showdialog

Important! Remember that our project uses electronic wires and sensors that should not get wet! If any part other than the building blocks gets wet, turn off your project and fully dry it before continuing.

## Step 12

Carefully pour water into the container holding your ``||fwdSensors:moisture sensor||`` and ``||fwdMotors:water pump||``. 

What do you notice happens when you fill the container **more than 20% full?** 

~hint Tell Me More! 


The sump pump activates until the container is less than 20% full!

hint~

## Step 13

Think back to what you've learned about sump pumps. 

What does the **water you added to your sump pit** represent?

~hint Tell Me More! 

The water you added to your model represents a rainy day! As rain filters through the soil, it adds pressure to a home's foundation and raises the water table. 

The water drains into the sump pit until the sump pump activates to move it away from the home.

hint~ 

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. Our sump pump model uses **sound** to communicate when it is turned on. How else could it communicate when the sump pump is activated? 
2. How might using your sump pump model help keep your city more sustainable? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.