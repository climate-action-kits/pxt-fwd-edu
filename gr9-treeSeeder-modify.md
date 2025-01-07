# Replanting Our Forests with Automated Tree Seeders - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 < 4; index2++) {
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
// @collapsed
input.onButtonPressed(Button.B, function () {
    if (index < 3) {
        index += 1
    } else {
        index = 0
    }
})
let index = 0
index = 0
fwdMotors.middleServo.fwdSetAngle(45)
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
10
)
// @collapsed
basic.forever(function () {
    basic.showNumber(index)
})
```

## Activity 1: Build Your Project @showdialog
Let's build an automated tree seeder. We are going to do this in four parts:
1. **Build** the automated tree seeder
2. **Add code** to make it move
3. **Modify** the tree seeder's code to learn how it works
4. Complete a **challenge** to improve its function

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

## Activity 3: Modify Your Project @showdialog
We are now ready to **modify** our tree seeder!

Tips
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!
4. After each change, you will need to ``|Download|`` the updated code to your micro:bit.

## Modify Step 1
Think back to the lesson or [watch this video](https://youtu.be/KpPWcFukGIM?feature=shared). 

What should an automated tree seeder be able to do?

~hint Tell me more!
The automated tree seeder should be able to:
1. Continuously move
2. Plant seeds evenly across a field

Different products may have more features, but these two are the minimum requirement.
hint~

## Modify Step 2
Let’s test out the tree seeder. Unplug it from the computer. Then, place it on the ground in an open area.

Press 'A'. What do you notice? Do this a few times, if necessary, then document your findings.

~hint Tell me more!
Hopefully you noticed that there was indeed a pattern. The tree seeder completed the following steps 4 times in a row:
1. Drive forward
2. Stop
3. Move pencil/arm towards ground
4. Stop
5. Move pencil/arm away from ground
6. Stop
hint~

## Modify Step 3
The positional servo motor controls the pencil/arm of our project. Each time it swings back and forth simulates a seed being planted.

Can you identify the blocks of code below that are responsible for this swinging motion?

~hint Tell me more!
- The ``||fwdMotors:set middleServo to||`` blocks control the position of the arm.
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 < 4; index2++) {
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
let index = 0
index = 0
// @highlight
fwdMotors.middleServo.fwdSetAngle(45)
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
10
)
```

## Modify Step 4
Try changing the value in the first ``||fwdMotors:set middleServo to||`` block from ‘0 degrees’ to a number between '60 degrees' and '180 degrees'. What do you think will change?

Download your code and test it out. What happened?

~hint Tell me more!
- When the positional servo motor is at '0 degrees', the pencil or pen points downward. When the number is greater than '45 degrees', the pencil moves upwards, away from the ground.
- In this case, no trees were planted. We need the arm to touch the ground to simulate planting a tree!
hint~

```block
    for (let index2 = 0; index2 < 4; index2++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        basic.pause(1000)
        fwdMotors.stop()
        // @highlight
        fwdMotors.middleServo.fwdSetAngle(100)
        basic.pause(250)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(250)
    }
```

## Modify Step 5
Reset your value to ‘0 degrees’.

```block
    for (let index2 = 0; index2 < 4; index2++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        basic.pause(1000)
        fwdMotors.stop()
        // @highlight
        fwdMotors.middleServo.fwdSetAngle(0)
        basic.pause(250)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(250)
    }
```

## Modify Step 6
What do you think will happen if you modify the number in the ``||loops:repeat 4 times||`` loop? Try it now!

