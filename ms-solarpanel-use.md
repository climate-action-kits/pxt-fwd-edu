#  Solar Panels - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

## Activity 1: Build Your Project @showdialog
Let's build a solar panel prototype! We are going to do this in 3 parts:
1. **Build** our solar panel
2. **Add code** to bring it to life
3. **Use** our solar panel to learn how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-render.webp" alt="Full solar panel render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs01.webp)

## Build Step 2 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs02.webp)

## Build Step 3 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs03.webp)

## Build Step 4 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs04.webp)

## Build Step 5 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs05.webp)

## Build Step 6 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs06.webp)

## Build Step 7 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs07.webp)

## Build Step 8 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs08.webp)

## Build Step 9 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs09.webp)

## Build Step 10 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs10.webp)

## Build Step 11 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs11.webp)

## Build Step 12 @showdialog
![solarpanelsbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-sbs12.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

```template
input.onButtonPressed(Button.A, function () {
    fwdMotors.rightServo.fwdSetAngle(0)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.rightServo.fwdSetAngle(180)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.rightServo.fwdSetAngle(90)
})
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
}) 
```

```customts
namespace phantomFix {
    fwdMotors.rightServo.fwdSetAngle(0)
}
```

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp" alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
We are ready to **use** our solar panels!

**Tutorial Tips** 

As you go through the next steps:
1. Follow the instructions at the top of the screen.
2. When you are ready for more information, click **'Tell me more!'**
3. If you need help with the code, click the lightbulb!


<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Use Step 1
Let's take a second to review solar panels. How do they work?

~hint Tell me more!
- Solar panels take in sunlight and convert it into electricity. In order to work well, they should be facing the sun to absorb as much light as possible. 
hint~

## Use Step 2
Take a look at your solar panel build. Can you name all of its physical parts?

~hint Tell me more!
Our solar panel has:
- **Building blocks**: one baseplate, three medium frames, two cube connectors, and three corner connectors
- **Robotic components**: a micro:bit, a breakout board, a positional servo motor, and a solar sensor
- One long cable connector
hint~

## Use Step 3
What do you think is the purpose of each part? How might they work together to create a functioning solar panel prototype?

~hint Tell me more!
- The **building blocks** form a structure that angles the solar panels towards the sky for maximum light expsure!
- The **solar sensor** will collect data on the amount of light present in the area.
- The **positional servo** motor will rotate our solar panels towards the sun so they can access the most sunlight.
- Finally, the **micro:bit** stores all the code that tells our solar panels how to operate. The **breakout board** connects our micro:bit to our other robotic components.
hint~

## Use Step 4
Let’s start by testing out the different robotic components of our solar panel project. First up: the positional servo motor!

Take a look at the simulators on the left side of the MakeCode editor, under the micro:bit simulator. What happens to your project when you press the power button and move the slider below the rightServo from left to right?

~hint Tell me more!
- As the slider is moved from left to right, the value increases, and the solar panel rotates counterclockwise!
- If you cannot find the simulators, watch [this video for support](https://youtu.be/gi5Olzmk2zk)!
hint~

## Use Step 5 
Let’s calibrate the starting position of our solar panels. Begin by setting down the project so it is facing you. The solar panels should be closest to you with the breakout board behind them.

## Use Step 6
Next, set the positional servo motor to '0°' on the simulator. At this position, the solar panels _should point to your left_ as shown in the lightbulb hint. If they don’t, gently detach the corner connector holding the panels and reattach it so they do!

![image](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/ms-solarpanel-render.webp)

## Use Step 7
Now let's take a look at the code for our solar panel and start testing it out.

What do you think will happen when you press 'A'? Try it now!

~hint Tell me more!
- When you press 'A', the solar panels face left (0°)!
- Since the panels were already at 0°, nothing will change!
hint~

```blocks
input.onButtonPressed(Button.A, function () {
    fwdMotors.rightServo.fwdSetAngle(0)
})
```

## Use Step 8
What do you think will happen when you touch the micro:bit logo? Try it now!

~hint Tell me more!
- When you touch the micro:bit's logo, the solar panels face out (90°)!
hint~

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.rightServo.fwdSetAngle(90)
})
```

## Use Step 9
What do you think will happen when you press 'B'? Try it now!

~hint Tell me more!
- When you press 'B', the solar panels face right (180°)!
hint~

```blocks
input.onButtonPressed(Button.B, function () {
    fwdMotors.rightServo.fwdSetAngle(180)
})
```

## Use Step 10
What is the benefit of having control over the position of the solar panels?

~hint Tell me more!
- The sun's position changes throughout the day. It rises in one part of the sky, moves across the sky, and sets in another part of the sky.
- By pressing a certain button or logo, we can manually control the position and ensure the solar panels are facing the sun all the time. 
hint~ 

## Use Step 11
Let's assume you are going to install the solar panels on the top of the building you are in right now.

1. Based on what you know about the sun's apparent movement through the sky, in which direction would you install the device? 
2. What buttons would you need to press in the morning, afternoon and evening to make sure the panels always have maximum sun exposure? Explain your reasoning.

~hint Tell me more!
- Remember that because the Earth rotates on its own axis in a counterclockwise direction, the sun _appears_ to rise in the east and set in the west. 
- What are some techniques you can use to determine east from west?
hint~

## Use Step 12
Let's test it out. Position your solar panels. Hold a light to represent the sun's position at sunrise. Press a button to turn the panels towards the light source.

Did you notice any change on the micro:bit when the solar panel moved towards the sun (the light)? 

~hint Tell me more!
- When the solar panel faces a bright light like the sun, the diamond on the micro:bit's LEDs gets larger. This helps us know the position is ideal.
hint~

## Use Step 13
What part of the code do you think is responsible for this change on the LEDs?

~hint Tell me more!
- There's a **conditional statement** in our code that changes the icon based on the reading on the solar sensor. This statement dictates that if the solar light level is greater than 90%, then a large diamond is to be displayed on the LEDs. Otherwise, a small diamond is shown.
hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.solar1.fwdLightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
```
## Use Step 14
Can you think of some benefits and limitations of _manually_ moving the solar panels throughout the day?

## Congratulations! @showdialog
You've completed the activity! 

Did anything surprise you about this project?

## Reflection @showdialog
List 2 new things you learned today.

What is one thing you want to learn more about?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.
