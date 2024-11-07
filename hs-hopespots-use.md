# Hope Spot Monitoring Station - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
input.onButtonPressed(Button.A, function () {
    stationOn = true
})
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}
input.onButtonPressed(Button.B, function () {
    stationOn = false
})
let angle = 0
let stationOn = false
stationOn = false
angle = 0
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
basic.forever(function () {
    if (stationOn == true) {
        if (fwdSensors.sonar1.fwdDistance() > 0.1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
            rotateSensor()
        } else {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        }
        basic.pause(100)
    } else {
        fwdMotors.rightServo.fwdSetEnabled(false)
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a Hope Spot Monitoring Station! This station will deter ships from entering a Hope Spot by issuing a warning.

We are going to do this in three parts:
1. **Build** your station
2. **Add code** to bring it to life
3. **Use** and **study** your station to learn how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-render.webp" alt="Full Hope Spot station render" style="display: block; width: 75%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs01.webp)

## Build Step 2 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs02.webp)

## Build Step 3 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs03.webp)

## Build Step 4 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs04.webp)

## Build Step 5 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs05.webp)

## Build Step 6 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs06.webp)

## Build Step 7 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs07.webp)

## Build Step 8 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs08.webp)

## Build Step 9 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs09.webp)

## Build Step 10 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs10.webp)

## Build Step 11 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs11.webp)

## Build Step 12 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs12.webp)

## Build Step 13 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs13.webp)

## Build Step 14 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs14.webp)

## Build Step 15 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs15.webp)

## Build Step 16 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs16.webp)

## Build Step 17 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-hopespots-sbs17.webp)

## Activity 2: Code Your Project @showdialog
Now that your station is built, let’s connect it to your computer and upload code so it can detect ships and issue alerts.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is connected to your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots next to the ``|Download|`` button, then select _Connect Device_. Follow the instructions to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Click the ``|Download|`` button to transfer the code to your project.

## Activity 3: Use Your Project @showdialog
We are now ready to **use** our Hope Spot Monitoring Station!

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. For more details, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb**!

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Use Step 1
This monitoring station will help protect our Hope Spot. It does this by detecting nearby ships and sending out a warning when they are too close to the conservation area.

## Use Step 2
Take a look at the physical station.

What robotic components do you notice? How do you think they’ll work together to make the station function as expected?

~hint Tell me more!
The station includes:
- One **positional servo motor** that rotates between 0° and 270°. 
- One **sonar sensor** that calculates the distance of an object by sending out sound waves and measuring the time for the “echo” to return.
- One **LED ring** that can display a variety of colours.
- These parts are all connected to the **breakout board** through **cables**.
- Finally, the breakout board is connected to the **micro:bit** which holds all the code that will tell our robotic components what to do and when to do it!
hint~

## Use Step 3
Examine the code in the workspace. 

What do you predict will happen when you run the program? Which parts of the code influenced your prediction?

## Use Step 4
Turn the station on by pressing the **'A' button** on the micro:bit.

Does the station behave as you predicted? If not, what was different? Try to explain these differences.

## Use Step 5
The servo motor is rotating the sonar sensor so it can scan the area for ships. Observe this movement closely. Write down the angles scanned by the sensor. _Tip: It may be helpful to also look at the simulators for this!_

Based on your analysis, can you identify which part of the program controls this movement?

~hint Tell me more!
- In the code, the ``||Functions:rotateSensor||`` function moves the sonar sensor in 10° increments, up to 210°, then resets to 0° to start a new scan.
hint~

```blocks
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}
```

## Use Step 6
Functions are helpful because they can make programs easier to read. In our code, where do we _call_ the ``||Functions:rotateSensor||`` function? 

~hint Tell me more!
- We call the ``||Functions:rotateSensor||`` function whenever the sonar distance is _greater than 0.1 m_ using a **conditional statement**. In other words, the sensor continues to rotate as long as there are no nearby ships.
hint~

```block
// @hide
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}

if (fwdSensors.sonar1.fwdDistance() > 0.1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
            // @highlight
            rotateSensor()
        } else {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        }
```

## Use Step 7
Functions also make code reusable.

Can you think of other situations or projects where this type of rotate function might be useful?

~hint Tell me more!
- Rotating functions are helpful for scanning across ranges, like [tracking sunlight with a solar sensor](https://learn.forwardedu.com/make-your-solar-panel-look-like-the-real-world-version/).
hint~

## Use Step 8
Simulate an approaching ship by placing an object near the sonar sensor. Observe how the station responds as the object moves closer.

What part of the program is responsible for this response?

~hint Tell me more!
- The **conditional statement** in the code controls when the LED colour changes. It turns red when an object is detected *within 0.1 m*.
hint~

```block
// @hide
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}

if (fwdSensors.sonar1.fwdDistance() > 0.1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
            rotateSensor()
        } else {
            // @highlight
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        }
```

## Use Step 9
What additional features could make this station more effective at protecting its Hope Spot? How might you use the Climate Action Kit to incorporate these features?

~hint Tell me more!
- **Data Logging:** Recording each detected ship’s distance and timestamp could help track ship activity trends.
- **Radio Alerts:** Radio signals can notify remote teams when a ship is detected.

Check out the [Modify tutorial](https://makecode.microbit.org/#tutorial:https://github.com/climate-action-kits/pxt-fwd-edu/hs-hopespots-modify) to see how we can edit our program to include some of these functionalities. 
hint~

## Use Step 10
Imagine this station is built from on a reclaimed [oil rig](https://en.wikipedia.org/wiki/Oil_platform).

Why might reclaimed rigs be valuable for marine conservation? Do some rapid research to justify your response.

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
List 2 new things you learned today. 

Think critically about this station’s impact on marine conservation. How could systems like this be implemented at scale to protect multiple Hope Spots? Record any ideas or further questions you have.

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.