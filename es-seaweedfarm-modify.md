# Smart Seaweed Farm - Modify Tutorial
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
Let's build a smart seaweed farm! We'll do this in four parts:
1. **Build** your farm
2. **Add code** so it can detect movement
3. **Modify** your farm to learn how it works
4. Complete a **challenge** to make it even better

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-render.webp" alt="Full seaweed farm model render" style="display: block; width: 70%; margin:auto;">

## Build Supplies @showdialog
![sbs0A](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-seaweedfarming-sbs0B.webp)

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
Now it’s time to bring your farm model to life with code! The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Code Step 2
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Modify Your Project @showdialog
We are now ready to **modify** our seaweed farm!

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb**!
4. After each change, ``|Download|`` the new code to your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modify Step 1
Start by gently shaking the string attached to your micro:bit. 

What do you notice? Look at the LED screen on your micro:bit.

~hint Tell me more!
- **Input**: Your micro:bit can sense movement using its [accelerometer](https://microbit.org/get-started/features/sensors/#accelerometer).
- **Output**: Right now, when it senses shaking, it lights up with a fish symbol!
hint~

```blocks
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

## Modify Step 2
Let’s change what shows up on the screen when the micro:bit senses movement.

Right now, it shows a fish. Instead, try creating a warning symbol or another new design!

~hint Tell me more!
- Edit the code inside the ``||input:on shake||`` block to replace it with your own design, like an exclamation point!
- Click on the LED blocks to turn them on or off.
- Download your new code to test it.
hint~

```blocks
input.onGesture(Gesture.Shake, function () {
    // @highlight
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
```

## Modify Step 3
In real seaweed farms, the alert wouldn’t show up underwater—it would be sent to a farmer on land! We can use the micro:bit’s [radio](https://microbit.org/get-started/features/radio-and-pins/) to send this alert.

## Modify Step 4
First, we need to add the ``||radio:set group||`` block in an ``||basic:on start||`` block to make sure both micro:bits are on the same radio channel. This way they can "talk" to each other.

```blocks
// @highlight
radio.setGroup(5)
```
## Modify Step 5
Next, we need to send a radio alert to the farmer _when the ropes are shaken._

Drag the ``||radio:radio send string||`` block into the ``||input:on shake||`` block. Write 'ALERT' in the blank space.

```blocks
input.onGesture(Gesture.Shake, function () {
    // @highlight
    radio.sendString("ALERT")
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
```

## Modify Step 6
Now, add a second event that tells the farmer's micro:bit what to do when an 'ALERT' signal is received.

~hint Tell me more!
- Go to the ``||radio:Radio||`` category and drag ``||radio:on radio received||`` block into the workspace.
hint~

```block
radio.onReceivedString(function (receivedString) {
	
})
```

## Modify Step 7
Move the ``||basic:show LEDs||`` block to this new event.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("ALERT")
})
```

## Modify Step 8
Download this new code to the micro:bit attached to your farm. Then, download the same code to a second micro:bit that will stay with the farmer. 

Make sure both micro:bits have a power source. Then, test out the alert by shaking the ropes again!

~hint Tell me more!
- The micro:bit that is attached to the farm no longer displays the alert symbol. The micro:bit that stays with the farmer displays it!
hint~

## Challenge Time! @showdialog
Let’s make your alert system even better!

1. Add a sound to get the farmer’s attention.
2. Add a way to clear the alert after the farmer has released the animal.

## Challenge Step 1
To add a sound, drag a ``||music:play tone||`` block into the ``||radio:on received string||`` event. 

Adjust the note and number of beats so the sound draws attention!

```blocks
radio.onReceivedString(function (receivedString) {
basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    // @highlight
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
```

## Challenge Step 2
We need to _clear_ the alert once the farmer has seen it. 

Add a button press event from the ``||input:Input||`` category. Then, drag a ``||basic:clear screen||`` block inside it.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
```

## Congratulations! @showdialog
You've completed the activity!

## Reflection @showdialog
Think about something in this project that was tricky. 

How did you figure it out? How did that make you feel?

What is one additional thing you could do to improve your farm?

## Finish & Extend @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial. 

Once you exit the tutorial, you'll have access to more MakeCode blocks. Try using new blocks to make your alert system even better! Here are some ideas:

- Add a _flashing_ LED animation when the alert is active to make it more noticeable
- Change the melody to a louder or more urgent sound, like a siren
