# Harnessing the Sun's Energy with Solar Panels
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
solar=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Harnessing the Sun's Energy with Solar Panels Coding Tutorial
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-solar-200.png)

## Step 2 @showdialog
In this coding tutorial we will move the solar panel using the positional servo motor from east to west in small increments to search for sunlight. When sufficient sunlight is detected by the solar sensor, have the solar panel stop in that position for as long as optimal sunlight is present.

## Step 3 @showdialog
Turn on the Climate Action Kit board.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_.
Next, follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Next, click the ``|Download|`` button to download the blank project to start-up the simulators.

## Step 6 @showhint
Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try interacting with the Solar Sensor on your project. Cover and uncover the sensor to see the light percentage change on your virtual simulator.
![solar](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-8-Solar.gif)

## Step 7
Click ``||Variables:Variables||``. Click on |Make a Variable| to
create a new ``||Variables:Variable||``.
Name it ``||Variables:position||``.

## Step 8
Inside ``||Variables:Variables||`` there is ``||Variables:position||``
and more blocks.

## Step 9
Click ``||Variables:Variables||``. Drag and drop
``||Variables:set position to 0||`` inside ``||basic:on start||`` block.
Change ``||Variables:0||`` to ``||Variables:-90||``.
```blocks
let position = -90
basic.forever(function(){
})
```
## Step 10
Click ``||logic:Logic||`` drag and drop ``||logic:If true then else||``
block inside the ``||basic:forever||`` loop.
```blocks
let position = -90
basic.forever(function(){
    if(true){
    }
    else{
    }
})
```
## Step 11
Click ``||logic:Logic||`` drag and drop ``||logic:comparison block||``
``||logic: 0 < 0||`` to
replace ``||logic:true||`` condition of the ``||logic: if then else||`` loop.
Change ``||Logic:<||`` to ``||Logic:>||``.
```blocks
let position = -90
basic.forever(function(){
    if(0>0){
    }
    else{
    }
})
```
## Step 12
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:solar1 light level %||``
block to replace ``||0||`` on left side of the ``||logic:comparison||`` block.
```blocks
let position = -90
basic.forever(function(){
    if(fwdSensors.solar1.fwdLightLevel() > 0){
    }
    else{
    }
})
```
## Step 13
Click right side of the ``||logic:comparison||`` block.
Change ``||0||`` to ``||75||``.
```blocks
let position = -90
basic.forever(function(){
    if(fwdSensors.solar1.fwdLightLevel() > 75){
    }
    else{
    }
})
```
## Step 14
Click ``||basic:Basic||`` drag and drop ``||basic:show icon||`` block
inside ``||logic:if true then||`` condition.
Select ``||basic:target||`` icon.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
    basic.showIcon(IconNames.Target)
    }
    else {}
})
```
## Step 15
Click ``||fwdMotors:Motors||`` drag and drop
``||fwdMotors:set leftServo off||`` block under
``||basic:show icon target||`` block.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
    basic.showIcon(IconNames.Target)
    fwdMotors.leftServo.fwdSetEnabled(false)
    }
    else {}
})
```
## Step 16
Click ``||basic:Basic||`` drag and drop ``||basic:show icon||`` block
inside ``||logic:else||`` condition.
Select ``||basic: small diamond icon||``.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        }
})
```
## Step 17
Click ``||Variables:Variables||`` drag and drop
``||Variables:change position by 1||`` block
under ``||basic:show icon small diamond||`` block.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 1
        }
})
```
## Step 18
Change the value of ``||variables:change position by 1||`` to ``||10||``.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        }
})
```
## Step 19
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||``
block under the ``||Variables:change position by 10||`` block.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (true) {
            }
        }
})
```
## Step 20
Click ``||logic:Logic||`` drag and drop ``||logic:comparison||`` ``||logic: 0 < 0||``
block to replace ``||logic:true||`` condition of ``||logic: if true then||``
block. Change ``||logic:< to >||``.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (0 > 0) {
                }
       
    }
})
```
## Step 21
Click ``||Variables:Variables||`` drag and drop
``||Variables:position||`` block on left side of the
``||logic:comparison||`` block.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 0) {
        }
       
    }
})
```
## Step 22
Change ``||0||`` to ``||90||`` on right side of the ``||logic:comparison||``
block.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
        }
       
    }
})
```
## Step 23
Click ``||Variables:Variables||`` drag and drop ``||Variables:set position to 0||``
inside ``||logic:if||`` ``||variables:position||`` ``||logic: > 90 then||`` block. Change 0 in ``||Variables:set position to 0||`` to -90. 
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
        position = -90
        }
       
    }
})
```
## Step 24
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set leftServo to 0'||``
block under ``||logic:if then||`` condition.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.leftServo.fwdSetAngle(0)
    }
})
```
## Step 25
Click ``||Variables:Variables||`` drag and drop ``||Variables:position||`` block
to replace ``||0||`` in ``||fwdMotors:set leftServo to 0'||`` block.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.leftServo.fwdSetAngle(position)
        }
})
```
## Step 26
Click ``||basic:Basic||`` drag and drop ``||basic:pause||`` block under
``||fwdMotors:set leftServo to||`` ``||Variables:position||`` block. Change
``||basic:(ms) 100||`` to ``||basic:(ms) 200||``.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.leftServo.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.leftServo.fwdSetAngle(position)
        basic.pause(200)
    }
})
```
## Step 27 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![solar-servo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-14-solar-array.gif)

## Step 28 @showdialog
Congratulations on completing your Harnessing the Sun's Energy with Solar Panels Project!

## Step 29 @showdialog
After your project is complete, go back to the lesson for more challenges and extensions.
