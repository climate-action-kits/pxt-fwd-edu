# Forward Education Sea Level Monitoring Station - Use Tutorial

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
```

```template
let WaterLevel = 0
basic.forever(function () {
    WaterLevel = fwdSensors.sonar1.fwdDistance()
    basic.pause(1000)
    led.plotBarGraph(
    WaterLevel,
    0.3,
    true
    )
})
```

## Activity 1: Build Your Project @showdialog
Let's build a sea level monitoring station! We are going to do this in four parts: 
1. **Build** our sea level monitoring station  
2. **Add code** to bring our project to life  
3. **Use** sensors to understand how they work  
4. Apply what we learned with a small **experiment**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-render.webp" alt="Full rising sea level station render" style="display: block; width: 60%; margin:auto;">

## Build Step 1 @showdialog
![Build Step 1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs01.webp)

## Build Step 2 @showdialog
![Build Step 2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs02.webp)

## Build Step 3 @showdialog
![Build Step 3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs03.webp)

## Build Step 4 @showdialog
![Build Step 4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs04.webp)

## Build Step 5 @showdialog
![Build Step 5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs05.webp)

## Build Step 6 @showdialog
![Build Step 6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs06.webp)

## Build Step 7 @showdialog
![Build Step 7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs07.webp)

## Build Step 8 @showdialog
![Build Step 8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs08.webp)

## Build Step 9 @showdialog
![Build Step 9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs09.webp)

## Build Step 10 @showdialog
![Build Step 10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs10.webp)

## Build Step 11 @showdialog
![Build Step 11](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs11.webp)

## Build Step 12 @showdialog
![Build Step 12](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs12.webp)

## Build Step 13 @showdialog
![Build Step 13](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs13.webp)

## Build Step 14 @showdialog
![Build Step 14](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs14.webp)

## Build Step 15 @showdialog
![Build Step 15](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs15.webp)

## Build Step 16 @showdialog
![Build Step 16](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs16.webp)

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
Now that we've built our sea level monitoring station, we'll start by **using** the sample code to see how it works.

As you go through the next steps:

* **Use** the instructions at the top of the screen.  
* When you are ready for more information, click **'Tell Me More!'**  
* If you need help with the code, click the **lightbulb!**

## Use Step 1
Think back to the lesson about how satellites track ocean's water levels around the world. Our Sea level monitoring station is modelling satellite radar altimetry like [Jason-3](https://www.youtube.com/watch?v=snhFHZlbYOk).

What should it be able to do?

~hint Tell Me More!
To measure the change in sea level, our model should be able to: 
1. **Detect** the distance from the top of the water to the sonar sensor
2. **Visualize** the change in water level using the micro:bit or data logger
hint~

## Use Step 2
Take a look at the physical project you just built.

What robotic components do you notice? How do you think they’ll work together to make our model function as we expect?

~hint Tell Me More!
The sea level monitoring station has:
* One **sonar sensor** that detects the floating circular block on the surface of the water.
* One **touch sensor** that we're not currently using in our code.
* These parts are all connected to the **breakout board** through **cables**.
* Finally, the breakout board is connected to the **micro:bit** which holds all the code that will tell our sensors what to do and when to do it!
hint~

## Use Step 3
Let’s test it out! Unplug your model from your computer and place it on a table. 

## Use Step 4
Look at the micro:bit **LED display**, what is happening? 

~hint Tell Me More!
* When the distance between the table and the sonar sensor is **bigger**, more LEDs turn on! 
hint~

## Use Step 5
Place your hand on the table underneath the sonar sensor and gently move it closer to the sonar sensor. 

What happens to the LEDs on the micro:bit?

~hint Tell Me More! 
* When the distance between your hand and the sonar sensor is **smaller**, fewer LEDs turn on!
hint~

## Use Step 6
Can you identify the **code block** that is telling the code to control the LEDs on the micro:bit?

~hint Tell Me More! 
* The micro:bit collects data from the sonar sensor. 
* The code creates a graph between 0.3 meters and your hand.
hint~

```blocks
basic.forever(function () {
    WaterLevel = fwdSensors.sonar1.fwdDistance()
    basic.pause(1000)
   //@highlight 
   led.plotBarGraph(
    WaterLevel,
    0.3,
    true
    )
})
```

## Activity 4: Sea Level Experiment @showdialog
Now that we have **used** our code to understand how our sea level monitoring station **collects data**, using our hand we're going to add water!

## Build Step 17 @showdialog
To help your green circular building block float in water, wrap it with plastic wrap.

![Build Step 17](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs17.webp) 

## Build Step 18 @showdialog
Place your model in a water tight container filled 1/4 full with **room temperature water.** 

Be careful not to drop any electronic components into the water.

![Build Step 18](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs18.webp)

## Build Step 19 @showdialog
Fill one side of your container full of ice.

The large green rectangular building block should stop the ice from getting to the other side of the container.

![Build Step 19](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs19.webp)

## Build Step 20 @showdialog
Place your green circular building block on the opposite side of the container. 

The circular block is like **our hand**, it should sit in the container underneath the sonar sensor.

![Build Step 20](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/refs/heads/main/tutorial-assets/ms-risingsea-sbs20.webp)


## Experiment Step 1
Leave your micro:bit on in your container of ice and water, what do you think will happen to the LEDs as the ice melts?

Write your prediction down!


## Experiment Step 2
Now it’s time to test your prediction!

As the ice melts, create a table to log how many LEDs are lit up: 

1. When the ice has not melted
2. When the ice is 50% melted
3. When the ice is fully melted

~hint Tell Me More!
As the ice melts and the water rises, fewer LEDs will light up.

Depending on the size of your container, the water will rise more or less as your ice melts.
hint~

## Experiment Step 3
How much did the water level change? 

Create a graph to visualize your water level experiment.

~hint Tell Me More!
You may choose to create a bar or a line graph, with the following axes: 

* X: Percentage of Ice Melting
* Y: Level of water (Number of LED lit Up)
hint~

## Congratulations! @showdialog
You've completed the activity!

Did anything surprise you about the project?

## Reflection @showdialog
1. How did using predictions and data collection help you better understand your code?

2. How do you think a different amount of ice would change the results of your experiment?

3. What differences did you find in the accuracy of the sonar sensor?

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.