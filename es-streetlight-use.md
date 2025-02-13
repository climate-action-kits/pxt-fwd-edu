# Smart Streetlights - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(100)
})
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
    basic.pause(100)
})
```

## Activity 1: Build Your Project @showdialog
Let's build a smart streetlight that is motion-activated! We are going to do this in three parts:
1. **Build** your streetlight
2. **Add code** to your streetlight to bring it to life
3. **Use** your streetlight to learn how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-render.webp" alt="Full compost tumbler render" style="display: block; width: 70%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-compost-sbs01.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
We are now ready to **use** our streetlight!

**Tutorial Tips**

1. **Follow the** steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb!**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Use Step 1
Take a close look at the streetlight you just built. Can you name the different parts you used to make it? Be specific!

~hint Tell me more!
This streetlight uses:
- a **micro:bit** that will be the "brain" of our streetlight. It will run the code that tells the streetlight how to work.
- a **sonar sensor** that can detect when an object is nearby (like a person or a car)!
- an **LED ring** that can light up. 
hint~

## Use Step 2
Think back to the lesson. Why do you think we incorporated a [**sonar sensor**](https://learn.forwardedu.com/sonar-sensor/) on our streetlight?

~hint Tell me more!
- The sonar sensor works like a bat’s echolocation! It sends out sound waves and measures how long they take to bounce back. This helps the sensor detect how far it is from objects.
- We are using a sonar sensor because we want our light to turn on when cars and people are nearby!
hint~

## Use Step 3
Take a look at the code that controls our streetlight. Read it top to bottom. Then, predict what will happen as you move your hand closer to the sonar sensor.

## Use Step 4
Let's test out the streetlight.

1. Move your hand slowly towards the sonar sensor. What happens?
2. Move your hand away from the sonar sensor. What happens?
3. Hold your hand in front of the sensor for a few seconds. What happens?

Were your predictions correct?

## Use Step 5
This project uses a **conditional statement** to decide _when_ the light should turn on.

Can you identify the conditional statement in our code?

~hint Tell me more!
- If an object is within 0.2 m (or 20 cm), then the LED ring turns on.
- Else (if nothing is nearby), then the LED ring turns off.
hint~

```block
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
```

## Use Step 6
Smart streetlights do more than just provide light—they can also share important information!

Right now, your streetlight displays the current temperature on the micro:bit screen. In real cities, smart streetlights can show the weather, display traffic warnings, advertise community events, etc.

```block
    basic.showNumber(input.temperature())
```

## Use Step 7
Now that you've tested your smart streetlight, think about how you could improve it.

~hint Tell me more!
- How long should the light stay on after detecting motion?
- Why might you change the colour of the LED ring?
- What else could a smart streetlight communicate?
hint~

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
List 2 new things you learned today. 

What is one thing you want to learn more about? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.