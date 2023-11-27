# Protecting Pollinators with a Bee Counter
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Protecting Pollinators with a Bee Counter Coding Tutorial.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-beetouch-200.png)

## Step 2 @showdialog
In this coding tutorial we will count the number of pollinators that visit your monitoring station. Whenever a pollinator lands on the touch sensor the pixels of the LED Ring are turned on, and we increase the visitor count on the micro:bit LEDs by one.

## Step 3 @showdialog
Turn on the Climate Action Kit board.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Next, click the ``|Download|`` button to download the blank project to start-up the simulators.

## Step 6 @showhint
Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try touching the Touch Sensor on your project. The virtual simulators will react to it.
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
basic.forever(function (){})
```

## Step 10
Click ``||basic:Basic||`` drag and drop ``||basic:show number 0||`` block
under ``||Variables:set bugVisits to 0||`` block.
```blocks
let bugVisits = 0
basic.showNumber(0)
basic.forever(function (){})
```

## Step 11
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||``
conditional block inside ``||basic:forever||`` loop.
```blocks
let bugVisits = 0
basic.showNumber(0)
basic.forever(function (){
 if (true){
 }
})
```

## Step 12
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:touch pressed||`` block to replace ``||logic:true||`` condition of ``||logic:if true then||`` block.
```blocks
let bugVisits = 0
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
            }
})
```

## Step 13
Click ``||Variables:Variables||`` drag and drop
 ``||Variables:change bugVisits by 1||`` block inside
 ``||logic:if||`` ``||fwdSensors:touch pressed||`` ``||logic: then||`` block.
```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        }
})
```

## Step 14
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||`` block under ``||Variables:change bugVisits by 1||`` block.
```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        }
})
```

## Step 15
Click ``||basic:Basic||`` drag and drop ``||basic:show number||`` block under ``||fwdSensors:set all ledRing LEDs to||`` block.
```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.showNumber(0)
    }
})
```

## Step 16
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||``
block under ``||basic:show number 0||``
block.
```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.showNumber(0)
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    }
})
```

## Step 17
Click ``||Variables:Variables||`` drag and drop ``||Variables:bugVisits||``
to replace the ``||0||`` in both ``||basic:show number 0||``.
Change color of second ``||fwdSensors:LED Ring||`` block to ``||control:black||``.
```blocks
let bugVisits = 1
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
        basic.showNumber(bugVisits )
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
    }
})
```

## Step 18 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![touch-led](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-10-LED-bee.gif)

## Step 19 @showdialog
Congratulations on completing your Protecting Pollinators with a Bee Counter Project!

## Step 20 @showdialog
After your project is complete, go back to the lesson for more challenges and extensions.
