# Hope Spot Monitoring Station - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
// Button A turns on the monitoring station
input.onButtonPressed(Button.A, function () {
    stationOn = true
})

// Function to rotate the sonar sensor in increments of 10 degrees
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}

// Button B turns off the monitoring station
input.onButtonPressed(Button.B, function () {
    stationOn = false
})

let angle = 0 
let stationOn = false
stationOn = false // Ensure station is off initially
angle = 0 // Ensure the positional servo angle starts at 0 degrees
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)

// Main loop to monitor ships
basic.forever(function () {
    // The rest of the code only runs if the stationOn variable is TRUE. This is how we turn the station off and on with the buttons.
    if (stationOn == true) {
        // Check if no object is nearby (distance > 0.1m)
        if (fwdSensors.sonar1.fwdDistance() > 0.1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000) // Turn off LED ring (safe zone)
            rotateSensor() // Call rotateSensor function to continue scanning the area
        } else { 
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000) // Set LED ring to red (danger zone)
        }
        basic.pause(100)
    } else {
        fwdMotors.rightServo.fwdSetEnabled(false) // Disable the servo if the station is off
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a Hope Spot Monitoring Station! This station will deter ships from entering a Hope Spot by issuing a warning.

We are going to do this in four parts:
1. **Build** your station
2. **Add code** to bring it to life
3. **Modify** the code to learn how it works
4. Complete a couple **challenges** to improve your station

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
Now that your station is built, let’s connect it to the computer and upload some code so it can detect ships and issue alerts.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is connected to your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots next to the ``|Download|`` button, then select _Connect Device_. Follow the instructions to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Click the ``|Download|`` button to transfer the code to your project.

## Activity 3: Modify Your Project @showdialog
We are now ready to **modify** our Hope Spot Monitoring Station!

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. When you are ready for more detail, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb**!
4. Don't forget to ``|Download|`` and test out any changes you make!

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modify Step 1
Our monitoring station will help protect our Hope Spot. It does this by detecting ships with the sonar sensor and sending out an LED light warning when they are too close to the conservation area.

## Modify Step 2
Take a look at the code in the workspace. Review it carefully to generally understand what each block does before moving on. 

If you are having trouble, you can always click the comments for more information or turn on your station by pressing the **A** on the micro:bit.

~hint Tell me more!
This code:
1. Ensures the station is ON when **Button A** is pressed and OFF when **Button B** is pressed.
2. Rotates the sonar sensor in 10° increments using the ``||Functions:rotateSensor||`` **function** to scan the area for ships.
4. Triggers a visual alert by changing the LED ring to red whenever a ship is detected using a **conditional statement**.
hint~

## Modify Step 3
Let's modify the ``||Functions:rotateSensor||`` **function**. 

We’ll start by experimenting with its scan range and limits to see how this impacts the sensor’s ability to detect ships.

## Modify Step 4
Locate the ``||Functions:rotateSensor||`` function below. Adjust the number in the ``||Variables:change angle by||`` block.

Download your updated code. How does this impact the sensor's movement? How might this change impact the sensitivity of the station?

~hint Tell me more!
- *Increasing* the value makes the sensor scan the area more *quickly*.  
- *Decreasing* the value makes the sensor scan the area more *slowly*, and therefore, more thoroughly. 
hint~

```block
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    // @highlight
    angle += 20
    if (angle >= 210) {
        angle = 0
    }
}
```

## Modify Step 5
Next, let's adjust the sensor's limit. Currently, the ``||Functions:rotateSensor||`` function uses a **conditional statement** to reset the sensor to 0° once it reaches an upper limit of 210°. Test out a few different values for this upper value.

How does each change impact the movement of the sensor? What value would you want to use in a real-world scenario?

~hint Tell me more!
- *Increasing* the number *expands* the range of the sensor, while *decreasing* it *limits* the range of detection.
- The positional servo motor has an upper limit of 270°. Since we want to scan as much of the Hope Spot as possible, let's use this! 
hint~

```block
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 20
    // @highlight
    if (angle >= 270) {
        angle = 0
    }
}
```

## Modify Step 6
Now, let’s experiment with the sonar sensor’s detection thresholds. Changing the sonar threshold in the **conditional statement** will change the distance at which the system starts responding to ships.

Try a few different values before settling on one that works best.

```block
// @hide
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 20
    // @highlight
    if (angle >= 270) {
        angle = 0
    }
}

        // @highlight
        if (fwdSensors.sonar1.fwdDistance() > .3) { 
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000) 
            rotateSensor() 
        } else { 
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000) 
        }
```

## Challenge Time! @showdialog
You’ve successfully modified the ``||Functions:rotateSensor||`` **function** and experimented with sonar detection. 

Now it's time to enhance our station by adding more detailed warnings and data logging functionalities.

## Challenge Step 1
Currently, the station’s LED ring turns red when a ship is detected. Can you expand the main **conditional statement** to assign _different_ LED colours based on the ship’s proximity to the Hope Spot? For example:

- **Black/Off**: Safe distance
- **Yellow**: Caution (closer range)
- **Red**: Danger (very close)

Try it for yourself, then go to the next step to see our solution.

## Challenge Step 2
Expland your **conditional** by clicking the **+** icon below the else statement. Then, adjust each statement (if, else if, else) to set:

- LED **black/off** for safe distance (e.g., > 1 meters).
- LED **yellow** for caution (e.g., > 0.1 and < 1 meters).
- LED **red** for danger (e.g., < 0.1 meters).

Play with the values in each expression to optimize your station!

```block
// @hide
function logShip () {
    radio.sendString("ALERT")
    datalogger.log(
    datalogger.createCV("Angle", angle),
    datalogger.createCV("Distance", fwdSensors.sonar1.fwdDistance())
    )
    basic.pause(5000)
}

// @hide
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 20
    // @highlight
    if (angle >= 270) {
        angle = 0
    }
}

        if (fwdSensors.sonar1.fwdDistance() > 1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
            rotateSensor()
        } else if (fwdSensors.sonar1.fwdDistance() > .1 && fwdSensors.sonar1.fwdDistance() <= 1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
            rotateSensor()
        } else {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        }
```

## Challenge Step 3
Next, let’s set up data logging to record ship activity.

Data logging will allow us to track each time a ship enters the danger zone and record its exact location. This data can help us analyze patterns, such as how often ships come close to the Hope Spot. Ultimately, these patterns can help inform future conservation efforts.

## Challenge Step 4
Use the blocks from the [Data Logger Extension](https://microbit.org/get-started/user-guide/data-logging/) to record location data on each ship that enters the danger zone. You should also ensure there is a way to delete old data.

Try it yourself first, then go through the next steps to see our solution.

## Challenge Step 5
Use the ``||Datalogger:log data||`` block to save the ``||fwdSensors:sonar distance||`` and ``||variables:angle||`` data each time a ship is in the 'danger zone'. 

```block
// @hide
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 20
    // @highlight
    if (angle >= 270) {
        angle = 0
    }
}
        if (fwdSensors.sonar1.fwdDistance() > 1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
            rotateSensor()
        } else if (fwdSensors.sonar1.fwdDistance() > .1 && fwdSensors.sonar1.fwdDistance() <= 1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
            rotateSensor()
        } else {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
            // @highlight
            datalogger.log(
            datalogger.createCV("Angle", angle),
            datalogger.createCV("Distance", fwdSensors.sonar1.fwdDistance())
            )
        }
```

## Challenge Step 6
Add a ``||basic:pause||`` block after the ``||Datalogger:log data||`` block. This will ensure we don't log the same ship multiple times in rapid succession.

```block
// @hide
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 20
    if (angle >= 270) {
        angle = 0
    }
}
        if (fwdSensors.sonar1.fwdDistance() > 1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
            rotateSensor()
        } else if (fwdSensors.sonar1.fwdDistance() > .1 && fwdSensors.sonar1.fwdDistance() <= 1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
            rotateSensor()
        } else {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
            datalogger.log(
            datalogger.createCV("Angle", angle),
            datalogger.createCV("Distance", fwdSensors.sonar1.fwdDistance())
            )
            // @highlight
            basic.pause(5000)
        }
```

## Challenge Step 7
To make the code easier to read and reuse, you could try capturing the data logging blocks in a custom function like we did with ``||functions:rotateSensor||``.

In the ``||functions:Functions||``category, create a new **function** called ``||functions:logShip||``. Move the relevant blocks into this function and be sure to call it within the main loop of the program!

```blocks
// @hide
function rotateSensor () {
    fwdMotors.rightServo.fwdSetAngleAndWait(angle)
    angle += 20
    if (angle >= 270) {
        angle = 0
    }
}

function logShip () {
    datalogger.log(
    datalogger.createCV("Angle", angle),
    datalogger.createCV("Distance", fwdSensors.sonar1.fwdDistance())
    )
    basic.pause(5000)
}

basic.forever(function () {
    if (stationOn == true) {
        if (fwdSensors.sonar1.fwdDistance() > 1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
            rotateSensor()
        } else if (fwdSensors.sonar1.fwdDistance() > .1 && fwdSensors.sonar1.fwdDistance() <= 1) {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
            rotateSensor()
        } else {
            fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
            // @highlight
            logShip()
        }
        basic.pause(100)
    } else {
        fwdMotors.rightServo.fwdSetEnabled(false)
    }
})
```

## Challenge Step 8
To clear the old data log, use the ``||datalogger:deleteLog||`` block inside a unique **Input** block like ``||Input:on button A+B pressed||``.

```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
```

## Test it out!
Download your new code. 

Unplug your station and test it out by using objects to represent ships at different distances. 

Once you are satisfied with your test, plug the micro:bit back in and [view the log data](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

## Congratulations! @showdialog
You've completed the activity! Keep testing your station to ensure each feature works as expected.

## Reflection @showdialog
What challenges did you face during this activity? How did you overcome them?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.