~hint Tell me more!
- The automated tree seeder will now plant a different number of seeds.
- For example: If you change the number to '5', the seeder will plant 5 trees!
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    for (let index2 = 0; index2 < 5; index2++) {
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
## Modify Step 7
What do you think will happen if you modify the number in the first ``||basic:pause||`` block? Try a few different numbers between '200 ms' and '3000 ms'.

What did you observe?

~hint Tell me more!
- The smaller the number is, the closer together the trees will be planted. The larger the number is, the farther trees are planted from one another.
- Change the number back to '1000 ms' once you've completed your tests.
- Don’t notice a change? Don’t forget to re-download the code each time!
hint~

```block
    for (let index2 = 0; index2 < 5; index2++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        // @highlight
        basic.pause(200)
        fwdMotors.stop()
        fwdMotors.middleServo.fwdSetAngle(0)
        basic.pause(250)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(250)
    }
```

## Challenge @showdialog
Imagine you own the company that builds these automated tree seeders. 

You have a customer that has a few different fields they want to fill with trees. They’d like the trees on Field A to be packed densely together; however, they require a lot of space between the trees grown on Field B. 

It would be a lot of work to modify the code for each customer or field. How might we write the code initially so that it is adaptable to these types of requests?

## Challenge Step 1
We saw that changing the value in the first ``||basic:pause||`` block meant we could plant seeds closer together or farther apart. 

What if instead of manually changing the code, we included several pre-programmed levels that the user could choose between based on their needs?

Let's assume these levels are: 'Extremely High Density', 'High Density', 'Medium Density', and 'Low Density' seed planting.

## Challenge Step 2
We are going to store the values for each level in something known as an **array**. An array is a list of items. In this case, we are going to create a list of numbers called ‘seedDensity’.

## Challenge Step 3
Open the ``||array:Array||`` category. Create a new array by dragging a ``||variables:set list to||`` ``||array:array of||`` block into the ``||basic:on start||`` block.

Click the down arrow next to ``||variables:list||``. Select 'Rename variable...' and type 'seedDensity'.

```blocks
let index = 0
index = 0
let seedDensity = [
0,
1
]
fwdMotors.middleServo.fwdSetAngle(45)
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
10
)
```
## Challenge Step 4
What 4 numbers should we add to this array? Assume the first number will represent the 'Low Density' level and the last number will be the 'Extremely High Density' level.

~hint Tell me more!
Remember: 
- To plant trees far apart (low density), we need the number in the ``||basic:pause||`` block to be *large*.
- To plant trees close together (high density), the number should be *small*.
- Try something like ‘2000’, ‘1000’, ‘500’, ‘200’. You can press the + button on the block to open up more spaces.
hint~

```blocks
let index = 0
index = 0
let seedDensity = [
2000,
1000,
500,
200
]
fwdMotors.middleServo.fwdSetAngle(45)
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
10
)
```

## Challenge Step 5
You can identify a specific item in an array by referring to its **index**. 

The first number in an array has an index of '0', the second number an index of '1', and so on.

~hint Tell me more!
The following is true for the ``||variables:seedDensity||`` list:
- Index 0 = 2000 = Low Density
- Index 1 = 1000 = Medium Density
- Index 2 = 500 = High Density
- Index 3 = 200 = Extremely High Density
hint~

## Challenge Step 6
Now we need to allow the user to toggle between these options. We’ve begun this process for you.

Open the ``||input:on button B pressed||`` event and ``||basic:forever||`` loop now by clicking on the down arrow next to each. Read this new code. What do you predict it will do?

Test it out by pressing 'B' a few times. Was your prediction correct?

~hint Tell me more!
- There is an **variable** called ``||variables:index||`` that is set to ‘0’ at the start of the program.
- Each time you press ‘B’, the number inside that variable increases by ‘1’ until it reaches ‘3’. At this point, the variable will reset to ‘0’ the next time 'B' is pressed.
- The current value in the ``||variables:index||`` variable is displayed on the micro:bit’s LEDs so the user knows what level they are on.
hint~

```blocks
let index = 0
index = 0

input.onButtonPressed(Button.B, function () {
    if (index < 3) {
        index += 1
    } else {
        index = 0
    }
})

basic.forever(function () {
    basic.showNumber(index)
})
```

## Challenge Step 7
Download your new code.

Press 'B' a few times to set the tree seeder to level 3, then rerun your tree seeding program by pressing 'A'.

Press 'B' to set the level to 1. Rerun your seeding program by pressing 'A'.

What happened? Was this what you expected?

~hint Tell me more!
- You might have expected that changing the level would impact how often we planted seeds. In reality, nothing has changed... yet!
- This is because we need to incorporate the ``||variables:index||`` variable into our tree seeding program. 
hint~

## Challenge Step 8
Drag a ``||variables:list||`` ``||array:get value at||`` block from the ``||array:Array||`` category into the first ``||basic:pause||`` block.

Be sure to change ``||variables:list||`` to ``||variables:seedDensity||``.

```block
    for (let index2 = 0; index2 < 4; index2++) {
        let seedDensity: number[] = []
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        // @highlight
        basic.pause(seedDensity[0])
        fwdMotors.stop()
        fwdMotors.middleServo.fwdSetAngle(0)
        basic.pause(250)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(250)
    }
```

## Challenge Step 9
At this point, we are constantly pulling the first value in the array because the index is set to ‘0’ in the new ``||variables:seedDensity||`` ``||array:get value at||`` block. 

Go to the ``||variables:Variables||`` category and replace the ‘0’ value with ``||variables:index||``.

~hint Tell me more!
- Now, the micro:bit will pull a different value from the list based on the ``||variables:index||`` or level the user has selected.
hint~

```block
for (let index2 = 0; index2 < 4; index2++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
        // @highlight
        basic.pause(seedDensity[index])
        fwdMotors.stop()
        fwdMotors.middleServo.fwdSetAngle(0)
        basic.pause(250)
        fwdMotors.middleServo.fwdSetAngle(45)
        basic.pause(250)
    }
```

## Challenge Step 10
Download your new code. Then, test out a few different density levels:

1. Set your desired tree density level by pressing 'B'.
2. Press 'A' to run the seeding program.
3. Repeat with a different density level.

Is the program working as you expected?

## Explore
Are there any parts of the code you still don't understand? This is your time to explore!

~hint Tell me more!
Follow these steps:
1. Find a part of the code you'd like to learn more about
2. Make a single change to this block (or remove it entirely)
3. Download the new code
4. Test it out and observe what changed
5. Repeat
hint~

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
Think about something in this project that challenged you.

How did you overcome this challenge? How did that make you feel?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.