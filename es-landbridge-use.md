# Safe Animal Crossings - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
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
```

## Activity 1: Build Your Project @showdialog
Let's build a wildlife crossing that has a bridge and a tunnel! We are going to do this in three parts:
1. **Build** your crossing
2. **Add code** to your crossing to bring it to life
3. **Use** your crossing to learn how it works

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

## Activity 3: Use Your Project @showdialog
We are now ready to **use** our wildlife crossing!

**Tutorial Tips**

1. Follow the steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Use Step 1
Take a close look at the wildlife crossing you just built. Can you name the different parts used to make it?

~hint Tell me more!
This wildlife crossing uses:
- **Building blocks** to make the bridge and tunnel.
- **Robotic parts** to control the crossing with code.
- **Motors** to open and close the gate.
- **Sensors** to sense light and movement nearby.
hint~

## Use Step 2
Let's explore how these parts work together to help animals cross safely!

How do you think big animals use the crossing compared to small animals? Why do you think there is a gate?

~hint Tell me more!
- The building blocks create the bridge and tunnel, giving animals a safe way to go over or under the road.
- Big animals might choose to use the bridge because it's wide and open.
- Smaller animals might feel safer using the tunnel because it's more closed and hidden.
- The gate keeps small animals safe by stopping predators from following them into the tunnel.
hint~

## Use Step 3
The gate is connected to a positional servo motor, which moves the gate to different angles (or positions!) Let’s unpack our code to see how it works.

How do you think we can raise and lower the gate? Try it now!

~hint Tell me more!
- Pressing A and B are separate **events** that make something else happen.
- When you press A, the servo motor moves the gate to 90°. The gate is opened.
- When you press B, the servo motor moves the gate to 0°. The gate is closed.
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    fwdMotors.rightServo.fwdSetAngle(90)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.rightServo.fwdSetAngle(0)
})
```
## Use Step 4
We need a way to count how many animals use the crossing.

Take a look at the code. How do you think we can keep track of the number of animals?

~hint Tell me more!
- Each time an animal crosses, you can press A+B together to increase the animal count by 1. This number is stored in a **variable**.
- A **variable** is like a box that holds a number. Here, it will track the number of animals that have crossed.
hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    animalCount += 1
})
```

## Use Step 5
Let’s test what happens when you press A+B several times in a row. What do you think will show up on the micro:bit’s LEDs?

Try it now! Were you right?

~hint Tell me more!
- Each time you press A+B, you should see the number on the micro:bit’s display increase by 1.
- The micro:bit *always* shows the number inside the variable on the LED screen. This is because the ``||basic:show number||`` block is in a ``||basic:forever||`` **loop**.
hint~

```blocks
basic.forever(function () {
    basic.showNumber(animalCount)
})
```
## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
Think about the following questions:

1. Why do you think scientists would want to count the number of animals that use the crossing?
2. How could sensors be used to automatically track animals when they cross?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.