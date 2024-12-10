# Step Counter Tutorial

## Activity: Let's Build a Step Counter! @showdialog
In this tutorial, you'll learn how to code a step counter using the micro:bit.

<img src="https://i0.wp.com/learn.forwardedu.com/wp-content/uploads/2024/09/project-step-counter.webp?resize=1170%2C780&ssl=1" alt="micro:bit step counter strapped to child's ankle" style="display: block; width: 50%; margin:auto;">

This project will introduce you to the Climate Action Kit tutorial format, detailing how structured steps and features like "Tell Me More!" and lightbulb hints can help guide your students through the coding process. 

Click 'Ok' to get started!

## Tips @showdialog
As you go through the next steps:
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 70%; margin:auto;">

## Step 0
Instructions to build your step counter will appear at the top of the screen. If the instructions are too long, you may need to drag the bottom of this window to expand it!

## Step 1
Think about how a step counter works. What does it need to be able to do?

~hint Tell me more!
A step counter should be able to:
- increase the step count each time you walk forward
- show the current step count on the LED display
hint~ 

## Step 2 
The first thing we need to do is to create a ``||variables:Variable||`` to track our steps. 

~hint Tell me more!
- A **variable** is like a storage container. It can store information that the program can reference later. In this case, we'll use the variable to track the number of steps.
hint~

## Step 3
Open the ``||variables:Variables||`` category and select 'Make a Variable'. Name it 'steps'.

~hint Tell me more!
- If you click on any of the coloured or underlined text in this tutorial, it will automatically open the appropriate block category. Try it now!
hint~

## Step 4
Drag the ``||variables:change steps by 1||`` block into the code area. Why do you think it is hashed or greyed out?

~hint Tell me more!
- The code is incomplete! We've told the micro:bit to increase our step count, but we haven't told it _when_ to do so!
- Remember: Hashed blocks indicate some error in the logic of your program.
hint~

```block
steps += 1
```

## Step 5
_When_ should we increase our step count? 

~hint Tell me more!
- Each time we take a step forward.
hint~

## Step 6 
How do you think the micro:bit can sense when we've taken a step?

~hint Tell me more!
- The micro:bit has an [accelerometer](https://microbit.org/get-started/features/sensors/#accelerometer) and can detect when it is moved. 
- Since the device will be attached to our ankle or wrist, it will _shake_ slighly each time we take a step forward.
hint~

## Step 7
Can you find an **event** block in the ``||input:Input||`` category that we can use to trigger our step count increase?

~hint Tell me more!
- **Events** are triggers that make your program run specific pieces of code when something else happens. In this case, the ``||input:on shake||`` event is triggered when the micro:bit detects a shaking motion.
hint~

```blocks
// @highlight
input.onGesture(Gesture.Shake, function () {
    steps += 1
})

```
## Step 8
We can test your code out on the simulator by clicking the shake button. 

What do you predict will happen? What _actually_ happens?

~hint Tell me more!
- You might expect to see the step count on the LEDs, but we haven't actually written any code that tells the micro:bit to display the number yet! As a result, we won't see anything happening! 
hint~

## Step 9
While the count _is_ increasing in the background, let's add some code so it is visible to the user!

Drag a ``||basic:show number||`` block into the workspace.

## Step 10
Within the ``||variables:Variables||`` category, there is a ``||variables:steps||`` block. Drag this over the '0' in ``||basic:show number||``.

~hint Tell me more!
- Remember: You can check out the lightbulb to see what this should look like!
hint~

```block
basic.showNumber(steps)
```

## Step 11
This new block is still hashed. _When_ do we want the micro:bit to display the number inside the ``||variables:steps||`` variable?

~hint Tell me more!
- We want the micro:bit to display the current step count _at all times_.
- We can wrap a ``||basic:forever||`` loop around this block to make this happen.
hint~

```blocks
basic.forever(function () {
    basic.showNumber(steps)
})
```
## Step 12
We still have an empty ``||basic:on start||`` block. What should the step count be at the start of our program?

~hint Tell me more!
- The step count should always start at '0'. 
- Add a ``||variables:set steps to 0||`` into the ``||basic:on start||`` block.
hint~

```blocks
let steps = 0
```

## Step 12 
Look at the micro:bit simulator. Do you see the number increasing by 1 each time you press the 'shake' button? Great job!

## Step 13
If you have a micro:bit device handy, let's download our code and test it out!

Connect the micro:bit to your computer using the USB port, then click the `|Download|` button. Follow the instructions to transfer your code onto the micro:bit. What happens when you shake the device?

## Congratulations! @showdialog 
You've completed the activity! 

## Reflection @showdialog 
Think about something about this project that challenged you. 

How did you overcome the challenge? 

How did that make you feel?

## Finished! @showdialog 
In the next step, you can click the `|Done|` button to finish the tutorial.
