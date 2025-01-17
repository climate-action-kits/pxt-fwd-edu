# Forward Education Preserving Fish Migration Routes with Fishways - Modify Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```
 
```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    FishCount += 1
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.rightServo.fwdSetAngle(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.rightServo.fwdSetAngle(fwdSensors.dial1.fwdPosition())
})
let FishCount = 0
fwdMotors.rightServo.fwdSetAngle(0)
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

## Electronics Required @showdialog
![Electronic Pieces Required](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs0A.webp)

## Building Blocks Required @showdialog
![Building Blocks Required](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/hs-fishways-sbs0B.webp)

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
IMPORTANT! Make sure to attach your circular green, and long white building blocks to the positional servo motor facing **90 degrees to the left**, as pictured.
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
We have a fishway station that **directs types of fish using a motor**. Let’s explore how to enhance our project **modifying** our code!

As you go through the next steps:

* Use the instructions at the top of the screen to **modify** your code.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb**!

## Modify Step 1
Think back to the lesson about how ecologists use fishways to track fish migration and types of fish in an ecosystem. Our project is modelling sanctuaries and conservation areas like the [Cootes Paradise Marsh](https://www.rbg.ca/plants-conservation/nature-sanctuaries/fishway/) in Ontario, Canada.

What should the fishway be able to do?

~hint Tell Me More!

To help fish migrate from one body of water to another **and** to help ecologists track ecosystem health, our model should be able to: 
1. **Count** how many fish have migrated through the fishway.

2. Use a **gate** to prevent fish from exiting the fishway until ecologists have collected their data.

3. **Rotate the gate** to allow fish to pass through the fishway.

hint~

## Modify Step 2
Using your hand, or by attaching a small fish to a spare building block using craft materials, move the fish along the fishway!

**List** all of the steps that a fish has to complete to exit the fishway.

~hint Tell Me More! 

1. A small, native fish enters the fishway through the **white grate** at the base of the fishway

2. The fish travels up the fishway, resting at the two **green resting pools**. 

3. The fish arrives at the **closed gate**, ecologists manually log data like the size, type of fish that have traveled through the fishway. 

4. The ecologist opens the gate by turning the ``||fwdSensors:dial||`` **clockwise**, and manually **presses**  the ``||fwdSensors:dial||`` to track the number of fish that have used the fishway today. 

5. The fish exits the fishway and enters the dam!

6. The ecologist closes the gate by turning the ``||fwdSensors:dial||``  **counterclockwise** to get ready for more migrating fish. 

hint~ 

## Modify Step 3
Think about the steps that you just **listed**. 

Which of these tasks happen **automatically** using instructions from the code and the physical design? 

Which of these tasks happen **manually**? 

~hint Tell Me More!

**Automatic Steps:**
Displaying the number of fish using the ``||variables:FishCount||`` variable on the micro:bit

Preventing large, invasive species from migrating

**Manual Steps:**

Turning the ``||fwdSensors:dial||``  to open and close the gate

Pressing the ``||fwdSensors:dial||`` to count the number of fish.

Closing the gate once a fish passes through the fishway

Logging data like type of fish, and weight

hint~ 

## Modify Step 4
Lets **automate** one of the manual steps! 

Right now, the gate opens slowly as you turn the ``||fwdSensors:dial||`` in either direction.  

How might we update the code to fully open and close the gate **automatically** when the ``||fwdSensors:dial||`` is turned? 

~hint Tell Me More!

We can update both ``||fwdSensors:dial turned||`` events to set the servo motor to a specific angle.

Delete the ``||fwdSensors:dial absolute position||`` block from each ``||fwdMotors:set motor||`` block.

hint~

``` blocks 
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    // @highlight
    fwdMotors.rightServo.fwdSetAngle()
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.rightServo.fwdSetAngle()
})
``` 

## Modify Step 5
Now let's automate the movement! 

* When the gate is fully **closed**, our dial should move to **0 degrees**

* When the gate is fully **open**, our dial should move to **100 degrees**

~hint Tell Me More! 

Type the numbers "0" and "100" into each space where you deleted the two ``||fwdSensors:dial absolute position||`` blocks.

Remember to connect your micro:bit and click the ``|Download|`` button to test your updated code.
hint~

```blocks 
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    // @highlight
    fwdMotors.rightServo.fwdSetAngle(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.rightServo.fwdSetAngle(100)
})
``` 

## Modify Step 6
Now that our gate opens and closes more quickly, let's automate our ``||variables:FishCount||`` variable to increase each time the gate **opens**

~hint Tell Me More! 

1. We need to drag our ``||variables:FishCount||`` variable from the ``||fwdSensors:on touch down||`` event to the ``||fwdSensors:on dial turned by||`` event.

2. When the ``||fwdMotors:set rightServo||`` block is set to 100, the gate is open.

3. We can delete our ``||fwdSensors:on touch down||`` block now!

hint~

```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
        fwdMotors.rightServo.fwdSetAngle(100)
        // @highlight
        FishCount += 1
})
```

## Modify Step 7
Remember to connect your micro:bit and click the ``|Download|`` button to test your updated code.

How do you think that automating these steps helps ecologists do their jobs more effectively? 

~hint Tell Me More!

When a task is completed **automatically** with the help of a program, there can be less **human error** in the data that we log, so we have more **accurate data** about our ecosystem.

The gate turns more quickly, so more fish can migrate using the fishway in a day!
hint~

## Activity 4: Challenge @showdialog
Now that we have **modified our code** to track more fish automatically, we're going to complete a small challenge! 

## Challenge Step 1
Think back to the manual and automatic steps that our fishway performs. 

Can you **automate** another one of the manual steps?

~hint Tell Me More!

**Modified Automatic Steps:**
1. Displaying the number of fish using the ``||variables:FishCount||`` variable on the micro:bit
2. Preventing large, invasive species from migrating
3. **Modified:** increasing the ``||variables:FishCount||`` when the gate opens
4. **Modified:** Opening and closing the gate to a specific location using the ``||fwdSensors:dial||``

**Manual Steps:**
1. Closing the gate once a fish passes through the fishway
2. Logging data like type of fish, and weight
hint~ 

## Challenge Step 2
Right now, even though the gate fully opens and closes, ecologists need to **trigger the event** by turning the ``||fwdSensors:dial||`` **manually** 

Think about what type of sensor might **detect** when a fish has successfully passed through the gate. 

~hint Tell Me More!

A ``||fwdSensors:sonar||`` sensor can detect when a fish is no longer in the way of the gate!

hint~ 

```block
fwdSensors.sonar1.fwdDistancePastThreshold()
```

## Challenge Step 3
First we need to add the sensor to our physical build!

Try plugging the ``||fwdSensors:sonar||`` sensor into your micro:bit, and add it somewhere stable to your model. You consider the following criteria: 

1. The sensor has to see the fish at the top of the fishway
2. The sensor should sit in one position

~hint Tell Me More!

* Try attaching the ``||fwdSensors:sonar||`` sensor to the top of your remote monitoring station (the building blocks with the motor and micro:bit)

* You may need to add a **small white** building block, and **blue 90 degree** connector. 

hint~

## Challenge Step 4
Now that you've added a ``||fwdSensors:sonar||`` sensor to your model, think about how you will code your project! 

Your code should use the following criteria: 
1. Detect if an object is **over 0.2 m** 
2. ``||basic:pause||`` for 1 second
3. Rotate the ``||fwdMotors:motor||`` to 0 degrees.

Remember to connect your micro:bit and click the ``|Download|`` button to test your updated code.

~hint Tell Me More!

Take a look at the sample code blocks if you feel stuck!
hint~

```blocks 
basic.forever(function () {
    basic.showNumber(FishCount)
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Over)) {
        basic.pause(1000)
        fwdMotors.rightServo.fwdSetAngle(0)
    }
