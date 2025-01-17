# Forward Education Smart Warehouse Vehicle - Use Tutorial

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
3. **Use** or test out our line follower to learn how it works
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

## Activity 3: Use Your Project @showdialog
Now that we've built our smart warehouse vehicle, we'll start by **using** sample code to see how it works.

As you go through the next steps:
* **Use** the instructions at the top of the screen.
* When you are ready for more information, click **'Tell Me More!'**
* If you need help with the code, click the **lightbulb**!

## Use Step 1
Think back to the lesson about automation in industrial warehouses. Our smart warehouse vehicle is an example of an [automated guided vehicle (AGV)](https://youtu.be/qahujJ-8vdk?si=2v8G7Mf5MFFAhvWM).

What should it be able to do?

~hint Tell Me More!
To move products around a warehouse, the smart warehouse vehicle should be able to:
1. **Follow** a pre-defined path (or black line)
2. **Communicate** the direction it will be travelling in

Different warehouse automation products may have more features, but these are the minimum requirements.
hint~

## Use Step 2
Take a look at the physical project you just built.

What robotic components do you notice? How do you think they’ll work together to make the smart warehouse vehicle function as expected?

~hint Tell Me More!
The smart warehouse vehicle has:

* Two ``||fwdMotors:continuous servo motors||`` that rotate a full 360 degrees. They will spin the wheels to allow the vehicle to drive forward.

* One ``||fwdSensors:line follower||`` with three sensors to identify black and white. They will identify if the robot is on the line, drifting one way or the other, and if it is at the end of a path.

* One ``||fwdSensors:LED ring||`` to light up the path to help the line follower see black and white.

* One ``||fwdSensors:sonar sensor||`` that you may use to see if there is an object in the vehicle’s way.

* These parts are all connected to the **breakout board** through **cables**.

* Finally, the breakout board is connected to the **micro:bit** which holds all the code that will tell our motors what to do and when to do it!

hint~

## Use Step 3
Let’s test it out!

Unplug your project from your computer, place it on a straight black line, and press **B**. What happens?

~hint Tell Me More!

The micro:bit collects data from the ``||fwdSensors:line follower||``. The criteria for turning the ``||fwdMotors:motors||`` is:

* ``||logic:If||`` the left OR right side of the line senses the white paper, turn the motor in the opposite direction.

* This is known as a **conditional expression**.

* It is a **boolean**, meaning it must be evaluated as ``||logic:true||`` or ``||logic:false||``.

hint~

```blocks
input.onButtonPressed(Button.B, function () {
//@highlight
  IsDrivingEnabled = true
})
```

## Use Step 4
Can you explain how the vehicle can drive along the line?

~hint Tell Me More!
* We are controlling the vehicle with a **nested conditional statement**.
* Nested conditional statements are "**if-then**" rules used in coding for programs with **many paths**. 
* They add checkpoints to our programs and tell the computer what to do in different situations, like showing a different message if it is sunny, raining, or cloudy outside.
hint~

## Use Step 5
Can you identify one of the **nested conditionals** that helps the vehicle navigate a straight line?

What _criteria_ help the micro:bit decide what to do?

~hint Tell Me More!
There are several conditionals nested in this code!

1. If the **B button is pressed** > set driving enabled to true
2. If the vehicle **senses a line** > signal using the LEDs on the micro:bit and drive forward.
3. If the vehicle senses that it’s drifted to the **right or left of the line** > signal using the LEDs on the micro:bit and turn 2 degrees toward the line
4. If the vehicle **still isn’t on the line** > signal with the LEDs on the micro:bit and turn 1 degree toward the line
5. If the vehicle senses the **end of the line** > signal using the LEDs on the micro:bit and stop driving
hint~

```blocks
basic.forever(function () {
  if (IsDrivingEnabled == true) {
  //@highlight
      if (fwdSensors.line1.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss) && fwdSensors.line3.fwdIsLineSensorState(fwdSensors.LineSensorState.Miss)) {
          basic.showArrow(ArrowNames.North)
          fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 20)
```

## Challenge Time! @showdialog
Now that we have **used** code to create a smart warehouse vehicle that **follows a straight line** and **signals its direction**, we need to collect data to evaluate what other types of lines it can follow!

## Challenge Step 1
Based on how the vehicle acted the first time you tested it, how do you think the vehicle will perform on the following types of lines:

1. A straight line
2. A straight line with a 45-degree turn
3. A wide curved line

Write your prediction down!

## Challenge Step 2
Now it’s time to test your prediction!

Test each of the three courses 5 times and document your findings in a table.

~hint Tell Me More!
You may wish to collect data about:

1. How long does it take to complete the course?
2. How many times does the vehicle need to adjust its position?
3. How many times did the vehicle successfully complete each course?
hint~

## Challenge Step 3
Does the vehicle drift to one side more often than the other? Why do you think this is?

Is there any part of your course that your robot gets “stuck” every time?

Try making a new line for your robot to follow what you’ve learned from your data.

~hint Tell Me More!
Line-following vehicles need lots of testing to make the path more reliable!

You may have found that a long, straight line can be followed more reliably than a tightly curved line or a sharp, 90-degree turn.
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