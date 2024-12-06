# The Powerful Force of Wind - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1: Build Your Project @showdialog
Let's build a moving wind turbine! We are going to do this in three parts:
1. **Build** our wind turbine
2. **Add code** to make it move
3. **Use** our wind turbine to learn how it works

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

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" style="display: block; width: 45%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3 
Click the ``|Download|`` button to download the starter code to your project.

## Activity 3: Use Your Project @showdialog
We are ready to **use** our wind turbine!

**Tutorial Tips** 

As you go through the next steps:
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!

## Use Step 1  
Think back to how a wind turbine works. What part of our physical project represents: 
- The wind? 
- The turbine blades?

~hint Tell me more!
- The dial represents the wind!
- The circular, green building block represents the blades of the wind turbine.
  hint~

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```

## Use Step 2 
Take a look at the code below. 

What do you think will happen to the blades of your project when you put a force on (or turn) the dial? Try it now.

~hint Tell me more!
- When we turn the dial to the right, the green building block should start to turn!
- This is what is called the input and output of the code.
hint~

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```

## Use Step 3 
What do you think will happen when you turn the dial the opposite way? Try it now!

~hint Tell me more! 
- Nothing happens! There is no code that tells the computer what to do when the dial is turned this direction.
  hint~

## Use Step 4 
Look at your code. How do you think we can stop the motor from spinning? Try it!

~hint Tell me more!
- The motor will stop when you press down on the dial!
hint~

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
```

## Use Step 5 
Ready for more? 

Can you add the green small frames to your wind turbine to act as its blades? Add one piece at a time and see if it can still move with these extra pieces!

## Congratulations! @showdialog 
You've completed the activity! 

Did anything surprise you about this project? 

## Reflection @showdialog 
List 2 new things you learned today. 

What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|`` button to finish the tutorial.

