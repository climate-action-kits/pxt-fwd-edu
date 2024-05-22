#  Turtle-safe Beach Lights - Modify Tutorial
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```

```template
fwdSensors.ledRing.fwdSetBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() < 40) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    } else if (fwdSensors.solar1.fwdLightLevel() >= 40 && fwdSensors.solar1.fwdLightLevel() < 80) {
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xff0000)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Activity 1: Build Your Project @showdialog
Let's build a turtle-safe beach light! We are going to do this in 4 parts:
1. **Build** our light
2. **Add code** to bring it to life
3. **Modify** our code to learn how it works
4. Complete a couple of challenges to make our light even safer for sea turtles!
   
<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-projectrender.webp" alt="projectrender" width="300"/>

## Build Step 1 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs01.webp)

## Build Step 2 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs02.webp)

## Build Step 3 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs03.webp)

## Build Step 4 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs04.webp)

## Build Step 5 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs05.webp)

## Build Step 6 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs06.webp)

## Build Step 7 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs07.webp)

## Build Step 8 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs08.webp)

## Build Step 9 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs09.webp)

## Build Step 10 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs10.webp)

## Build Step 11 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs11.webp)

## Build Step 12 @showdialog
![turtlesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr68-turtles-sbs12.webp)

## Activity 2: Code Your Project @showdialog
We need to connect our project to the computer to make it come to life with code! <br> The code will be the instructions that tell our micro:bit what to do.

## Code Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.
<br><img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" width="400">


## Code Step 2 @showdialog
Click the three dots beside the  ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)


## Code Step 3
Click the ``|Download|`` button to download the starter code.

## Activity 3: Modify Your Project @showdialog
We are ready to **modify** our turtle-safe beach light!<br>
**Tips**
1. Follow the instructions at the top of the screen.
2. Whenever you are ready for more information, click **‘Tell me more!’**
3. If you need help with the code, click the lightbulb!
