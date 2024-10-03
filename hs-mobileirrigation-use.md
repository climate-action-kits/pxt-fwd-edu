# Mobile Irrigation System - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 25)
        basic.pause(3000)
        fwdMotors.stop()
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        fwdMotors.pump.fwdTimedRun(1500)
        basic.pause(3000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    }
})
fwdMotors.setupDriving(
fwdMotors.rightServo,
fwdMotors.leftServo,
45
)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
```

## Activity 1: Build Your Project @showdialog
Let's build a mobile irrigation system! We are going to do this in three parts:
1. **Build** your vehicle
2. **Add code** to your vehicle to bring it to life
3. **Use** and **study** your vehicle to learn how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-render.webp" alt="Full mobile irrigation render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs01.webp)

## Build Step 2 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs02.webp)

## Build Step 3 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs03.webp)

## Build Step 4 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs04.webp)

## Build Step 5 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs05.webp)

## Build Step 6 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs06.webp)

## Build Step 7 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs07.webp)

## Build Step 8 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs08.webp)

## Build Step 9 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs09.webp)

## Build Step 10 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs10.webp)

## Build Step 11 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs11.webp)

## Build Step 12 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs12.webp)

## Build Step 13 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs13.webp)

## Build Step 14 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs14.webp)

## Build Step 15 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs15.webp)

_Note: Simply place the pump on top of the vehicle. We will not use water while testing the prototype._

## Build Step 16 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs16.webp)

## Build Step 17 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs17.webp)

_Note: If you'd like to attach the plastic tubing to the pump, you may secure it around this medium frame and pass it through the servo hole. This will help ensure the water comes from the back of the vehicle._

## Build Step 18 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs18.webp)

## Build Step 19 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs19.webp)

## Build Step 20 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/hs-mobileirrigation-sbs20.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code!

The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 3
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
We are now ready to **use** our mobile irrigation system!

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. When you are ready for more detail, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb**!

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Use Step 1
Take a close look at the mobile irrigation system you just built. Can you identify and name each part you used?

~hint Tell me more!
This system uses:
- **Building Blocks:** The base plate, four long frames with servo holes, four medium frames, one medium frame with servo holes, three thin frames, four small frames, four cube connectors, eight corner connectors, and two wheels
- **Robotic Parts:** A breakout board, micro:bit, two continuous servo motors, an LED ring, touch sensor and sonar sensor
hint~

## Use Step 2
How do you think all these parts work together to make the vehicle operate?

~hint Tell me more!
- The building blocks create a structure that can withstand a variety of forces.
- The micro:bit collects user **input** from the touch sensor.
- The micro:bit communicates with the pump, motors, and LED ring, telling each when to activate. These components provide our **output**. 
- All parts must be correctly connected through the breakout board and cables and programmed to ensure smooth operation.
hint~

## Use Step 3
Look at code provided below. 

What do you predict will happen when you run the program? What parts of the code have influenced your prediction?

## Use Step 4
Run the vehicle by pressing the touch sensor. Observe what happens.

Did the vehicle behave as you predicted? If not, what was different? Can you explain these differences?

~hint Tell me more!
When the touch sensor is activated, the vehicle:
1. Drives forward for 3 seconds.
2. Stops.
3. Turns on the green LEDs to indicate watering is about to happen.
4. Runs the pump for 1.5 seconds to water the crops.
5. Turns on the red LEDs to indicate watering is complete.

This process repeats 4 times.
hint~

```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 25)
        basic.pause(3000)
        fwdMotors.stop()
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
        fwdMotors.pump.fwdTimedRun(1500)
        basic.pause(3000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    }
})
```

## Use Step 5
Run the vehicle again. This time, calculate the speed of your mobile irrigation vehicle.

Knowing the speed will help us understand how efficiently the vehicle operates.

~hint Tell me more!
- **How to Do It:** Try using [this worksheet](https://docs.google.com/spreadsheets/d/19piwhyA8-yKC_VqT9BU_wR1LtD1rLymY5Uc_YWKD5a4/edit?usp=sharing). Measure the distance your vehicle travels. Time how long it takes to cover that distance. 
- **Slope:** As you graph multiple data points along your vehicle's journey, the slope of the line of best fit should represent the vehicle's speed. Use the formula: **Speed = Distance / Time**
- **Analyze Your Findings:** How fast does your vehicle travel? What factors affect its speed?
hint~

## Water Conservation Modeling @showdialog
Let's use the speed to start making some calculations about how much water this system is able to conserve. 

## Modeling Step 1
First consider how much water would be used if the pump ran _continuously_ on a 100cm drive?

_Note: Assume the maximum flow rate of the pump is approximately 28mL/second._

~hint Tell me more!
The equation to calculate water usage for a continuous system would be: 𝑊(d) = 𝑟 × (d/𝑣)

Where:
- 𝑊(d) is the total water usage in milliliters
- 𝑟 is the pump speed in milliliters per second (28mL/second)
- d is the total distance the vehicle travels in centimeters
- 𝑣 is the speed of the vehicle in centimeters per second
hint~

## Modeling Step 2
Thankfully the prototype we've just built only runs the pump _periodically_. How much water would _this_ prototype use on a 100cm drive? What equation would you use in this scenario?

Think about what variables you need to consider (e.g. time, distance, vehicle speed, pump speed/flow rate, pump time, etc.)? How do these variables relate to water usage in the current prototype?

~hint Tell me more!
To calculate the water usage for the mobile irrigation system we've just built, we will use this equation: 𝑊(d) = 𝑟 × d × fd × tp

Where:
- 𝑊(d) is the water usage in milliliters
- 𝑟 is the pump speed in milliliters per second (28 mL/second)
- fd is the pumping frequency (e.g., number of activations per centimeter)
- d is the total distance traveled in cm
- tp is the pump time per activation (1.5 seconds)
hint~

## Modeling Step 3
Finally, it's time to calculate how much water this prototype saves compared to the continuous system.

Subtract the water used in the prototype from the water used in the continuous system. What does this difference tell you about the efficiency of your design? How could the water savings from your design impact agricultural practices in areas facing water scarcity?

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
List 2 new things you learned today. 

What is one thing you want to learn more about? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.