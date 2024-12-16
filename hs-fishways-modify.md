# Forward Education Fishways - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```
 
```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    if (fwdMotors.pump.fwdIsActive()) {
        fwdMotors.pump.fwdSetActive(false)
    } else {
        fwdMotors.pump.fwdSetActive(true)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.rightServo.fwdSetAngle(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.rightServo.fwdSetAngle(fwdSensors.dial1.fwdPosition())
    FishCount += 1
})
fwdMotors.pump.fwdSetActive(false)
let FishCount = 0
basic.forever(function () {
    basic.showNumber(FishCount)
})
``` 

## Activity 1: Build Your Project @showdialog
Let's explore fish migration! We are going to do this in four parts: 
1. **Build** our fishway  
2. **Add code** to bring our project to life  
3. **Modify** our project to learn about other sensors  
4. Apply what we learned with a small **challenge**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-render.webp" alt="Full fishway render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![Build Step 1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs01.webp)

## Build Step 2 @showdialog
![Build Step 2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs02.webp)

## Build Step 3 @showdialog
![Build Step 3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs03.webp)

## Build Step 4 @showdialog
![Build Step 4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs04.webp)

## Build Step 5 @showdialog
![Build Step 5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs05.webp)

## Build Step 6 @showdialog
![Build Step 6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs06.webp)

## Build Step 7 @showdialog
![Build Step 7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs07.webp)

## Build Step 8 @showdialog
![Build Step 8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs08.webp)

## Build Step 9 @showdialog
![Build Step 9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs09.webp)

## Build Step 10 @showdialog
![Build Step 10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs10.webp)

## Build Step 11 @showdialog
![Build Step 11](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs11.webp)

## Build Step 12 @showdialog
![Build Step 12](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs12.webp)

## Build Step 13 @showdialog
![Build Step 13](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs13.webp)

## Build Step 14 @showdialog
![Build Step 14](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs14.webp)

## Build Step 15 @showdialog
![Build Step 15](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs15.webp)

## Build Step 16 @showdialog
![Build Step 16](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs16.webp)

## Build Step 17 @showdialog
![Build Step 17](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs17.webp)

## Build Step 18 @showdialog
![Build Step 18](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs18.webp)

## Build Step 19 @showdialog
![Build Step 19](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs19.webp)

## Build Step 20 @showdialog
![Build Step 20](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs20.webp)

## Build Step 21 @showdialog
![Build Step 21](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs21.webp)

## Build Step 22 @showdialog
![Build Step 22](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs22.webp)

## Build Step 23 @showdialog
![Build Step 23](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs23.webp)

## Build Step 24 @showdialog
![Build Step 24](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs24.webp)

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
Click the ``|Download|`` button to download the starter code to your project.

## Activity 3: Modify Your Project @showdialog
We have a fishway station that **allows water to flow** and **directs types of fish using a motor**. Let’s explore how to enhance our project **modifying** our code!

As you go through the next steps:

* Use the instructions at the top of the screen to **modify** your code.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb**!

