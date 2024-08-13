#  Solar Water Disinfection - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

## Activity 1: Build Your Project @showdialog
Let's create our SODIS timer! We are going to do this in 3 parts:
1. **Build** our SODIS timer
2. **Add code** to bring it to life
3. **Use** the timer to learn how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/sodis-prototype.png" alt="Full SODIS prototype" style="display: block; width: 10%; margin:auto;">

## Build Steps 1-3 @showdialog
<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/sodis-threebottles.webp" style="display: block; width: 75%; margin:auto;">

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

```template
let exposure_sec = 0

input.onButtonPressed(Button.A, function () {
    control.reset()
})

basic.forever(function () {
    basic.showNumber(exposure_sec)
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
    }
})
```

## Code Step 1 @showdialog
Plug the micro:bit into your computer.

Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Full wildfire render" style="display: block; width: 60%; margin:auto;">

## Code Step 2
Click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
We are ready to **use** our SODIS timer!

Tips
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!

## Use Step 1
Remember that our timer is going to help us track how long our water has been exposed to the sun's UV rays.

Take a look at your timer. What do you see on the micro:bit's LEDs? What do you think this number represents?

~hint Tell me more!
For now, you should see a '0' on the micro:bit! We'll explore what this number means in the next step.
hint~

## Use Step 2
Shine a bright light on your water bottle and SODIS timer. Hold it there, then turn it off. What did you notice?

~hint Tell me more!
- As long as the light is shining directly on the LEDs, the number on the micro:bit slowly increases.
- The LEDs on the micro:bit do two things! They work as a display and as a [light sensor](https://www.youtube.com/watch?v=ii0U_FMr-Z4). 
- If your SODIS timer did not behave as expected, try moving your light even closer to the LEDs.
hint~

## Use Step 3
Press 'A' to reset the timer. Then, shine a bright light on the water bottle and SODIS timer for 10 seconds. How often does the number increase? 

~hint Tell me more!
- As long as the light stays on, the number increases by '1' _every second_. Try counting along with the timer. 
- Assuming the flashlight represents the sun, the number on the micro:bit is how many seconds the water has been exposed to UV light!
hint~

## Use Step 4
Let's take a look at the code now. 

Can you guess which blocks allow us to display the exposure time on the micro:bit's LEDs?

## Use Step 5
First, we need to a place to store the exposure time. **Variables** allow us to hold information for later use. In this program, we've created a variable called ``||variables:exposure_sec||`` to track how long the water has been exposed to UV rays.

Next, we need a way to increase the number in the variable every second (or 1000 milliseconds). We do this using the ``||basic:pause||`` block.

```block
    basic.pause(1000)
    exposure_sec += 1
```

## Use Step 6
Of course, we only want the ``||variables:exposure_sec||`` variable to increase when the water has been exposed to the sun.

We use a **conditional statement** to control _when_ the number in ``||variables:exposure_sec||`` increases. Can you identify the conditional statement in the code?

~hint Tell me more!
- Conditionals help us add decision points to our code and typically follow an ``||logic:if/then||`` structure. 
- In this program, the conditional says: if the environmental light level is greater than 200, then pause the program for 1000 ms (1 second) and increase the number in the ``||variables:exposure_sec||`` variable by '1'.
- This allows us to create a basic timer that tracks sun exposure in seconds.
hint~

```block
// @highlight
 if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
 }
```

## Use Step 7
Because all of this code is in a ``||basic:forever||`` loop, we will repeatedly ask whether the conditional is true. As long as it is, the number will continue to increase.

```blocks
// @highlight
basic.forever(function () {
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
    }
})
```

## Use Step 8
Finally, we need to display whatever number is inside the ``||variables:exposure_sec||`` variable on the micro:bit's LEDs. We use the ``||basic:show number||`` block to accomplish this. 

```block
basic.showNumber(exposure_sec)
```

## Congratulations! @showdialog
You've completed the activity! As a next step, you could always test out how the SODIS timer works in the real-world by placing it in a sunny area - like by a window!

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/sodis-windowbottles.webp" style="display: block; width: 70%; margin:auto;">

## Reflection @showdialog
List 2 new things you learned today.

What is one thing you want to learn more about?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.