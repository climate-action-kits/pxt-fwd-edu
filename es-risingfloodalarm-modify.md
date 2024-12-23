## Forward Education Flood Detection with Coastal Flood Alarms - Modify Tutorial


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
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 66) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
   }
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


## Build Step 13 @showdialog
![Build Step 13](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs13.webp)


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


## Modify Step 2
Before we move to the next steps:


Remember that our project uses electronic wires and sensors that should not get wet! If any part other than the building blocks gets wet, **turn off your project and fully dry it before continuing.**


## Modify Step 3
What do you think will happen when the container is filled


* 1/3 of the way with water?
* 1/3 of the way with water?
* 3/4 of the way with water?


Try it now ans see if your predictions were correct!


~hint Tell Me More!
* The flood alarm uses **conditional statements** to decide how to warn people of the water level.
* The ``||fwdSensors:moisture sensor||`` detects water from 0 to 100%
* When the water is less than 1/3 full, the ``||fwdSensors:LED ring||`` lights up **green**
* When the water is more than 1/3 full, but less than 2/3 full the ``||fwdSensors:LED ring||`` lights up **yellow**
* When the water is more than 2/3 full the ``||fwdSensors:LED ring||`` lights up **red**
hint~


```template
basic.forever(function () {
   led.plotBarGraph(
   fwdSensors.soilMoisture1.fwdMoistureLevel(),
   100
   )


   // @highlight
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() < 33) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
   }


   // @highlight
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 33 && fwdSensors.soilMoisture1.fwdMoistureLevel() < 66) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
   }


   // @highlight
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 66) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
   }
})
```


## Modify Step 3
Right now, our flood alarm alerts people if there is a flood by making the ``||fwdSensors:LED ring||`` red.


Imagine what would happen if we weren't near enough to see the LED ring. Why do you think this could be a problem? 


~hint Tell Me More!
If we weren't close enough to see the warning lights, we may not know if there's a flood!
hint~


## Modify Step 4
Let's update the code so the micro:bit makes a sound when there is a risk of flooding.


When do you think we should make the flood alarm play a sound?


~hint Tell Me More!
If the water level is more than 2/3 full, we should make a noise until the water level goes down!
hint~


## Modify Step 5
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


## Modify Step 6
Test the changes you made! Does the sound automatically play when there is a risk of flooding?


Add enough water to the container for the ``||fwdSensors:LED ring||`` to turn red. What happens?


~hint Tell Me More!


When the moisture sensor detects **more than 2/3 water**, the micro:bit should make a sound!


This helps people who are far away from the flood alarm to hear the noise and safely leave the area.
hint~


## Activity 4: Challenge
Now that we have **modified** our code to understand how our coastal flood alarm works, we're going to complete a small challenge!


## Challenge Step 1
Let's add another warning system to get people's attention.


We can use something called a ``||functions:function||`` to repeat code instructions.


~hint Tell Me More!
A function is a list of instructions that we can use again and again.
hint~


## Challenge Step 2
Let's create a new ``||functions:function||`` named **flash** using the "Make a function" button.
~hint Tell Me More~


1. Click on the ``||functions:make a function||`` block in the drawer on the lefthand side.
2. Name the function "flash" and click done.
3. Your function will appear in the workspace!
hint~


```blocks
function flash () {
   }
```


## Challenge Step 3
Which code blocks do you need to use to change the colour of the ``||fwdSensors:LED ring||``?




~hint Tell Me More!


Try using the ``||fwdSensors: set all LED ring||`` block


Set the colour to black to turn off the LEDs.
hint~


```blocks
function flash () {
   // @highlight
   fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
  }
```
## Challenge Step 4
We want our ``||fwdSensors:LED ring||`` to **pause**, turn off, and **pause** again.


What code blocks do we need to add to our ``||functions:flash||`` function?


~hint Tell Me More!


1. Add a ``||basic:pause||`` block to your ``||functions:flash||`` function before and after your LED block.
2. Set the block to **500 ms**
hint~
```blocks
function flash () {
   // @highlight
   basic.pause(500)
   fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
   // @highlight
   basic.pause(500)
}
```
## Challenge Step 5
When only want our ``||fwdSensors:LED ring||`` to flash when it is **low tide** or **high tide**


To use our ``||functions:flash||`` function, we need to add the ``||functions:call flash||`` block to our code!


Where should we put it?


~hint Tell Me More!


Use the ``||functions:call flash||`` block after setting the LEDs to green **and** after setting the LEDs to yellow.
hint~


``` blocks
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() < 33) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
       // @highlight
       flash()
   }
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 33 && fwdSensors.soilMoisture1.fwdMoistureLevel() < 66) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
       // @highlight
       flash()
   }
```


## Challenge Step 6
Remember to `|Download|` your code to test out if the LED flashes!


```blocks
function flash () {
   basic.pause(500)
   fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
   basic.pause(500)
}
basic.forever(function () {
   led.plotBarGraph(
   fwdSensors.soilMoisture1.fwdMoistureLevel(),
   100
   )
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() < 33) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
       flash()
   }
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 33 && fwdSensors.soilMoisture1.fwdMoistureLevel() < 66) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
       flash()
   }
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() >= 66) {
       fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
       music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
       music.rest(music.beat(BeatFraction.Double))
   }
})
```


## Congratulations! @showdialog
You've completed the activity!


Did anything surprise you about the project?


## Reflection @showdialog
1. How does the Micro:bit use comparisons (<,=,>) to decide how high the tide is?
2. How do functions help us to repeat instructions?
3. Think about something in this project that was tricky.
   * How did you figure it out? How did that make you feel?


## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.