# Solar Panel
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
solar=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to the Solar Panel Coding Tutorial
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-solar-400.png)

## Step 2 @showdialog
Plug your USB cable into the micro:bit. 
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/connect-microbit.gif)

## Step 3 @showdialog
Insert it into the Climate Action Kit board. 
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-resized.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button and follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try to interact with your sensor and the simulator will react to it.
![solar](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-8-Solar.gif)

## Step 6
Click ``||Variables:Variables||``. Click on |Make a Variable| to
create a new ``||Variables:Variable||``.
Name it ``||Variables:position||``.

## Step 7
Inside ``||Variables:Variables||`` there is ``||Variables:position||``
and more blocks.

## Step 8 
Click ``||Variables:Variables||``. Drag and drop
``||Variables:set position to 0||`` inside ``||basic:on start||`` block. 
Change ``||Variables:0||`` to ``||Variables:-90||``.
```blocks
let position = -90
basic.forever(function(){
})
```
## Step 9 
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
## Step 10 
Click ``||logic:Logic||`` drag and drop ``||logic:comparison block||`` ``||logic: greater than >||`` to
replace ``||logic:true||`` condition of the ``||logic: if then else||`` loop.
```blocks
let position = -90
basic.forever(function(){
    if(0>0){
    }
    else{
    }
})
```
## Step 11 
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
## Step 12
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
## Step 13 
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
## Step 14
Click ``||fwdMotors:Motors||`` drag and drop 
``||fwdMotors:set servo1 off||`` block under 
``||basic:show icon target||`` block. 
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
    basic.showIcon(IconNames.Target)
    fwdMotors.servo1.fwdSetEnabled(false)
    } 
    else {}
})
```
## Step 15 
Click ``||basic:Basic||`` drag and drop ``||basic:show icon||`` block
inside ``||logic:else||`` condition.
Select ``||basic: small diamond icon||``.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        }
})
```
## Step 16
Click ``||Variables:Variables||`` drag and drop 
``||Variables:change position by 1||`` block 
under ``||basic:show icon small diamond||`` block.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 1
        }
})
```
## Step 17
Change the value of ``||variables:change position by 1||`` to ``||10||``.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        }
})
```
## Step 18
Click ``||logic:Logic||`` drag and drop ``||logic:if true then||``
block under the ``||Variables:change position by 10||`` block. 
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (true) {
            }
        }
})
```
## Step 19
Click ``||logic:Logic||`` drag and drop ``||logic:comparison||`` ``||logic: less than <||``
block to replace ``||logic:true||`` condition of ``||logic: if true then||``
block. Change ``||logic: less than < to greater than >||``.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (0 > 0) {
                }
        
    }
})
```
## Step 20
Click ``||Variables:Variables||`` drag and drop 
``||Variables:position||`` block on left side of the 
``||logic:comparison||`` block. 
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 0) {
        }
        
    }
})
```
## Step 21
Change ``||0||`` to ``||90||`` on right side of the ``||logic:comparison||``
block. 
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
        }
        
    }
})
```
## Step 22
Click ``||Variables:Variables||`` drag and drop ``||Variables:set position to 0||`` 
inside ``||logic:if||`` ``||variables:position||`` ``||logic: > 90 then||`` block.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
        position = 0
        }
        
    }
})
```

## Step 23
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:set servo 0 '||``
block under ``||logic:if then||`` condition.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.servo1.fwdSetAngle(0)
    }
})
```
## Step 24
Click ``||Variables:Variables||`` drag and drop ``||Variables:position||`` block 
to replace ``||0||`` in ``||fwdMotors:set servo 1 to 0 '||`` block.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.servo1.fwdSetAngle(position)
        }
})
```
## Step 25
Click ``||basic:Basic||`` drag and drop ``||basic:pause||`` block under
``||fwdMotors:set servo1 to||`` ``||Variables:position||`` block. Change
``||basic:(ms) 100||`` to ``||basic:(ms) 20||``.
```blocks
let position = -90
basic.forever(function () {
    if (fwdSensors.solar1.fwdLightLevel() > 75) {
        basic.showIcon(IconNames.Target)
        fwdMotors.servo1.fwdSetEnabled(false)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        position += 10
        if (position > 90) {
            position = -90
        }
        fwdMotors.servo1.fwdSetAngle(position)
        basic.pause(20)
    }
})
```
## Step 26 @showhint
``|Download|``and test your code. The simulator shows how it should work.
Congratulations on completing your Solar Panel Project! - Go back to the lesson for more activities and extensions.
![solar-servo](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-14-solar-array.gif)
