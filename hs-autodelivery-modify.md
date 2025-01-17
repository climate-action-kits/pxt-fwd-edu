# Forward Education Smart Warehouse Vehicle - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
input.onButtonPressed(Button.A, function () {
  IsDrivingEnabled = false
})
input.onButtonPressed(Button.B, function () {
  IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
basic.forever(function () {
  if (IsDrivingEnabled == false) {
      fwdMotors.stop()
      basic.showIcon(IconNames.No)
  }
  if (IsDrivingEnabled == true) {
      if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
          basic.showArrow(ArrowNames.North)
          fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
      } else if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) || fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
          basic.showLeds(`
              . . # . .
              . . . # .
              . . . . #
              . . . # .
              . . # . .
              `)
          fwdMotors.turn(2)
          if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit))) {
              basic.showArrow(ArrowNames.East)
              fwdMotors.turn(1)
          }
      } else if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) || fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
          basic.showLeds(`
              . . # . .
              . # . . .
              # . . . .
              . # . . .
              . . # . .
              `)
          fwdMotors.turn(-2)
          if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit))) {
              basic.showArrow(ArrowNames.West)
              fwdMotors.turn(-1)
          }
      } else {
          fwdMotors.stop()
          basic.showIcon(IconNames.Square)
      }
  }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a smart warehouse vehicle! We are going to do this in four parts:
1. **Build** our smart warehouse vehicle
2. **Add code** to make our project move
3. **Modify** our project to learn about other sensors
4. Apply what we learned with a small **challenge**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-render.webp" alt="Full smart warehouse vehicle render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![Build Step 1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs01.webp)

## Build Step 2 @showdialog
![Build Step 2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs02.webp)

## Build Step 3 @showdialog
![Build Step 3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs03.webp)

## Build Step 4 @showdialog
![Build Step 4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs04.webp)

## Build Step 5 @showdialog
![Build Step 5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs05.webp)

## Build Step 6 @showdialog
![Build Step 6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs06.webp)

## Build Step 7 @showdialog
![Build Step 7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs07.webp)

## Build Step 8 @showdialog
![Build Step 8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs08.webp)

## Build Step 9 @showdialog
![Build Step 9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs09.webp)

## Build Step 10 @showdialog
![Build Step 10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs10.webp)

## Build Step 11 @showdialog
![Build Step 11](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs11.webp)

## Build Step 12 @showdialog
![Build Step 12](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs12.webp)

## Build Step 13 @showdialog
![Build Step 13](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs13.webp)

## Build Step 14 @showdialog
![Build Step 14](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs14.webp)

## Build Step 15 @showdialog
![Build Step 15](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs15.webp)

## Build Step 16 @showdialog
![Build Step 16](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs16.webp)

## Build Step 17 @showdialog
![Build Step 17](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs17.webp)

## Build Step 18 @showdialog
![Build Step 18](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-autodelivery-sbs18.webp)

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
We have a smart warehouse vehicle that **follows a straight line** and **signals its direction** let's explore how to optimize our sensors by **modifying** our code!

As you go through the next steps:
* Use the instructions at the top of the screen to **Modify** your code.
* When you are ready for more information, click **'Tell Me More!'**
* If you need help with the code, click the **lightbulb**!

