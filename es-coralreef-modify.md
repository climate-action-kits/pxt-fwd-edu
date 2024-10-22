# Coral Reef Model - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
sonar=github:climate-action-kits/pxt-fwd-edu
datalogger=datalogger
```

```template
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    temperature += -1
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    temperature += 1
})
let temperature = 28
basic.forever(function () {
    basic.showNumber(temperature)
})
basic.forever(function () {
    if (temperature > 32) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0080)
    }
    basic.pause(100)
})
```
## Activity 1: Build Your Project @showdialog
Let's build a coral reef model! We will do this in four parts:
1. **Build** your model
2. **Add code** to your model to simulate coral bleaching
3. **Modify** your code to learn how it works
4. Complete a **challenge** to make the model more realistic

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-render.webp" alt="Full coral reef model render" style="display: block; width: 70%; margin:auto;">

## Build Step 1 @showdialog
![sbs1](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs01.webp)

## Build Step 2 @showdialog
![sbs2](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs02.webp)

## Build Step 3 @showdialog
![sbs3](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs03.webp)

## Build Step 4 @showdialog
![sbs4](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs04.webp)

## Build Step 5 @showdialog
![sbs5](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs05.webp)

## Build Step 6 @showdialog
![sbs6](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs06.webp)

## Build Step 7 @showdialog
![sbs7](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs07.webp)

## Build Step 8 @showdialog
![sbs8](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs08.webp)

## Build Step 9 @showdialog
![sbs9](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs09.webp)

## Build Step 10 @showdialog
![sbs10](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs10.webp)

## Build Step 11 @showdialog
![sbs11](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs11.webp)

## Build Step 12 @showdialog
![sbs12](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/es-coralreef-sbs12.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our model to the computer to make it come to life with code!

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

## Activity 3: Modify Your Project @showdialog
We are now ready to **modify** the code of our coral reef model.

**Tutorial Tips**

1. **Follow** the steps at the top of the screen.
2. When you are ready for more details, click **'Tell me more!'**
3. If you need help with the code, click the **lightbulb**!
4. After each change, ``|Download|`` the new code to your micro:bit.

<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modify Step 1
Let's test out our model! Slowly turn the dial to the right. What do you notice?

~hint Tell me more!
- The number on the micro:bit increases as you turn the dial. This number represents the ocean temperature.
- When the temperature is above 32°C, the LED ring turns from pink to white. This represents coral bleaching!
hint~

```block
let temperature = 28

fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    temperature += -1
})

fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    temperature += 1
})

basic.forever(function () {
    basic.showNumber(temperature)
})
```

## Modify Step 2
We used something called a **conditional statement** to change the colour of our LED ring (aka our coral!) when the temperature was high.

Can you find the conditional in the code below?

~hint Tell me more!
Our conditional statement tells the micro:bit:
- If the temperature is above 32°C, the coral bleaches (the LEDs turn white).
- If the temperature is 32°C or lower, the coral stays healthy (the LEDs stay pink).
hint~

```block
    // @highlight
    if (temperature > 32) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0080)
    }
```

## Modify Step 3
Now, let's change _when_ bleaching happens. Edit your code so the coral starts bleaching at 30°C. 

Download your new code and test it out. What happens when you turn the dial now?

```block
    // @highlight
    if (temperature > 30) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0080)
    }
```

## Modify Step 4
Corals can be many different colours. 

Try changing the colour of your _healthy_ coral to something other than pink! 

```block
    if (temperature > 30) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else {
        // @highlight
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    }
```

## Challenge Time! @showdialog
Let's make our model more realistic by programming the coral to bleach _more slowly_.

We want:
- **2/8** LEDs to turn white when the temperature is **29°C**.
- **4/8** LEDs to turn white when the temperature is **30°C**.
- **8/8** LEDs to turn white when the temperature is **above 30°C**.

## Challenge Step 1
We will need to add more conditionals to show gradual bleaching as the temperature increases.

## Challenge Step 2
Let's start by adding another condition to our code. Click the '+' symbol at the bottom of the ``||logic:if then else||`` block.

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else if (false) {
    	
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    }
    basic.pause(100)
})
```

## Challenge Step 2
We want this new condition to turn **4 LEDs** white when the temperature is _exactly_ **30°C**. 

Click on the **temperature > 30** part of the code. Then, right click and select 'Duplicate'.

## Challenge Step 3
Drag this new expression into the blank conditional statement. Change **>** to **=**.

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else if (temperature == 30) {
    	
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    }
    basic.pause(100)
})
```

## Challenge Step 4
Go to the ``||fwdSensors:Sensors||`` category. Drag 8 ``||fwdSensors:set ledRing 0 to red||`` blocks into the new conditional. 

~hint Tell me more!
- The ``||fwdSensors:set ledRing 0 to red||`` block will let us change the colour of each LED. 
hint~

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else if (temperature == 30) {
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    }
    basic.pause(100)
})
```

## Challenge Step 5
Each LED on the ring is numbered 0 to 7. 

Tell the micro:bit which LED we want to control by changing the number in each ``||fwdSensors:set ledRing 0 to red||`` block.

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else if (temperature == 30) {
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(2, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(3, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(5, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(6, 0xff0000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(7, 0xff0000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    }
    basic.pause(100)
})
```

## Challenge Step 6
Now, change the LED colours so that **4/8** LEDs turn white at **30°C**. 

The other 4/8 LEDs should stay the healthy colour!

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else if (temperature == 30) {
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xffffff)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(2, 0xffffff)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(3, 0xff8000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xffffff)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(5, 0xff8000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(6, 0xffffff)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(7, 0xff8000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    }
    basic.pause(100)
})
```

## Challenge Step 7
Add another condition to make **2/8** LEDs turn white at **29°C**. 

Check the lightbulb for our solution.

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
    } else if (temperature == 30) {
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xffffff)
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)
        fwdSensors.ledRing.fwdSetPixelColour(2, 0xffffff)
        fwdSensors.ledRing.fwdSetPixelColour(3, 0xff8000)
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xffffff)
        fwdSensors.ledRing.fwdSetPixelColour(5, 0xff8000)
        fwdSensors.ledRing.fwdSetPixelColour(6, 0xffffff)
        fwdSensors.ledRing.fwdSetPixelColour(7, 0xff8000)
    } else if (temperature == 29) {
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xffffff)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff8000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(2, 0xff8000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(3, 0xff8000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xffffff)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(5, 0xff8000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(6, 0xff8000)
        // @highlight
        fwdSensors.ledRing.fwdSetPixelColour(7, 0xff8000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff8000)
    }
    basic.pause(100)
})
```

## Congratulations @showdialog
You've completed the activity!

## Reflection @showdialog
Think about something in this project that was tricky. 

How did you figure it out? How did that make you feel?

How else could you improve your coral reef bleaching model? Could you represent the different stages of bleaching another way?

## Reflection @showdialog
In the next step, you can click the ``|Done|`` button to finish the tutorial.