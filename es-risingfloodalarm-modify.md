# Forward Education Flood Detection with Coastal Flood Alarms - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```
```template
basic.forever(function () {
   led.plotBarGraph(
   fwdSensors.soilMoisture1.fwdMoistureLevel(),
   100
   )
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() < 33) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
   }
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 33 && fwdSensors.soilMoisture1.fwdMoistureLevel() < 66) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
   }
   if (true){}
})
```

## Activity 1: Build Your Project @showdialog
Let's build a flood alarm to help detect coastal flooding! We are going to do this in four parts:
1. **Build** our coastal flood alarm
2. **Add code** to bring our project to life 
3. **Modify** our project to learn about other sensors 
4. Apply what we learned with a small **challenge**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-render.webp" alt="Full Rising Flood Alarm" style="display: block; width: 60%; margin:auto;">

## Electronics Required @showdialog
![Electronic Pieces Required](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs0A.webp)

## Building Blocks Required @showdialog
![Building Blocks Required](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs0B.webp)

## Build Step 1 @showdialog
![Build Step 1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs01.webp)

## Build Step 2 @showdialog
![Build Step 2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs02.webp)

## Build Step 3 @showdialog
![Build Step 3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs03.webp)

## Build Step 4 @showdialog
![Build Step 4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs04.webp)

## Build Step 5 @showdialog
![Build Step 5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs05.webp)

## Build Step 6 @showdialog
![Build Step 6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs06.webp)

## Build Step 7 @showdialog
![Build Step 7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs07.webp)

## Build Step 8 @showdialog
![Build Step 8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs08.webp)

## Build Step 9 @showdialog
![Build Step 9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs09.webp)

## Build Step 10 @showdialog
![Build Step 10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs10.webp)

## Build Step 11 @showdialog
![Build Step 11](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs11.webp)

## Build Step 12 @showdialog
![Build Step 12](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs12.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 60%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Click the ``|Download|`` button to download the starter code to your project.

## Activity 3: Modify Your Project @showdialog
We have a coastal flood alarm with a moisture sensor to detect the water level. Let’s explore how to optimize our sensors by **modifying** our code!

As you go through the next steps:

* Use the instructions at the top of the screen to **modify** your code. 
* When you are ready for more information, click **'Tell Me More!'** 
* If you need help with the code, click the **lightbulb**!

## Modify Step 1
Take a close look at the flood alarm that you just built. Then, review the code below.

## Build Step 13 @showdialog
Let's see how our flood alarm works with water! 

Remember that our project uses electronic wires and sensors that should not get wet! If any part other than the building blocks gets wet, **turn off your project and fully dry it before continuing.**
![Build Step 13](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs13.webp)

## Modify Step 2
What do you think will happen when the container is filled

* 1/3 of the way with water?
* 1/2 of the way with water?

Try it now and see if your predictions are correct!

~hint Tell Me More!

* The flood alarm uses **conditional statements** to tell us how high the tide is.
* The ``||fwdSensors:moisture sensor||`` detects water from 0 to 100%

* When the water is less than 1/3 full, the ``||fwdSensors:LED ring||`` lights up **green**

* When the water is more than 1/3 full, but less than 2/3 full the ``||fwdSensors:LED ring||`` lights up **yellow**

hint~

```blocks
basic.forever(function () {
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() < 33) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
   }
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 33 && fwdSensors.soilMoisture1.fwdMoistureLevel() < 66) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
   }
})
``` 
## Modify Step 3
Our flood alarm tells us when the tide is low and when the tide is high.

What do you think would happen if a natural disaster caused the tide to be higher than 66% full?

~hint Tell Me More! 
The coastal flood alarm wouldn't be able to do anything!

hint~

## Modify Step 4
Let's add a setting to alert people if there is a flood! 

Let's create a comparison using the ``||fwdSensors:moisture||`` block, and a ``||logic:greater than or equal to||`` block. 

~hint Tell Me More! 
If the water level is greater than or equal to 66%, it's flooding! 
hint~

```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdMoistureLevel() < 33) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 33 && fwdSensors.soilMoisture1.fwdMoistureLevel() < 66) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
    // @highlight
    if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 66) {
    	
    }
})
```

## Modify Step 5
Let's add a colour to represent that there is a flood warning! 

Use the ``||fwdSensors:LED ring||`` to set the colour of all LEDs to one colour. 

~hint Tell Me More! 
We've picked red to represent flooding, but you can pick any colour other than green and yellow! 
hint~

```blocks
basic.forever(function () {
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 66) {
    // @highlight
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
   }
})
```

## Activity 4: Challenge
Now that we have **modified** our code to add another setting to our coastal alarm, we're going to complete a small challenge!

## Challenge Step 1
Let's add another warning system to get people's attention.

Right now, our flood alarm alerts people if there is a flood by making the ``||fwdSensors:LED ring||`` red.

Imagine what would happen if we weren't near enough to see the LED ring. Why do you think this could be a problem? 

~hint Tell Me More!
If we weren't close enough to see the warning lights, we may not know if there's a flood!
hint~

## Challenge Step 2
Let's update the code so the micro:bit makes a sound when there is a risk of flooding.

When should we make the flood alarm play a sound?

~hint Tell Me More!

If the water level is **more than 2/3 full**, we should make a noise until the water level goes down!
hint~

## Challenge Step 3
Look at the conditional statement below. Try using a ``||music:play||`` block to add an audio alarm to the flood alarm if the water level is **greater than or equal to 2/3 full**

~hint Tell Me More!

Drag the ``||music:play||`` block and a ``||music:rest||`` block below the ``||fwdSensors:set LEDRing||`` to red.

hint~

```blocks
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 66) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
       music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)),
       // @highlight
       music.PlaybackMode.UntilDone)
       // @highlight
       music.rest(music.beat(BeatFraction.Double))
   }
```

## Challenge Step 4
Test the changes you made! Does the sound automatically play when there is a risk of flooding?

Add enough water to the container for the ``||fwdSensors:LED ring||`` to turn red. What happens?

~hint Tell Me More!

When the moisture sensor detects **more than 2/3 water**, the micro:bit should make a sound!

This helps people far away from the flood alarm hear the noise and safely leave the area.
hint~

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. How does the micro:bit use comparisons (<,=,>) to decide how high the tide is?
2. How does the use of sound and other senses help keep people safe during a natural disaster?
3. Think about something in this project that was tricky.
   * How did you figure it out? How did that make you feel?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.