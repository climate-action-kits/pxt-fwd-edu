# Plants & Pollinators

```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Plants & Pollinators Coding Tutorial.
![built project](tutorial-assets/project-beetouch-400.png)

## Step 2 @showdialog
Plug your USB cable into the micro:bit. 
![breakout board](tutorial-assets/connect-microbit.gif)

## Step 3 @showdialog
Insert it into the Climate Action Kit board. 
![breakout board](tutorial-assets/breakout-resized.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button and follow the steps to pair your micro:bit.
![pair gif](tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 
Click ``||Variables:Variables||``. Click on |Make a Variable| to create a new ``||Variables:Variable||``.  
Name it ``||Variables:bugVisits||``.

## Step 6
Inside ``||Variables:Variables||`` there is ``||Variables:bugVisits||``
and more blocks.

## Step 7
Click ``||Variables:Variables||`` drag and drop ``||Variables:set bugVisits to 0||`` block
inside ``||basic:on start||`` block.
```blocks
let bugVisits = 0
basic.forever(function (){})
```
## Step 8
Click ``||basic:Basic||`` drag and drop ``||basic:showNumber||`` block
under ``||Variables:set bugVisits to 0||`` block.
```blocks
let bugVisits = 0
basic.showNumber(0)
basic.forever(function (){})
```

## Step 9
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
## Step 10
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:touch pressed||`` block to replace ``||logic:true||`` condition of ``||logic:if true then||`` block.
```blocks
let bugVisits = 0
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
            }
})
```
## Step 11
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
## Step 12
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to 10||`` block under ``||Variables:change bugVisits by 1||`` block.
```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(10)
        }
})
```
## Step 13
Click ``||basic:Basic||`` drag and drop ``||basic:show number||`` block under ``||fwdSensors:set all ledRing LEDs to 10||`` block.
```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(10)
        basic.showNumber(0)
    }
})
```
## Step 14
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to 10||``
block under ``||basic:show number||``
block.
```blocks
let bugVisits = 1
basic.showNumber(0)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(10)
        basic.showNumber(0)
        fwdSensors.ledRing.fwdSetAllPixelsColour(10)
    }
})
```
## Step 15
Click ``||Variables:Variables||`` drag and drop ``||Variables:bugVisits||``
to replace the ``||0||`` in both ``||basic:show number||``.
Change value of second ``||fwdSensors:LED Ring||`` block to ``||0||``. 
```blocks
let bugVisits = 1
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        fwdSensors.ledRing.fwdSetAllPixelsColour(10)
        basic.showNumber(bugVisits )
        fwdSensors.ledRing.fwdSetAllPixelsColour(0)
    }
})
```
## Step 16
Click ``|Download|`` and test your code. 
Congratulations on completing your Plants and Pollinator Project! - Go back to the lesson for more activities and extensions.