## Modify Step 1
Think back to the lesson about automation in industrial warehouses. Our smart warehouse vehicle is an example of an [automated guided vehicle (AGV)](https://youtu.be/qahujJ-8vdk?si=2v8G7Mf5MFFAhvWM).

What should it be able to do?

~hint Tell Me More!
To move products around a warehouse, the smart warehouse vehicle should be able to:
1. **Follow** a pre-defined path (or black line)
2. **Communicate** the direction it will be travelling in

We’ll also **modify** our code to enhance our project even further by:
3. **Sense** when an obstacle is in its path and stop driving
hint~

## Modify Step 2
Let’s test it out!

Unplug your project from your computer, place it on a straight black line, and press **B**. What happens?

~hint Tell Me More!

* The micro:bit collects data from the ``||fwdSensors:line follower||``. The criteria for turning the ``||fwdMotors:motors||`` is:

* ``||logic:If||`` the left OR right side of the line senses the white paper, turn the motor in the opposite direction.

* This is known as a **conditional expression**.

* It is a **boolean**, meaning it must be evaluated as ``||logic:true||`` or ``||locig:false||``.

hint~

```blocks
input.onButtonPressed(Button.B, function () {
//@highlight
 IsDrivingEnabled = true
})
```

## Modify Step 3

What will happen when we increase the driving speed in the ``||fwdMotors:drive forward||`` block from **20** to **40**?

Press the ``|Download|`` button to update the code on your micro:bit, set your vehicle down on the line again, and press **B** to test it.

~hint Tell Me More!
The vehicle is moving forward twice as fast!
hint~

```block
fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 40)
```
## Modify Step 4
Did you notice if the speed change impacted the reliability of the following line?

How many times did the vehicle have to re-adjust before reaching the end of the straight line?

~hint Tell Me More!
It takes time for the micro:bit to process the data collected from the line sensor. The faster the vehicle moves, the less time the micro:bit has to sense where it is in relation to the line.
hint~

## Modify Step 5

Updating our program doesn’t _always_ make it more efficient. How could you improve or adjust the code so the vehicle still senses the line properly?

Adjust your code and document how many times the vehicle had to re-adjust before reaching the end of the straight line.

~hint Tell Me More

Remember to ``|download|`` your code to your micro:bit after editing your code!

We could increase the accuracy of our line follower in a few ways:
* Set the ``||fwdMotors:drive forward||`` block back to 20 (or another number!)
* Add a ``||basic:pause||`` block after each conditional statement

hint~

```blocks
basic.forever(function () {
   else if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) || fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
           basic.showLeds(`
               . . # . .
               . . . # .
               . . . . #
               . . . # .
               . . # . .
               `)
           fwdMotors.turn(2)
           //@highlight
           basic.pause(1000)
           if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit))) {
               basic.showArrow(ArrowNames.East)
               fwdMotors.turn(1)
           //@highlight
               basic.pause(1000)
           }
       }
   }
```

## Modify Step 6
Let’s test another component that our Smart Warehouse Vehicle is using!

How do you think that the ``||fwdSensors:LED ring||`` is helping our warehouse vehicle drive on the black line?

~hint Tell Me More!
Our line follower senses the contrast between black and white.

The ``||fwdSensors:LED ring||`` helps light up the **black** line on the **white** paper in different lighting conditions.

hint~

```block
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
```
## Modify Step 7
Based on your understanding of how the vehicle acted the first time you tested it, how do you think it will navigate a black line when the LED is set to different lighting conditions?

1. Set the ``||fwdSensors:LED ring||`` to white
2. Set the ``||fwdSensors:LED ring||`` to red
3. Turn the ``||fwdSensors:LED ring||`` off
4. Turn off the lights in the room with the ``||fwdSensors:LED ring||`` off

Write your prediction down!

## Modify Step 8
Now it’s time to test your prediction!

Test each of the four lighting conditions 5 times on the straight line and document your findings in a table.

Remember to ``|download|`` the code each time you change the lighting conditions.

~hint Tell Me More!
You may wish to collect data about:

1. How long does it take to complete the course?
2. How many times does the vehicle need to adjust its position?
3. How many times did the vehicle successfully complete the course?
hint~

## Challenge Time! @showdialog

Our project build includes a ``||fwdSensors:sonar||`` sensor we’re not currently using.

Now that our smart warehouse vehicle drives on a line in different lighting conditions, add the ability to sense its surroundings and **wait until the path is clear**!

## Challenge Step 1

Think about where in your ``||logic:conditional statement||`` you should add the ``||fwdSensors:sonar||`` sensor so that your vehicle detects an obstacle and safely waits until the path is clear.

Remember to ``|download|`` your code once you add the sonar block to your conditional statement.

~hint Tell Me More!

The ``||fwdSensors:sonar||`` sensor should only tell the vehicle to drive forward if:

* Obstacles are **Over** a certain distance in front of your vehicle.

* **After** ``||fwdMotors:IsDrivingEnabled||`` is set to true

* **Before** driving forward or turning on a line.

hint~

```block
fwdSensors.sonar1.fwdDistancePastThreshold(0, fwdSensors.ThresholdDirection.Over)
```

## Challenge Step 2
Test your vehicle again on the straight line. Does it act the way you expected it to?

Did you include a way for your vehicle to signal that an obstacle is in the way?

~hint Tell Me More!

Click on the lightbulb for one example of how to add a ``||fwdSensors:sonar||`` sensor and signal to our code!

hint~

```blocks
basic.forever(function () {
  if (IsDrivingEnabled == true) {
   //@highlight
      if (fwdSensors.sonar1.fwdDistancePastThreshold(1, fwdSensors.ThresholdDirection.Over)) {
          if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
              basic.showArrow(ArrowNames.North)
              fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
          } else if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) || fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
              basic.showLeds(`
                  . . # . .
                  . . . # .
                  . . . . #
                  . . . # .
                  . . # . .
                  `)
              fwdMotors.turn(2)
              if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit))) {
                  basic.showArrow(ArrowNames.East)
                  fwdMotors.turn(1)
              }
          } else if (fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) || fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit)) {
              basic.showLeds(`
                  . . # . .
                  . # . . .
                  # . . . .
                  . # . . .
                  . . # . .
                  `)
              fwdMotors.turn(-2)
              if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && (fwdSensors.line2.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Hit))) {
                  basic.showArrow(ArrowNames.West)
                  fwdMotors.turn(-1)
              }
          } else {
              fwdMotors.stop()
              basic.showIcon(IconNames.Square)
          }
      }
      //@highlight
      else {
         //@highlight
          basic.showIcon(IconNames.Sad)
          //@highlight
          fwdMotors.stop()
      }
  }
})
```

## Challenge Step 3
Now that your vehicle detects an obstacle, we need to decide **how far away** it should stop from an obstacle!

Using your ruler, measure the distance the vehicle should detect. Our vehicle uses metres as a unit of measurement. You may need to convert your measurement.

~hint Tell Me More!
For example: If we want the vehicle to sense obstacles under 30 cm, our code block should be 0.3 m.

If your vehicle is plugged into your computer, you can use the **live visualizer** to see how far away your sonar sensor detects objects!

Remember to ``|download|`` the code each time you change the code.
hint~

```blocks
basic.forever(function () {
  if (IsDrivingEnabled == true) {
  //@highlight
      if (fwdSensors.sonar1.fwdDistancePastThreshold(.3, fwdSensors.ThresholdDirection.Over)) {
          if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
              basic.showArrow(ArrowNames.North)
              fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
          }
      }
      else {
          basic.showIcon(IconNames.Sad)
          fwdMotors.stop()
      }
  }
})
```

## Challenge Complete!
You did it!

Think about how you would test the effectiveness of the sonar sensor. What tests should you complete to verify that your vehicle still follows a line?

~hint Tell Me More!
You may wish to think about:

* How far away should the ``||fwdSensors:sonar||`` sensor detect?

* How should it signal that it senses an obstacle?

* How should you test that the existing line follower is still accurate?

hint~

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
How did using predictions and data collection help you better understand your code?

What differences did you find in the accuracy of the line follower?

What else do you want to modify to enhance your vehicle build even more?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.