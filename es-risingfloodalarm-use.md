# Forward Education Flood Detection with Coastal Flood Alarms - Use Tutorial

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
})
```

## Activity 1: Build Your Project @showdialog
Let's build a flood alarm to help detect coastal flooding! We are going to do this in three parts:
1. **Build** our coastal flood alarm
2. **Add code** to bring our project to life 
3. **Use** sensors to understand how they work 

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

## Activity 3: Use Your Project @showdialog
Now that we've built our coastal flood alarm to help detect flooding, we'll start by **using** the sample code to see how it works.

As you go through the next steps:

* **Use** the instructions at the top of the screen. 
* When you are ready for more information, click **'Tell Me More!'** 
* If you need help with the code, click the **lightbulb!**

## Use Step 1
Take a close look at the flood alarm that you just built. Can you name the different parts used to make it?

~hint Tell Me More!

The coastal flood alarm uses:
* **Building blocks** to make the pier.
* **Robotic parts** to control the pier with code.
* **Sensors** to sense moisture and communicate warnings to the community.
hint~

## Use Step 2
Let's explore how these parts work together to help warn people of floods!

How do you think the flood alarm works during **low tide** and **high tide**?

~hint Tell Me More!

During low tide, the ``||fwdSensors:LED ring||`` lights up **green**

During high tide, the ``||fwdSensors:LED ring||`` lights up **yellow**

hint~

## Build Step 13 @showdialog
Let's see how our flood alarm works with water! 

Remember that our project uses electronic wires and sensors that should not get wet! If any part other than the building blocks gets wet, **turn off your project and fully dry it before continuing.**
![Build Step 13](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/es-risingfloodalarm-sbs13.webp)

## Use Step 3
The flood alarm is connected to a ``||fwdSensors:moisture sensor||`` which senses the water level in a container.

Take a look at the code. How do you think the ``||fwdSensors:LED ring||`` will act when you only pour a little water into the container?

~hint Tell Me More!

When the ``||fwdSensors:moisture sensor||`` is less than 1/3 (or 33%) submerged, the ``||fwdSensors:LED ring||`` turns green.

hint~

```blocks
basic.forever(function () {
   if (fwdSensors.soilMoisture1.fwdMoistureLevel() < 33) {
       // @highlight
       fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
   }
})
```

## Use Step 4
What do you notice happens to the ``||LED:LEDs||`` on the micro:bit as you fill the container half full?

~hint Tell Me More!
The LEDs on the micro:bit are documenting the height of the tide!

1. The ``||fwdSensors:moisture sensor||`` is filled from 0-100%
2. The ``||LED:leds||`` display the percentage that the tide has risen.

The higher the percentage, the more ``||LED:leds||`` are turned on!

hint~

```blocks
basic.forever(function () {
   // @highlight
   led.plotBarGraph(
   fwdSensors.soilMoisture1.fwdMoistureLevel(),
   100
   )  })
```

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. How does the micro:bit use comparisons (<,=,>) to decide how high the tide is?
2. What other types of alerts can you add to your flood alarm to improve the warning system even further?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.