## Modify Step 1
Think back to the lesson about how ecologists use fishways to track fish migration and types of fish in an ecosystem. Our project is modelling sanctuaries and conservation areas like the [Royal Botanical Gardens](https://www.rbg.ca/plants-conservation/nature-sanctuaries/fishway/) in Ontario, Canada.

What should the fishway be able to do?

~hint Tell Me More!
To help fish migrate from one body of water to another **and** to help scientists track ecosystem health, our model should be able to: 
1. **Count** how many fish have migrated through the fishway.

2. Use a **barrier** to prevent fish from exiting the fishway until scientists have collected their data.

3. **Rotate the barrier** to allow fish to pass through the fishway.

4. Turn on and off the flow of **water** from the dam. 
hint~

## Modify Step 2
Can you identify the **code block** that represents the number of fish traveling through the fishway? 

~hint Tell Me More! 
* The **event** "dial turned clockwise" runs each time the dial is turned to the right. 
* Each time the event loop is run, the **variable** "FishCount" increases by 1.
hint~

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.rightServo.fwdSetAngle(fwdSensors.dial1.fwdPosition())
    // @highlight
    FishCount += 1
})
```

## Modify Step 3
Now that we have identified how our code works, we're going to add water!

**Important!** 
Remember that our project uses electronic wires and sensors that should not get wet! If any part other than the building blocks gets wet, **turn off your project and fully dry it before continuing.**

## Build Step 24 @showdialog
Fully submerge your water pump into a container of water. Make sure that your fishway ramp is in a watertight tray that will hold all of your water.

Place your scientist monitoring station (the Micro:Bit and servo motor) away from the water, being careful not to disconnect any wires.

![Build Step 24](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs24.webp)

## Modify Step 4
Now that our dam is filled with water, we're going to simulate fish traveling through our fishway.

List all of the steps that a fish has to complete to exit the fishway.

~hint Tell Me More! 
1. Scientists turn on the pump with the **dial**, allowing water to flow through the fishway.
2. A small, native fish enters the fishway through the **white grate** at the base of the fishway
3. The fish travels up the fishway, resting at the two **green resting pools**. 
4. The fish arrives at the **closed barrier**, scientists manually log data like the size, type of fish that have traveled through the fishway. 
5. The scientist opens the barrier by turning the **dial clockwise**, a program automatically tracks the number of fish that have used the fishway today. 
6. The fish exits the fishway and enters the dam!
7. The scientist closes the barrier by turning the **dial counterclockwise** to get ready for more migrating fish. 
hint~ 

## Modify Step 5
Think about the steps that you just wrote down. Which of these tasks happen automatically using instructions from the code? 

Which of these tasks happen manually? 

~hint Tell Me More!

**Automatic Steps:**
1. Increasing the number of fish that have traveled through the fishway
2. Displaying the number of fish that have traveled through the fishway on the Micro:bit
2. Preventing large, invasive species from migrating

**Manual Steps:**
1. Turning on and off the water pump
2. Opening and closing the gate
2. Logging data like type of fish, and weight
hint~ 

## Modify Step 6
Lets **automate** one of the manual steps! 

Right now, the gate opens slowly as you turn the dial clockwise and counterclockwise. 

How might we update the code to fully open and close the gate automatically when the dial is turned? 

~hint Tell Me More!
* We can update both **"dial turned"** events to set the servo motor to a specific angle.
* When the gate is fully **closed**, our dial should move to **0 degrees**
* When the gate is fully **open**, our dial should move to **100 degrees**
hint~

``` blocks 
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.
DialDirection.CCW, function (difference) {
    // @highlight
    fwdMotors.rightServo.fwdSetAngle(0)
})

fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.rightServo.fwdSetAngle(100)
    FishCount += 1
})
``` 

## Modify Step 7
Connect your Micro:bit and click the ``|Download|`` button to download the updated code to your project.

How do you think that automating this step helps scientists do their jobs more effectively? 

~hint Tell Me More!
When a task is completed automatically with the help of a program, there can be less human error in the data that we log, so we have more accurate data about our ecosystem.

The gate turns more quickly, so more fish can migrate using the fishway in a day!
hint~

## Activity 4: Challenge @showdialog
Now that we have **modified our code** to track more fish automatically, we're going to complete a small challenge! 

## Challenge Step 1
Think back to the manual and automatic steps that our fishway performs. 

Can you **automate** another one of the manual steps?

~hint Tell Me More!

**Automatic Steps:**
1. Increasing the number of fish that have traveled through the fishway
2. Displaying the number of fish that have traveled through the fishway on the Micro:bit
3. Preventing large, invasive species from migrating
4. Opening and closing the gate to a specific angle

**Manual Steps:**
1. Opening and closing the gate when a fish is in the fishway
2. Turning on and off the water pump
3. Logging data like type of fish, and weight
hint~

## Challenge Step 2
Right now, scientists manually control the gate opening and closing when a fish is waiting to pass through the fishway.

Think about what type of sensor might **detect** when a fish is sitting in the fishway. 

~hint Tell Me More!
* A **sonar sensor** can detect when a fish is sitting in the fishway!
hint~ 

## Challenge Step 3
Try plugging the sonar sensor into your micro:bit, and adding it somewhere stable to your model. You consider the following criteria: 

* The sensor has to see the fish at the top of the fishway
* The sensor cannot get wet
* The sensor should sit in one position

~hint Tell Me More!
* Try attaching the sonar sensor to the top of your remote monitoring station (the building blocks with the motor and micro:bit)
* Remember to add the sonar sensor blocks to the code
* Plug your micro:bit into your computer and use the live simulator to verify how far away your fish is from the sonar sensor
hint~

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. Which other steps can you automate to make your fishway more efficient? 

2. What other designs might you implement into your fishway to help fish migrate more easily? 

3. How do fishways help restore habitats and support fish migration?

4. What are the pros and cons of automating features like adding a sonar sensor to our fishway?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.