#  Turtle-safe Beach Lights - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```

```template
fwdSensors.ledRing.fwdSetBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() < 40) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 40 && fwdSensors.solar1.fwdLightLevel() < 80) {
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xff0000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a turtle-safe beach light! We are going to do this in 4 parts:
1. **Build** our light
2. **Add code** to bring it to life
3. **Modify** our code to learn how it works
4. Complete a couple of challenges to make our light even safer for sea turtles!
   
<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-projectrender.webp" alt="projectrender" width="300"/>

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
Click the three dots beside the  ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)


## Code Step 3
Click the ``|Download|`` button to download the starter code.

## Activity 3: Modify Your Project @showdialog
We are ready to **modify** our turtle-safe beach light!<br>
**Tips**
1. Follow the instructions at the top of the screen.
2. Whenever you are ready for more information, click **‘Tell me more!’**
3. If you need help with the code, click the lightbulb!

## Modify Step 1
Let’s take a look at the instructions (aka the code!) that we’ve added to our light. This will help us understand how it works. <br>Based on the code in the workspace, can you make an initial guess regarding when the light should turn on? When should it turn off?


## Modify Step 2
Let’s test it out! Flip your project on its side so you can see the LED ring clearly. Move the palm of your hand gradually closer to the solar sensor. This simulates sunset by slowly blocking the light. What do you notice?

~hint Tell me more!
- When your hand is far from the sensor, all the LED lights on the LED ring are off.
- If your hand completely covers the sensor, all LEDs turn red.
- When your hand is close but not touching the solar sensor, only 2 LED lights turn red.
hint~

## Modify Step 3
Look back at the code in the workspace. <br> What code blocks are controlling the LEDs? What is the difference between these blocks?

~hint Tell me more!
- The ``||fwdSensors:set all ledRing LEDs to ()||`` block turns all the LEDs on or off at the same time. We can also choose a color for the lights.
- The ``||fwdSensors:set ledRing (#) to ()||`` block changes the color of one specific LED. We tell the computer which LED to light up by choosing a number from 0 to 7.
- The ``||fwdSensors:set ledRing brightness to ()||`` block tells the micro:bit how bright the lights should be when they are on.
hint~

```blocks
// @highlight
fwdSensors.ledRing.fwdSetBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() < 40) {
        // @highlight
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 40 && fwdSensors.solar1.fwdLightLevel() < 80) {
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xff0000)
    } else {
        // @highlight
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Modify Step 4
Can you identify the **conditional statement** that is controlling _when_ these LEDs turn on? <br>Check the lightbulb to see if you were right!


~hint Tell me more!
- Remember, conditional statements act as decision points or rules in our code.
- Each rule in our code is written as a "true or false" question, called a **boolean expression**. If the answer to the question is true, the computer does what the code says. If it's false, the computer checks the next rule.
hint~


```block
    // @highlight
    if (fwdSensors.solar1.fwdLightLevel() < 40) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 40 && fwdSensors.solar1.fwdLightLevel() < 80) {
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xff0000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```

## Modify Step 5
What are the _specific rules_ that help the micro:bit decide what to do?


~hint Tell me more!
- The micro:bit decides how many LEDs to turn on based on how much light is present on the beach.
- All the LEDs turn on when the light level in the environment is less than 40% (like night)! The ``||logic:<||`` is called a **comparison operator**. It compares two numbers.
- If the light level is between 40% and 80% (like dusk), then only 2 LEDs turn on. We use a **compound conditional statement** for this. It uses the ``||logic:and||`` operator to make sure both parts of the condition are true.
- If none of the above conditions are met, then all the LEDs stay off. This is like day and is the ``||logic:else||`` part of the conditional.
- This feature is important for the turtle light because it makes sure we only get the brightest light in the darkest hours.
hint~


```block
    if (fwdSensors.solar1.fwdLightLevel() < 40) {
       
    } else if (fwdSensors.solar1.fwdLightLevel() >= 40 && fwdSensors.solar1.fwdLightLevel() < 80) {
     
    } else {
   
    }
```

## Modify Step 6
It's time to customize your turtle-safe beach light. Did you know that these lights don’t have to be red? They can be any color that has a long wavelength, including orange and amber light! <br>Try changing the brightness and color of your LEDs. Then, change the specific LEDs that light up.

~hint Tell me more!
- Change the brightness by modifying the ``||fwdSensors:set ledRing brightness to ()||`` block or changing the number of LEDs that light up!
- You can change the color by clicking on the red oval and picking a new color from the grid. Choose a color that is safe for turtles! You can always change it back to red later!
- If your light is coming on too easily, you may have to change the numbers in your expressions!
- Don't forget to download your code after each change to see the impact on the beach light.
hint~

## Challenge Time! @showdialog
A big part of protecting turtles on beaches is to make sure lights are only as bright as needed. <br> Let's have _more_ control over how bright our LEDs are. Right now, our light changes based on 3 different situations. What if we add a couple more?

## Challenge Step 1
First, click the + symbol at the bottom of ``||logic:if then else||`` block. This will create another rule or condition the micro:bit can evaluate.

```block
    if (fwdSensors.solar1.fwdLightLevel() < 40) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 40 && fwdSensors.solar1.fwdLightLevel() < 80) {
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)
        fwdSensors.ledRing.fwdSetPixelColour(7, 0xff8000)
    } else if (false) {
       
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```

## Challenge Step 2

Next, drag out two ``||fwdSensors:solar1 light level %||`` blocks from the Sensors category. Grab two ``||logic:0 < 0||`` comparison blocks and one ``||logic:and||`` operator from the Logic category. <br> Try to put these blocks together to create an expression that can be evaluated in our blank condition. Check the lightbulb for the answer!


```block
    if (fwdSensors.solar1.fwdLightLevel() < 40) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 40 && fwdSensors.solar1.fwdLightLevel() < 80) {
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)
        fwdSensors.ledRing.fwdSetPixelColour(7, 0xff8000)
    } else if (fwdSensors.solar1.fwdLightLevel() < 0 && fwdSensors.solar1.fwdLightLevel() < 0) {
       
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```

## Challenge Step 3
Change the numbers and comparison operators in your expressions to make sure the LEDs respond to all environmental light levels. Check the lightbulb for an example, but feel free to choose your own numbers!


```block
    if (fwdSensors.solar1.fwdLightLevel() < 25) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 25 && fwdSensors.solar1.fwdLightLevel() < 50) {
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)
        fwdSensors.ledRing.fwdSetPixelColour(7, 0xff8000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 50 && fwdSensors.solar1.fwdLightLevel() < 75) {
       
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```

## Challenge Step 4
What should happen if this new expression is evaluated to be true? <br> Well, we want to make a _very_ dim light. There are a few ways to do this, so give it a try! After you test your idea, check the lightbulb for our solution. How is it different from yours?

```block
    if (fwdSensors.solar1.fwdLightLevel() < 25) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 25 && fwdSensors.solar1.fwdLightLevel() < 50) {
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)
        fwdSensors.ledRing.fwdSetPixelColour(7, 0xff8000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 50 && fwdSensors.solar1.fwdLightLevel() < 75) {
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)


    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```


## Challenge Step 5
Now our LEDs respond very sensitively to different environmental light levels. Can you think of anything else we can use to control beach lights?

~hint Tell me more!
- We could code the LEDs to only turn on when people are nearby! Sonar sensors detect the distance of objects in their environment. We can use this technology to sense how close a person is to the beach light!
- Connect the sonar sensor to your project and try to write your own conditional statement to check if people are nearby.
- Don't forget to download and test your code as you work!
hint~

## Challenge Step 6
We want to know if people are close _before_ we think about environmental light levels.<br>

We’ll need another conditional statement for this. Drag another ``||logic:if then else||`` block into the workspace. Wrap another ``||basic:forever||`` loop around this for now.


~hint Tell me more!
- If you place your conditional statement in the workspace without a ``||basic:forever||`` loop, it will be hashed out because the micro:bit doesn't know when to evaluate the question.
- When we put it inside a loop, it makes logical sense to the micro:bit, and as a bonus, we can see the blocks better.
hint~


```blocks
basic.forever(function () {
    if (true) {
       
    } else {
       
    }
})
```


## Challenge Step 7
Now we need to create a new expression to see if people are closer than 0.1 m (10 cm) to our beach light. <br>
Drag a ``||logic:0 < 0||`` block from the Logic category. Add a ``||fwdSensors:sonar1 distance (m)||`` block to the left side of this block. Change the right side to say 0.1.


```blocks
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistance() < 0.1){
       
    } else {
       
    }
})
```


## Challenge Step 8
The lights should be off if there are no people on the beach. To do this, add a ``||fwdSensors:set all ledRing LEDs to black||`` block after ``||logic:else||``.


```blocks
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistance() < 0.1) {
       
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```


## Challenge Step 9
The second anyone _does_ move close to the beach light (< 10 cm), we want to start asking just _how much_ light is needed. This will depend on how dark it is out<br>
We’ve already done this! We can drag our original conditional statements inside this new conditional statement.


~hint Tell me more!
- This is called a **nested conditional**. The first conditional must be true in order for any of the nested conditions to be tested.
- In other words, the solar expressions will only ever be evaluated if people are close. Otherwise, the micro:bit jumps right to the final else statement and keeps the LEDs off.
- Don't forget to delete the extra ``||basic:forever||`` loop now that we are done with it.
hint~


```blocks
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistance() < 0.1) {
        // @highlight
        if (fwdSensors.solar1.fwdLightLevel() < 25) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
        } else if (fwdSensors.solar1.fwdLightLevel() >= 25 && fwdSensors.solar1.fwdLightLevel() < 50) {
            fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)
            fwdSensors.ledRing.fwdSetPixelColour(7, 0xff8000)
        } else if (fwdSensors.solar1.fwdLightLevel() >= 50 && fwdSensors.solar1.fwdLightLevel() < 75) {
            fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)
        } else {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        }
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Explore
Unplug your light from the computer and try moving to different areas. How does the light respond? <br> If nothing happens, what might we have to change?


~hint Tell me more!
- If the light is not responding, it might be because your room is too bright or because nothing is close to the sonar sensor. In both conditions, the light stays off to save the turtles!
- You could try to find a darker room, move something close to the sonar sensor, or change the values in the expressions so the light is triggered more easily.
hint~


## Congratulations! @showdialog
You've completed the activity!


## Reflection @showdialog
Think about something in this project that challenged you. <br>How did you overcome the challenge? How did that make you feel?


## Reflection @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.


