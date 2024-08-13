#  Turtle-safe Beach Lights - Use Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```

```template
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() <= 40) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a turtle-safe beach light! We are going to do this in 3 parts:
1. **Build** our light
2. **Add code** to bring it to life
3. **Use** or test out the light to learn how it works <br> 
<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-projectrender.webp" alt="projectrender" width="400"/>

## Build Step 1 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs01.webp)

## Build Step 2 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs02.webp)

## Build Step 3 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs03.webp)

## Build Step 4 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs04.webp)

## Build Step 5 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs05.webp)

## Build Step 6 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs06.webp)

## Build Step 7 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs07.webp)

## Build Step 8 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs08.webp)

## Build Step 9 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs09.webp)

## Build Step 10 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs10.webp)

## Build Step 11 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs11.webp)

## Build Step 12 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs12.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code! <br> The code will be the instructions that tell our micro:bit what to do.


## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.
<br><img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" width="400">


## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Code Step 3
Click the ``|Download|`` button to download the starter code.

## Activity 3: Use Your Project @showdialog
We are ready to **use** our turtle-safe beach light! <br> 
**Tips**
1. Follow the instructions at the top of the screen.
2. Whenever you are ready for more information, click **‘Tell me more!’**
3. If you need help with the code, click the lightbulb!

## Use Step 1
Take a look at your turtle-safe beach light. Can you name all of its physical parts?

~hint Tell me more!
Our light has:
- **Building blocks**: one baseplate, three white medium frames, two small frames, one circle, two cube connectors, and two back-to-back connectors
- **Robotic components**: a micro:bit, a breakout board, a battery, an LED ring, and a solar sensor
- **Cable connectors**: one short and one long
hint~


## Use Step 2
What do you think is the purpose of each part? How do they interact with one another?

~hint Tell me more!
- The **building blocks** are like the bones of our project, providing structure, support, and basic function!
- The **micro:bit** is like the brain of our project. It stores all the code (aka instructions!) that tells our light how to operate.
- The **breakout board** sends these instructions from the micro:bit to the **solar sensor** and **LED ring** through **cables**. The sensor is similar to an organ like our eyes, while the LED ring acts like a limb.
- The **battery** on the breakout board powers our project when it's not plugged into the computer. It’s like the project’s heart!
hint~

## Use Step 3
Let’s take a look at the instructions (aka the code!) that we’ve added to our light. This will help us understand how it works.<br>
Based on the code in the workspace, can you make an initial guess when the light should turn on? When will it turn off?


## Use Step 4
Let’s test it out! Try placing your hand over the solar sensor to block the light and simulate nighttime. What happens?

~hint Tell me more!
- When our hands are over the sensor, the red LEDs turn on. When our hands are removed, the LEDs turn off.
- We are controlling the light with a **conditional statement**.
- Conditional statements are "if-then" rules used in coding. They add checkpoints to our programs and tell the computer what to do in different situations, like showing a birthday message if it's your birthday.
hint~


## Use Step 5
Can you identify the conditional statement that is controlling our LEDs? <br> What rules does the micro:bit use to decide when the LEDs are on?

~hint Tell me more!
- The micro:bit collects data from the solar sensor. It will turn on the beach light when environmental light levels are equal to or below 40%.
- This is known as a **boolean expression**. Boolean expressions must be evaluated to be either true or false. If the boolean is true, the micro:bit will run the code below. If not, it will jump to the ``||logic:else||`` statement.
hint~

```block
    if (fwdSensors.solar1.fwdLightLevel() <= 40) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```

## Use Step 6
Think about the physical build and the code behind this light. In your opinion, what features make it “turtle-safe”?


~hint Tell me more!
- The white medium frames keep the light low.
- The green circle and short frames direct the light downwards and prevent it from spreading.
- The red LED lights are hard for sea turtles to see.
- The conditional statement ensures the light is only turned on when absolutely necessary.
hint~


## Use Step 7
Unplug your light from the computer and try moving to different areas. <br> How does the light respond?


## Use Step 8
Based on what you've learned, how might you improve the design of the beach light?

~hint Tell me more!
You might change the physical build by covering the green building blocks with black construction paper to create a better light shield.
You might change the code so that:
- the LEDs turn on at a lower percentage of sunlight
- the brightness of the LEDs changes based on how dark it is outside
- the light only turns on when people are nearby
hint~

## Congratulations! @showdialog
You've completed the activity! <br> Did anything surprise you about this project?


## Reflection @showdialog
List 2 new things you learned today. <br>What is one thing you want to learn more about?

## Reflection @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.


