# Smart Seaweed Farm - Use Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # . # # .
        # # # . #
        # . # # .
        . . . . .
        `)
})
```

## Activity 1: Build Your Project @showdialog
Let's build our smart seaweed farm! We will do this in three parts:
1. **Build** your model
2. **Add code** so it can detect movement
3. **Use** and **test** your model to see how it works

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-render.webp" alt="Full seaweed farm model render" style="display: block; width: 70%; margin:auto;">

## Build Supplies @showdialog
![sbs0A](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs0A.webp)

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs01.webp)

## Build Step 2 @showdialog
![sbs2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs02.webp)

## Build Step 3 @showdialog
![sbs3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs03.webp)

## Build Step 4 @showdialog
![sbs4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs04.webp)

## Build Step 5 @showdialog
![sbs5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs05.webp)

## Build Step 6 @showdialog
![sbs6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs06.webp)

## Build Step 7 @showdialog
![sbs7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs07.webp)

## Build Step 8 @showdialog
![sbs8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs08.webp)

## Build Step 9 @showdialog
![sbs9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs09.webp)

## Build Step 10 (Optional) @showdialog
![sbs10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs10.webp)

_Note: If you have the CHARGE for micro:bit, you can use it here!_

## Activity 2: Code Your Project @showdialog
Now it’s time to bring your model to life with code! The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 2
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog
We are now ready to **test** out our farm model to see how it detects when animals get tangled in its ropes.

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb!**

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Use Step 1
Take a close look at the model you just built. Can you name all its parts? 

~hint Tell me more!
This model uses:
- **Building Blocks:** One baseplate, two medium white frames, four long white frames, and four cube connectors
- **Craft supplies:** Rope, elastic, yarn or string and construction paper
- **Robotic Parts:** A micro:bit with an [accelerometer](https://microbit.org/get-started/features/sensors/#accelerometer)
hint~

## Use Step 2
Imagine this is a real seaweed farm in the ocean. 

What do these different parts represent? Why do you think the micro:bit is hanging from the ropes?

~hint Tell me more!
- The ropes represent the lines where the seaweed grows. We crafted our own seaweed with construction paper!
- The building blocks represent the poles that anchor the seaweed lines. They keep the ropes steady in the water.
- The micro:bit is hanging from one of the ropes so it can sense whenever the rope moves. For example, this might happen if an animal got tangled in it. 
hint~

## Use Step 4
Time to test out the model. 

Try gently tugging or shaking different parts of the rope. When does the micro:bit respond? 

~hint Tell me more!
- The sensor responds best when you shake the rope closest to it. If the movement is too far away, it is not always detected.
- When the micro:bit does detect movement, it shows a fish on the LEDs.
hint~

```blocks
input.onGesture(Gesture.Shake, function () {
    // @highlight
    basic.showLeds(`
        . . . . .
        # . # # .
        # # # . #
        # . # # .
        . . . . .
        `)
})
```

## Use Step 5
Real seaweed farms might also be affected by _waves_. Let’s test if your sensor can tell the difference between waves and an animal getting stuck.  

Gently rock your rope or model back and forth, mimicking the motion of the ocean waves. Does the micro:bit respond?

~hint Tell me more!
- The sensor should be able to tell the difference between predictable wave patterns and sudden, unpredictable shaking movement.
- Right now, the ``||input:on shake||`` block is being used to send out the alert. This block is designed to detect sudden, unusual movement, like an animal bumping into the ropes repeatedly.
hint~

```blocks
// @highlight
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # . # # .
        # # # . #
        # . # # .
        . . . . .
        `)
})
```

## Use Step 6
Let's take a minute to reflect. 

What does your model do well?

~hint Tell me more!
- It can tell the difference between the gentle rocking of waves and the sudden shaking caused by an animal.
hint~

## Use Step 7
What could be improved in this model? How might you make it even better?

~hint Tell me more!
We could:
- add more sensors across the ropes to help detect movement all over the farm.
- use brightly coloured ropes to make it easier for animals to see and avoid. 
- tighten the ropes! Research shows that animals are less likely to get caught in tight ropes.
hint~

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
List 2 new things you learned today. 

What is one thing you want to learn more about? 

## Finished! @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.