``` 

## Challenge Step 5
Remember to connect your micro:bit and click the ``|Download|`` button to test your updated code.

Let's test it out! 

Try holding your hand in front of the sonar sensor, as if it was a fish in your fishway, then take your hand away. Does your gate close again? 

~hint Tell Me More! 

Each time we set up new sensors, like our ``||fwdSensors:sonar||`` sensor, we need to calibrate our code. 

Make sure you're using the live simulator to look at the distance that your sonar sensor is detecting. 

Adjust the sonar distance from 0.2 m to another number, and download your code to your micro:bit each time to test it!
hint~ 

## Challenge Step 6
Let's see what type of fish our automatic gate detects the most consistently! 

Try using the fishway with two different types of fish: 
1. Use your **hand** to fully cover the sonar sensor
2. Use a **long white** building block from the Climate Action Kit, with a fish attached to the end

Keep track of your results on a piece of paper.

## Challenge Step 7

Which type of fish did the sonar sensor detect more consistently? 

Does the speed that your hand or the building block is moving make a difference to the gate automatically closing? 

~hint Tell Me More! 

Our sonar sensor detects **bigger, slower fish** more easily than **small, quick fish**

Sometimes, automating technology is a great idea, but the limitations may outweight the benefits. 

Based on the **pros and the cons**, do you think ecologists would keep the **automated gate closing** feature, or would they prefer to **manually close** it? 
hint~ 

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. Think about the data from fishways we explored in the big idea section: 
   * How might we display the number of fish when 100 fish have gone through the fishway each day? 
   * How would we display 1000 fish? 

2. How might you adapt your fishway physical build and code with craft materials for water to flow down it?

3. What are the pros and cons of automating features like adding a sonar sensor to our fishway?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.