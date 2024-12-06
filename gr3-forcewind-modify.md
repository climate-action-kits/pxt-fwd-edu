# The Powerful Force of Wind - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1: Build Your Project @showdialog
Let's build a wind turbine! We are going to do this in four parts:
1. **Build** our wind turbine
2. **Add code** to make it move
3. **Modify** our code to learn how it works
4. Complete a small coding **challenge**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-simplewind-render.webp" alt="Full wind turbine render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog 
![Grab a white long frame. Put a continuous servo motor through the frame's servo hole. Make sure the cord of the servo is closest to the long end of the frame.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-simplewind-sbs01.webp)

## Build Step 2 @showdialog 
![Connect a circle block to the continuous servo motor.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-simplewind-sbs02.webp) 

## Build Step 3 @showdialog 
![Add a cube connector to the bottom of the long frame.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-simplewind-sbs03.webp). 

## Build Step 4 @showdialog 
![Connect the long frame to the baseplate, so it stands upright like a wind turbine.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-simplewind-sbs04.webp) 

## Build Step 5 @showdialog 
![Attach the breakout board to the middle of a long frame building block. Connect the servo motor to the middle motor port.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-simplewind-sbs05.webp) 

## Build Step 6 @showdialog 
![Grab the dial and a short cable. Connect them. Plug the other end of the cable into a sensor port on the breakout board.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-simplewind-sbs06.webp)

## Build Step 7 @showdialog 
![Connect your micro:bit to the computer via USB port.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-simplewind-sbs07.webp)

## Build Step 8 @showdialog 
![Slide the micro:bit into the breakout board.](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-simplewind-sbs08.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" style="display: block; width: 45%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

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
- The green building block starts spinning when you turn the dial to the right. It stops when you press the dial down.
hint~ 

## Modify Step 2 
What happens when you make the number in the  ``||fwdMotors:set middleServo to 50%||`` bigger? Try changing it to 100%!

~hint Tell me more!
- The blue block represents the output or result of our code. When we make the number bigger, the turbine spins faster!
- Don't forget to download the new code to your micro:bit.
- If you don't see the change right away, try pressing down the dial to stop the turbine. Then, try turning it again.
hint~

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.middleServo.fwdSetSpeed(100)
})
```
  
## Modify Step 3
What happens when you make the number in  ``||fwdMotors:set middleServo to 100%||`` smaller? Try it!

~hint Tell me more!
- When we make the number smaller, the turbine spins more slowly.
hint~ 

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.middleServo.fwdSetSpeed(20)
})
```

## Modify Step 3 
What happens when you make the number in  ``||fwdMotors:set middleServo to 20%||`` negative? Try it!

~hint Tell me more! 
- When you add a '-' sign to the number, the turbine spins in the opposite direction.
hint~

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.middleServo.fwdSetSpeed(-20)
})
```

## Modify Step 4 
What happens when you change the direction of the arrow in  ``||fwdSensors:on dial1 turned difference||``? Try it!

~hint Tell me more! 
- The green block represents an event in our code. This shows us how we need to interact with our project in order to make something happen. 
- When we change the direction arrow, we will now have to turn the dial in the opposite direction to trigger our code/output.
hint~

```blocks
// @highlight
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-20)
})
```

## Challenge Time!
Can you add another event to your code to make the wind turbine turn in both directions? Think about how you might do this, then move to the next step!

## Challenge Step 1
The first thing we want to happen is to make the wind turbine turn in another direction. Open the ``||fwdMotors:Motors||`` category and drag and drop ``||fwdMotors:set leftServo to 50 %||`` into the workspace.

_Note: Make sure to switch **leftServo** to **middleServo** because our servo motor is connected to the middle port!_

~hint Tell me more!
- This is the output we want to happen!
- Note: The block will be grey or hashed for now.
hint~

```block
fwdMotors.middleServo.fwdSetSpeed(50)
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
Next, how can you put these two blocks together to make sure the wind turbine can turn in both directions? 

## Challenge Step 4
How can you change the code so that the dial and turbine spin in the _same direction_ to mimic the force of wind?

## Challenge Step 5 
Did you get it right? Check the lightbulb before clicking the ``|Download|`` button to download the code to your project.

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-50)
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

