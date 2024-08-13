# The Powerful Force of Wind - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1: Build Your Project @showdialog
Let's build a wind turbine! We are going to do this in 4 parts:
1. **Build** our wind turbine
2. **Add code** to make it move
3. **Modify** our code to learn how it works
4. Complete a small coding **challenge**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr5-wind-lvl1-render.webp" alt="Full wind turbine render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog 
![Attach the breakout board to the middle of a long frame building block.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs1.png)

## Build Step 2 @showdialog 
![Add two cube connectors to either end of the long frame. Set this piece aside.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs2.png) 

## Build Step 3 @showdialog 
![Grab a second long frame. Put the continuous servo motor through the frame's servo hole.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs3.png). 

## Build Step 4 @showdialog 
![Make sure the cord of the servo is closest to the long end of the frame.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs4.png) 

## Build Step 5 @showdialog 
![Connect a circle block to the continuous servo motor.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs5.png) 

## Build Step 6 @showdialog 
![Take the long frame with the breakout board and snap it onto the center of the base plate. Then, turn the second long frame, turn it, and attach it to the right cube connector, so it looks like a wind turbine. All pieces should be attached now.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs6.png)

## Build Step 7 @showdialog 
![Plug the servo motor into the left servo port on the breakout board.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs7.png)

## Build Step 8 @showdialog 
![Grab the dial and a short cable. Connect them.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs8.png)

## Build Step 9 @showdialog 
![Snap the dial onto the left corner of the base plate. Connect its cable to one of the sensor ports on the breakout board.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs9.png)

## Build Step 10 @showdialog 
![Connect the micro:bit to your computer using the provided USB cord.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs10.png)

## Build Step 11 @showdialog 
![Your build is complete!](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr3-wind1-lvl2-sbs11.png)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" style="display: block; width: 50%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Full wildfire render" style="display: block; width: 60%; margin:auto;">

## Code Step 3 
Click the ``|Download|`` button to download the starter code to your project.

## Activity 3: Modify Your Project @showdialog 
We are ready to **modify** our wind turbine!

**Tutorial Tips** 

As you go through the next steps:
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!
4. Be sure to ``|Download|`` any modified code to your micro:bit to test it out.

## Modify Step 1
The code below will make our wind turbine turn. 

Let's test it out first. What happens when you turn the dial to the right? What happens when you push the dial down?

~hint Tell me more!
- The green building block starts spinning when you turn the dial. It stops when you press the dial down.
hint~ 

## Modify Step 2 
What happens when you make the number in the  ``||fwdMotors:set leftServo to 50%||`` bigger? Try changing it to 100%!

~hint Tell me more!
- The blue block represents the output or result of our code. When we make the number bigger, the turbine spins faster!
hint~

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.leftServo.fwdSetSpeed(100)
})
```
  
## Modify Step 3
What happens when you make the number in  ``||fwdMotors:set leftServo to 100%||`` smaller? Try it!

~hint Tell me more!
- When we make the number smaller, the turbine spins more slowly.
hint~ 

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.leftServo.fwdSetSpeed(10)
})
```

## Modify Step 3 
What happens when you make the number in  ``||fwdMotors:set leftServo to 10%||`` negative? Try it!

~hint Tell me more! 
- When you add a '-' sign to the number, the turbine spins in the opposite direction.
hint~

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.leftServo.fwdSetSpeed(-10)
})
```

## Modify Step 4 
What happens when you change the direction of the arrow in  ``||fwdSensors:on dial1 turned difference||``? Try it!

~hint Tell me more! 
- The green block represents an event in our code. This shows us how we need to interact with our project in order to make something happen. 
- When we change the direction arrow, we will now have to turn the dial in the opposite direction to trigger our code/output.
hint~

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    // @highlight
    fwdMotors.leftServo.fwdSetSpeed(-10)
})
```

## Challenge Time!
Can you add another event to your code to make the wind turbine turn in both directions? Think about how you might do this, then move to the next step!

## Challenge Step 1
The first thing we want to happen is to make the wind turbine turn in another direction. Open the ``||fwdMotors:Motors||`` category and drag and drop ``||fwdMotors:set leftServo to 50 %||`` into the workspace.

~hint Tell me more!
- This is the output we want to happen!
- Note: The block will be grey or hashed for now.
hint~

```block
fwdMotors.leftServo.fwdSetSpeed(50)
```

## Challenge Step 2 
The new block is hashed because we haven't told the micro:bit _when_ it should run this output block. Remember, telling the micro:bit _when_ to do something is called an event. Open the ``||fwdSensors:Sensors||`` category and drag and drop the ``||fwdSensors:on dial1 turned difference||`` event into the workspace.  

~hint Tell me more!
- This is the block that is going to trigger the spinning of the wind turbine.
hint~ 

```block
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {

})
```

## Challenge Step 3 
Next, how can you use these two blocks together to make the wind turbine turn in the opposite direction? 

## Challenge Step 4 
Did you get it right? Check the lightbulb before clicking the ``|Download|`` button to download the code to your project.

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(-50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```

## Congratulations! @showdialog 
You've completed the activity! 

## Reflection @showdialog 
Think about something about this project that challenged you. 

How did you overcome the challenge? 

How did that make you feel?

## Finished! @showdialog 
In the next step, you can click the `|Done|` button to finish the tutorial.

