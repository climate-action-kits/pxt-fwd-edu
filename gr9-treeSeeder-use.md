# Replanting Our Forests with Automated Tree Seeders - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        basic.pause(1000)
        fwdMotors.stop()
        fwdMotors.middleServo.fwdSetAngle(0)
        basic.pause(250)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(250)
    }
    fwdMotors.stop()
})
fwdMotors.middleServo.fwdSetAngle(45)
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
10
)
```

## Activity 1: Build Your Project @showdialog
Let's build an automated tree seeder. We are going to do this in four parts:
1. **Build** the automated tree seeder
2. **Add code** to make it move
3. **Use** the tree seeder to learn how it works
4. Become a company owner and **complete a math challenge** 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-thumbnail-render.webp" alt="Full tree seeder render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs01.webp)

## Build Step 2 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs02.webp)

## Build Step 3 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs03.webp)

## Build Step 4 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs04.webp)

## Build Step 5 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs05.webp)

## Build Step 6 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs06.webp)

## Build Step 7 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs07.webp)

## Build Step 8 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs08.webp)

## Build Step 9 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs09.webp)

## Build Step 10 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs10.webp)

## Build Step 11 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs11.webp)

## Build Step 12 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs12.webp)

## Build Step 13 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs13.webp)

## Build Step 14 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs14.webp)

## Build Step 15 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs15.webp)

## Build Step 16 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs16.webp)

## Build Step 17 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs17.webp)

## Build Step 18 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr9-treeseeder-sbs18.webp)

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
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
We are now ready to **use** our tree seeder!

Tips
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!

## Use Step 1
Think back to the lesson or [watch this video](https://youtu.be/KpPWcFukGIM?feature=shared). 

What should an automated tree seeder be able to do?

~hint Tell me more!
The automated tree seeder should be able to:
1. Continuously move
2. Plant seeds evenly across a field

Different products may have more features, but these two are the minimum requirement.
hint~

## Use Step 2
Take a look at the physical project you just built. 

What robotic components do you notice? How do you think they’ll work together to make the tree seeder function as expected? 

~hint Tell me more!
The automated tree seeder has:
- Two **continuous servo motors** that rotate a full 360 degrees. They will spin the wheels to allow the seeder to drive forward.
- One **positional servo motor** that moves at a specified angle. Each time it moves, it will plant a seed.
- These parts are all connected to the **breakout board** through **connector cables**.
- Finally, the breakout board is connected to the **micro:bit** which holds all the code that will tell our motors _what_ to do and _when_ to do it!
hint~

## Use Step 3
Let’s test it out. Unplug your project from the computer. Then, place it on the ground in an open area.

Press 'A'. What do you notice? Do this a few times, if necessary, then document your findings.

## Use Step 4
What did you notice? Were there any patterns?

~hint Tell me more!
Hopefully you noticed that there was indeed a pattern. The tree seeder completed the following steps 4 times in a row:
1. Drive forward
2. Stop
3. Move arm towards ground
4. Stop
5. Move arm away from ground
hint~

## Use Step 5
Take a look at the code in the workspace.

Given what you just learned and observed, can you guess which block(s) are making the tree seeder move or drive?

~hint Tell me more!
- We set up the driving function using the ``||fwdMotors:setup driving||`` block.
- We make the tree seeder move forward at a certain speed using the ``||fwdMotors:drive forward||`` block.
hint~

```blocks
fwdMotors.middleServo.fwdSetAngle(45)
// @highlight
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
10
)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    // @highlight
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        basic.pause(1000)
        fwdMotors.stop()
        fwdMotors.middleServo.fwdSetAngle(0)
        basic.pause(250)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(250)
    }
    fwdMotors.stop()
})
```

## Use Step 6
Can you guess which block(s) are responsible for dropping or planting the seed?

~hint Tell me more!
- The ``||fwdMotors:set middleServo||`` blocks are responsible for swinging the arm/pencil back and forth. This action simulates planting a seed.
hint~

```blocks
// @highlight
fwdMotors.middleServo.fwdSetAngle(45)
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
10
)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        basic.pause(1000)
        fwdMotors.stop()
        // @highlight
        fwdMotors.middleServo.fwdSetAngle(0)
        basic.pause(250)
        // @highlight
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(250)
    }
    fwdMotors.stop()
})
```
## Challenge @showdialog
Imagine you own the company that builds these automated tree seeders. You have a customer that wants to plant 1000 trees on their field.

Given what you’ve just learned:
1. How _long_ will it take the seeder to plant this many trees? 
2. How _far_ will it have to drive to meet this goal?
3. How do you know? 

Attempt a solution before moving to the next step.

## Solution 1 
Since we have access to the code, we know exactly what the vehicle needs to do to plant each tree! This will allow us to estimate the time it takes to plant a tree simply by looking at each block.

## Solution 1 Continued
The micro:bit executes each block very quickly, so the contribution of each to run time is almost negligible. There is one exception, though, and that is the ``||basic:pause||`` blocks! 

## Solution 1 Continued
In this program, we have 3 ``||basic:pause||`` blocks which add up to 1500 milliseconds (or 1.5 seconds!) per loop. We also know 1 seed is planted each loop. Ultimately, this means it takes 1.5 seconds to plant each seed:

<img src="https://latex.codecogs.com/svg.image?\frac{1.5\;seconds}{1\;\cancel{loop}}\times\frac{1\;\cancel{loop}}{1\;seed}=\frac{1.5\;seconds}{seed}" alt="A math equation: 1.5 seconds divided by 1 loop multiplied by 1 loop divided by one seed equals 1.5 seconds per seed" style="width: 400px;">

```block
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        // @highlight
        basic.pause(1000)
        fwdMotors.stop()
        fwdMotors.middleServo.fwdSetAngle(0)
        // @highlight
        basic.pause(250)
        fwdMotors.middleServo.fwdSetAngle(45)
        // @highlight
        basic.pause(250)
    }
    fwdMotors.stop()
```

## Solution 1 Continued
Knowing this, we can calculate that 1000 seeds will take 1500 seconds (or 25 minutes!) to plant!

<img src="https://latex.codecogs.com/svg.image?1000\;\cancel{seeds}\times\frac{1.5\;seconds}{1\;\cancel{seed}}=1500\;seconds" alt="A math equation: 1000 seeds multipled by 1.5 seconds divided by 1 seed equals 1500 seconds." style="width: 450px;">

## Solution 1 Continued
Unfortunately, we have no way to estimate the distance traveled from the code alone.

## Solution 2
When the code doesn’t help us, we can run our program and take physical measurements with a time and a ruler. Then, we can extrapolate the data!

Try it out:
1. Set up your tree seeder and mark its starting point. 
2. Simultaneously press A and start a timer.
3. Stop the timer as the seeder plants its first seed.
4. Measure the distance between these two points.

This is the time and distance it took to plant 1 seed. Multiply each value by 1000 to extrapolate to the time and distance required to plant 1000.

## Another Way?
Did you use another approach to solve this problem? 

Hint: You could also use a MakeCode extension like the Data Logger to track live data from your tree seeder!

## Reflection @showdialog
How did the answers compare between each solution? 

Why might there be slight differences? 

How can we make our estimates more accurate?

## Congratulations! @showdialog
You've completed the activity!

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.