# Advanced Agriculture
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
soilMoisture=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Advanced Agriculture Coding Tutorial
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-advagri-200.png)

## Step 2 @showdialog
In this coding tutorial we will build a moisture level indicator using the LED Ring's pixels.

## Step 3 @showdialog
Turn on the Climate Action Kit board.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Click three dots besides ``|Download|`` button, and click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Next, click the ``|Download|`` button to download the blank project to start-up the simulators.

## Step 6 @showhint
Look below the @boardname@ simulator to see the Climate Action Board and the connected sensors. Try holding the Moisture Sensor or dipping it in a glass of water. See how the virtual simulators react.
![moisture](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-4-moisture.gif)

## Step 7
Click ``||logic: Logic||`` drag and drop ``||logic:If then Else||``
block inside ``||Basic:forever||`` block.
```blocks
basic.forever(function () {
    if (true) {
          }
    else {
        }
        )}
```
## Step 8
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:is soilMoisture1 moisture level over 5%||``
to replace ``||logic:true||`` condition of ``||logic:if then else||`` block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)) {
          }
    else {
        }
        )}
```
## Step 9
Click ``||basic:basic||`` drag and drop ``||basic:show icon||`` block inside ``||logic:if then||`` condition.
Select ``||basic: :)||`` icon.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)) {
          basic.showIcon(IconNames.Happy)}
    else {
        }
        )}
```
## Step 10
Click ``||basic:basic||`` drag and drop ``||basic:show icon||`` block inside ``||logic:else||`` condition.
Select ``||basic: :(||`` icon.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)) {
          basic.showIcon(IconNames.Happy)}
    else {
        basic.showIcon(IconNames.Sad)}
        )}
```
## Step 11
Click ``||fwdMotors:Motors||`` drag and drop ``||fwdMotors:run pump for 500||`` under
 ``||basic: :(||`` icon.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(100)
        }
})
```
## Step 12
Click ``||basic:basic||`` drag and drop ``||basic:pause (ms) 100||`` block under ``||fwdMotors:run pump for 500||`` block.
Change the ``||basic:100||`` to ``||basic:500||``
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
        }
})
```
## Step 13
Click ``||basic:basic||`` drag and drop ``||basic:clear screen||``
block under ``||basic:pause (ms) 500||`` block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
        } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
        }
})
```
## Step 14
Click ``||Logic:Logic||`` drag and drop ``||Logic:If true then||`` block under
``||Logic: If then else||`` block. Repeat this step ``||Logic:4||`` times. _Note: You should have 4 ``||Logic:If then||`` blocks._
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(true){
    }
    if(true){
    }
    if (true){
    }
    if (true){
    }
})
```
## Step 15
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:soilMoisture1 level is over||`` block
to replace ``||Logic:true||`` condition of ``||Logic:4 if true then||`` blocks.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    }
})
```
## Step 16
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||`` block
under ``||fwdSensors:soilMoisture1 level is over||`` block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    }
})
```
## Step 17
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set ledRing 0 to||`` block
under remaining ``||fwdSensors:3 soilMoisture1 level is over||`` blocks.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
})
```
## Step 18
Right click ``||fwdSensors:set ledRing 0||`` block and duplicate it. Each
``||Logic:If||`` ``||fwdSensors:soilMoisture1 is over||`` ``||Logic:then||`` block
should have ``||fwdSensors:2 set ledRing 0||`` blocks inside the ``||Logic:If condition||`` block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
    if(fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Over)){
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
})
```
## Step 19
Change the threshold values of the ``||fwdSensors:soilMoisture1 level over||`` block
- ``||fwdSensors:soilMositure1 level over 80||``
- ``||fwdSensors:soilMositure1 level over 60||``
- ``||fwdSensors:soilMositure1 level over 40||``
- ``||fwdSensors:soilMositure1 level over 20||``
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(80, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(60, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(40, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
})
```
## Step 20
Change the ``||fwdSensors:LED Ring pixel values||`` in pairs.
- Pair 1
- ``||fwdSensors:set ledRing 0 to 5||``
- ``||fwdSensors:set ledRing 0 to 4||``
- Pair 2
- ``||fwdSensors:set ledRing 0 to 3||``
- ``||fwdSensors:set ledRing 0 to 2||``
- Pair 3
- ``||fwdSensors:set ledRing 0 to 1||``
- ``||fwdSensors:set ledRing 0 to 0||``
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(80, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(60, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetPixelColour(5, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(4, 0xff0000)
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(40, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetPixelColour(3, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(2, 0xff0000)
    }
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(20, fwdSensors.ThresholdDirection.Over)) {
        fwdSensors.ledRing.fwdSetPixelColour(1, 0xff0000)
        fwdSensors.ledRing.fwdSetPixelColour(0, 0xff0000)
    }
})
```
## Step 21 @showhint
``|Download|`` and test your code. Click the bulb icon to see how
the simulator shows the components working.
![moisture-pump](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-11-Moisture-pump.gif)

## Step 22 @showdialog
Congratulations on completing your Advanced Agriculture Project!

## Step 23 @showdialog  
After your project is complete, go back to the lesson for more challenges and extensions.
