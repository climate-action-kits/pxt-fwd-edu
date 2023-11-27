# Bees
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```

## Step 1 @showdialog
Welcome to Bees Coding Tutorial.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-beetouch-200.png)

## Step 2 @showdialog
In this coding tutorial we will count the number of pollinators visiting your garden monitor, whenever a pollinator lands on the touch sensor all pixels of the LED Ring are turned on. Also a bar graph is plotted on the Microbit LED matrix. Button A clears the screen and shows the number of total pollinators.

## Step 3 @showdialog
Turn on the Climate Action Kit board.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Next, click the ``|Download|`` button to download the blank project to start-up the simulators.

## Step 6 @showhint	
Look below the @boardname@ simulator to see the Climate Action Board’s simulator of the connected components. Try touching the Touch Sensor on your project. The virtual simulators will react to it.
![touch](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-7-Touch.gif)

## Step 7
Click ``||Variables:Variables||``. Click on |Make a Variable| to create a new ``||Variables:Variable||``.  
Name it ``||Variables:bugVisits||``.

## Step 8
Inside ``||Variables:Variables||`` there is ``||Variables:bugVisits||``
and more blocks.

## Step 9
Click ``||Variables:Variables||`` drag and drop ``||Variables:set bugVisits to 0||`` block
inside ``||basic:on start||`` block.
```blocks
let bugVisits = 0
basic.forever(function (){
})
```

## Step 10
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||``
conditional block inside ``||basic:forever||`` loop.
```blocks
let bugVisits = 0
basic.forever(function (){
 if (true){
 }
})
```

## Step 11
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:touch pressed||`` block to replace ``||logic:true||`` condition of ``||logic:if true then||`` block.
```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
            }
})
```

## Step 12
Click ``||Variables:Variables||`` drag and drop
 ``||Variables:change bugVisits by 1||`` block inside
 ``||logic:if||`` ``||fwdSensors:touch pressed||`` ``||logic: then||`` block.
```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        }
})
```

## Step 13
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||`` block under ``||Variables:change bugVisits by 1||`` block.
```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        }
})
```

## Step 14
Click ``||basic:Basic||`` drag and drop ``||basic:show number||`` block under ``||fwdSensors:set all ledRing LEDs to||`` block.
```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        }
})
```

## Step 15
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||``
block under ``||basic:show number||``
block.
```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Step 16
Click ``||Variables:Variables||`` drag and drop ``||Variables:bugVisits||``
to replace the ``||0||`` in both ``||basic:show number||``.
Change the color of second ``||fwdSensors:LED Ring||`` block to ``||control:Black||``.
```blocks
let bugVisits = 1
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```
## Step 17
Click ``||LED:LED||`` drag and drop ``||LED: plot bar graph of 0 upto 0||`` block
under ``||fwdSensors:set all pixels colour||`` block
```blocks
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        led.plotBarGraph(0,0)
    }
})
```

## Step 18
Click ``||Variables:Variables||`` drag and drop ``||Variables:bugVisits||`` block
to replace ``||0||`` in ``||LED:plot bar grap of 0||`` block. Change ``||LED:upto 0||``
to ``||25||``
```blocks
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Step 19
Click ``||Input:Input||`` drag and drop ``||Input:on button A pressed||`` block
on the workspace.
```blocks
input.onButtonPressed(Button.A, function () {
})
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Step 20
Click ``||Basic:Basic||`` drag and drop ``||Basic:clear screen||`` block inside
``||Input:on button A pressed||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Step 21
Click ``||Basic:Basic||`` drag and drop ``||Basic:show number||`` block under
``||Basic:clear screen||`` block. Click ``||Variables:Variables||`` drag and drop
``||Variables:bugVisits||`` block to replace ``||0||`` in ``||Basic:show number||`` block.
```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(bugVisits)
})
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Step 22
Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||`` block under
``||Basic:show number||`` ``||Variables:bugVisits||`` block. Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||`` block under
``||Basic:clear screen||`` block under ``||Basic:pause (ms) 100||`` block. Change ``||100||``
of ``||Basic:pause (ms) 100||`` block to ``||Basic:5000||``.
```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(bugVisits)
    basic.pause(5000)
    basic.clearScreen()
})
let bugVisits = 0
bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
        led.plotBarGraph(
        bugVisits,
        25
        )
    }
})
```

## Step 23 @showhint
``|Download|`` and test your code. Click the bulb icon to see how the simulator shows the components working.
![touch-led](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-10-LED-bee.gif)

## Step 24 @showdialog
Congratulations on completing your Bees Project!

## Step 25 @showdialog
After your project is complete, go back to the lesson for more challenges and extensions.
