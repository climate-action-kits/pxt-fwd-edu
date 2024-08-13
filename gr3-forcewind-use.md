# The Powerful Force of Wind - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
``` 

## Activity 1: Build Your Project @showdialog
Let's build a moving wind turbine! We are going to do this in 3 parts:
1. **Build** our wind turbine
2. **Add code** to make it move
3. **Use** our wind turbine to learn how it works

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

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" style="display: block; width: 50%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Full wildfire render" style="display: block; width: 60%; margin:auto;">

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
    fwdMotors.leftServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.leftServo.fwdSetSpeed(50)
})
```

## Use Step 2 
Take a look at the code below. 

What do you think will happen to the blades of your project when you put a force on (or turn) the dial? Try it now.

~hint Tell me more!
- When we turn the dial to the right, the green building block should also turn to the right!
- This is what is called the input and output of the code.
hint~

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

## Use Step 5 
Ready for more? 

Can you add more building blocks to your wind turbine? Add one piece at a time and see if your turbine can still move with these extra pieces!

## Congratulations! @showdialog 
You've completed the activity! 

Did anything surprise you about this project? 

## Reflection @showdialog 
List 2 new things you learned today. 

What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|`` button to finish the tutorial.

