# Safe Animal Crossings - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
let animalCount = 0
input.onButtonPressed(Button.A, function () {
    fwdMotors.rightServo.fwdSetAngle(90)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.rightServo.fwdSetAngle(0)
})
input.onButtonPressed(Button.AB, function () {
    animalCount += 1
})
basic.forever(function () {
    basic.showNumber(animalCount)
})
basic.forever(function () {
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(70, fwdSensors.ThresholdDirection.Under)) {
    } else {
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a wildlife crossing that has a bridge and a tunnel! We will do this in three parts:
1. **Build** your crossing
2. **Add code** to bring it to life
3. **Modify** your crossing to learn how it works
4. Complete a **challenge** to improve it

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-render.webp" alt="Full animal crossing render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs01.webp)

## Build Step 2 @showdialog
![sbs2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs02.webp)

## Build Step 3 @showdialog
![sbs3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs03.webp)

## Build Step 4 @showdialog
![sbs4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs04.webp)

## Build Step 5 @showdialog
![sbs5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs05.webp)

## Build Step 6 @showdialog
![sbs6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs06.webp)
## Build Step 7 @showdialog
![sbs7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs07.webp)

## Build Step 8 @showdialog
![sbs8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs08.webp)

## Build Step 9 @showdialog
![sbs9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs09.webp)

## Build Step 10 @showdialog
![sbs10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs10.webp)

## Build Step 11 @showdialog
![sbs11](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs11.webp)

## Build Step 12 @showdialog
![sbs12](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs12.webp)

## Build Step 13 @showdialog
![sbs13](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs13.webp)

## Build Step 14 @showdialog
![sbs14](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs14.webp)

## Build Step 15 @showdialog
![sbs15](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs15.webp)

## Build Step 16 @showdialog
![sbs16](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs16.webp)

## Build Step 17 @showdialog
![sbs17](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs17.webp)

## Build Step 18 @showdialog
![sbs18](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs18.webp)

## Build Step 19 @showdialog
![sbs19](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs19.webp)

## Build Step 20 @showdialog
![sbs120](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs20.webp)

## Build Step 21 @showdialog
![sbs21](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs21.webp)

## Build Step 22 @showdialog
![sbs22](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs22.webp)

## Build Step 23 @showdialog
![sbs23](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-landbridge-sbs23.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 2
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Modify Your Project @showdialog
We are now ready to **modify** our wildlife crossing!

**Tutorial Tips**

1. Follow the steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!
4. After each change, ``|Download|`` the new code to your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modify Step 1
Take a close look at the wildlife crossing you built. Then, review the code below.

## Modify Step 2
What do you think will happen when you:
- press A
- press B
- press A+B together?

Try it now to see if your predictions were correct!

~hint Tell me more!
- Pressing A, B, and A+B are **events** that make the gate move or the animal count change.
- When we press A, the motor turns to 90° and the gate opens.
- When we press B, the motor turns to 0° and the gate closes.
- When we press A+B, the number on the micro:bit goes up by 1. This is how we count the animals crossing.
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    fwdMotors.rightServo.fwdSetAngle(90)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.rightServo.fwdSetAngle(0)
})
input.onButtonPressed(Button.AB, function () {
    animalCount += 1
})
```

## Modify Step 3
Right now, we need to press buttons to open and close the gate or count the animals. 

Imagine what would happen if we weren't there to watch and press the buttons. Why do you think this could be a problem?

~hint Tell me more!
- **Gate:** If no one were there, the gate would stay open or closed. When it's left closed, some larger animals might be stuck waiting. When it's left open, predators could trap their prey in the tunnel.
- **Animal Counting:** If no one were there to press the buttons, the animal count would be wrong. Then, we wouldn’t have the right data to know if the crossing was helping keep them safe!
hint~

## Modify Step 4
Pressing A or B *manually* opens and closes the gate.

Instead, we could make the gate *automatically* open or close using a sensor and a **conditional statement**. 

~hint Tell me more!
- A conditional statement tells the micro:bit to check the situation and then decide what to do.
hint~

## Modify Step 5
Let's change the code so the solar sensor controls the gate. Instead of pressing buttons, the sensor will check how much light there is and decide whether or not to open the gate.

Why do you think we want to use light to control the gate? Take a guess!

~hint Tell me more!
- We close the gate at night (when it is dark!) to protect prey animals. Large predators that hunt at night, like nocturnal animals, might use the tunnel to trap their prey. Closing the gate at night keeps the prey animals safe.
- During the day, it is bright outside. Prey animals are safer because nocturnal predators are less active, so the gate can stay open for more animals to use. 
hint~

## Modify Step 6
Look at the unfinished conditional statement below. 

Trying moving the ``||fwdMotors:set rightServo to||`` blocks into the ``||logic:if then else||`` block. Your goal is to make the gate open during the day (when it's bright outside!)

Then, check the lightbulb for the correct answer!

```block
basic.forever(function () {
    // @highlight
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(70, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.rightServo.fwdSetAngle(0)
    } else {
        fwdMotors.rightServo.fwdSetAngle(90)
    }
})
```

## Modify Step 7
Test the changes you made! Does the gate open and close automatically based on the light level?

Cover the solar sensor with your hand. What happens?

~hint Tell me more!
- When you cover the sensor, it’s like it’s nighttime. The gate should close to keep prey animals safe from predators that hunt at night.
hint~

```block
basic.forever(function () {
    if (fwdSensors.solar1.fwdIsLightLevelPastThreshold(70, fwdSensors.ThresholdDirection.Under)) {
        // @highlight
        fwdMotors.rightServo.fwdSetAngle(0)
    } else {
        fwdMotors.rightServo.fwdSetAngle(90)
    }
})
```

## Challenge Time! @showdialog
Let’s write another conditional statement to automatically count animals when they cross using the sonar sensor. 

Remember, sonar sensors measure how close objects are to them.

## Challenge Step 1
Drag a new ``||logic:if then||`` block and a ``||fwdSensors:sonar1 distance is over||`` block into the workspace.

## Challenge Step 2
Try to add these blocks to your code. Your goal is to write a new conditional statement that increases our animal count whenever something gets close to the sonar sensor.

Check the lightbulb for the answer!

~hint Tell me more!
- The conditional statement checks if something is close to the sensor (like an animal about to cross). 
- If something is close (less than 0.1m or 10 cm), the animal count goes up by 1.
hint~

```blocks
basic.forever(function () {
    basic.showNumber(animalCount)
    // @highlight
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.1, fwdSensors.ThresholdDirection.Under)) {
        animalCount += 1
    }
})
```

## Challenge Step 3
Test it out! Put your hand close to the solar sensor to mimic an animal crossing. 

Did the number on the micro:bit increase?

## Challenge Step 4
If the number increases by more than 1 each time, add a ``||basic:pause||`` block after the ``||variables:change animalCount by||`` block. 

This will stop the sensor from counting the same animal twice.

```blocks
basic.forever(function () {
    basic.showNumber(animalCount)
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.1, fwdSensors.ThresholdDirection.Under)) {
        animalCount += 1
        // @highlight
        basic.pause(1000)
    }
})
```

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
Think about something in this project that was tricky. 

How did you figure it out? How did that make you feel?

What is one thing you could do to improve your animal crossing?

## Reflection @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.
