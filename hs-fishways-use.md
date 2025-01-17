# Forward Education Preserving Fish Migration Routes with Fishways - Use Tutorial

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
Let's explore fish migration! We are going to do this in three parts: 
1. **Build** our fishway
2. **Add code** to bring our project to life  
3. **Use** sensors to understand how they work  

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

## Activity 3: Use Your Project @showdialog
Now that we've built our fishway, we'll start by **using** the sample code to see how it works.

As you go through the next steps:

* **Use** the instructions at the top of the screen.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb!**

## Use Step 1
Think back to the lesson about how engineers design fishways to fit its ecosystem.

What physical features do you notice in the design of the fishway?

~hint Tell Me More!

The fishway is on an **angle** to get from the bottom of a body of water, to the top of a dam. 

A **white grate** at the base of the fishway prevent large, invasive species like goldfish from entering. 

Green, **horizontal pieces** on the angled slope form vertical slots to create resting pools for fish.

A data collection station with a ``||fwdSensors:dial||`` and ``||fwdMotors:servo||`` connected to the micro:bit.

A **white gate** in the **closed** position preventing fish from exiting the fishway until ecologists open it.

A tube connected to the **water pump** that we're not using now, but we'll use in the **create** phase.

hint~

## Use Step 2
Think back to the lesson about how ecologists use fishways to track fish migration and types of fish in an ecosystem. Our project is modelling sanctuaries and conservation areas like the [Cootes Paradise Marsh](https://www.rbg.ca/plants-conservation/nature-sanctuaries/fishway/) in Ontario, Canada.

What should the fishway be able to do?

~hint Tell Me More!

To help fish migrate from one body of water to another **and** to help ecologists track ecosystem health, our model should be able to: 
1. **Count** how many fish have migrated through the fishway.

2. Use a **gate** to prevent fish from exiting the fishway until ecologists have collected their data.

3. **Rotate the gate** to allow fish to pass through the fishway.
hint~

## Use Step 3
Unplug your model from your computer and place it on a table. 

Before we start testing our code, make sure that the **gate** on the **data collection station** is set to the **closed** position on your fishway. 

~hint Tell Me More!

If the **gate** is set to a different position, gently remove the **green circular** building block from your ``||fwdMotors:servo||`` and reattach it so that it is facing 90 degrees to the left, over top of your fishway.

The **gate** is the **long white** building block attached to the **green circular** building block 

The **data collection station** is the set of blocks, ``||fwdMotors:servo||`` motor, and ``||fwdSensors:dial||`` that is attached to the micro:bit

hint~

## Use Step 4
Let’s test it out! 

Rotate the ``||fwdSensors:dial||`` to the **right** several full rotations, then back to the **left** several full rotations. 

What is happening?

~hint Tell Me More! 
* **If** the ``||fwdSensors:dial||`` turns in one direction, the gate in the data collection station **opens** 

* **If** the ``||fwdSensors:dial||`` turns in the other direction, the gate in the data collection station **closes**

hint~

``` blocks 
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    // @highlight
    fwdMotors.rightServo.fwdSetAngle(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    // @highlight
    fwdMotors.rightServo.fwdSetAngle(fwdSensors.dial1.fwdPosition())
})
``` 

## Use Step 5
Can you identify the ``||variables:variable||`` that represents the number of fish traveling through the fishway? 

~hint Tell Me More! 

* The **event**  ``||fwdSensors:on touch down||``  runs each time the dial is pressed down. 

* Each time the event loop is run, the variable ``||variables:FishCount||`` increases by 1.

hint~

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    // @highlight
    FishCount += 1
})
```

## Use Step 6
Using your hand, or by attaching a small fish to a spare building block using craft materials, move the fish along the fishway!

**List** all of the steps that a fish has to complete to exit the fishway.

~hint Tell Me More! 

1. A small, native fish enters the fishway through the **white grate** at the base of the fishway

2. The fish travels up the fishway, resting at the two **green resting pools**. 

3. The fish arrives at the **closed gate**, ecologists manually log data like the size, type of fish that have traveled through the fishway. 

4. The ecologist opens the gate by turning the ``||fwdSensors:dial||`` **in one direction**, and manually **presses**  the ``||fwdSensors:dial||`` to track the number of fish that have used the fishway today. 

5. The fish exits the fishway and enters the dam!

6. The ecologist closes the gate by turning the ``||fwdSensors:dial||`` **the other direction** to get ready for more migrating fish. 

hint~ 

## Use Step 7
Think about the steps that you just **listed**. 

Which of these tasks happen **automatically** using instructions from the code and the physical design? 

Which of these tasks happen **manually**? 

~hint Tell Me More!

**Automatic Steps:**
1. Displaying the number of fish using the ``||variables:FishCount||`` variable on the micro:bit
2. Preventing large, invasive species from migrating

**Manual Steps:**
1. Turning the ``||fwdSensors:dial||``  to open and close the gate
2. Pressing the ``||fwdSensors:dial||`` to count the number of fish.
3. Closing the gate once a fish passes through the fishway
4. Logging data like type of fish, and weight

In the **Modify** tutorial, we'll start automating some of these steps!
hint~ 

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. What other designs might you implement into your fishway to help fish migrate more easily? 

2. How do fishways help restore habitats and support fish migration?

3. How accurate do you think our fishway should be at counting and detecting fish? What adaptations can you suggest to increase the accuracy of the data collection?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.