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

## Smart Streetlights - Use Tutorial @showdialog
Today, we are building a **smart streetlight**! 

Let's add some **starter code** to make sure our streetlight is activated by nearby movement!

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-smartstreetlight-render.webp" alt="Full streetlight render" style="display: block; width: 70%; margin:auto;">

## Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Step 3
Click the ``|Download|`` button to download the code to your project.

## Step 4
Look at the streetlight you built. Can you name the different parts you used to make it? Be specific!

~hint Tell me more!
This streetlight uses:
- a **micro:bit** that will be the "brain" of our streetlight. It will run the code that tells the streetlight how to work.
- a **sonar sensor** that can detect when an object is nearby (like a person or a car)!
- an **LED ring** that can light up. 
hint~

## Step 5
Think back to the lesson. Why do you think we added a [**sonar sensor**](https://learn.forwardedu.com/sonar-sensor/) to our streetlight?

~hint Tell me more!
- The sonar sensor works like a bat’s echolocation! It sends out sound waves and measures how long they take to bounce back. This allows the sensor to detect how far it is from objects.
- We are using a sonar sensor because we want our light to turn on when cars and people are nearby!
hint~

## Step 6
Take a look at the code that controls our streetlight. Read it top to bottom. Then, predict what will happen as you move your hand closer to the sonar sensor.

## Step 7
Next, test out the streetlight.

1. Move your hand slowly towards the sonar sensor. What happens?
2. Move your hand away from the sonar sensor. What happens?
3. Hold your hand in front of the sensor for a few seconds. What happens?

Were your predictions correct?

## Step 8
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

## Step 9
Right now, your streetlight displays the current temperature on the micro:bit's screen. In real cities, smart streetlights can show the weather, display traffic warnings, advertise community events, etc.

```block
    basic.showNumber(input.temperature())
```

## Step 10
Now that you've tested your smart streetlight, think about how you might _improve_ it.

~hint Tell me more!
Consider the following:
- How long should the light stay on _after_ detecting motion?
- Why might you change the _colour_ of the LED ring?
- What else could a smart streetlight communicate?
hint~

## Reflection
Before we wrap up:
- List 2 new things you learned today. 
- What is one thing you want to learn more about? 

## Finished
Click the ``|Done|`` button to finish this tutorial.