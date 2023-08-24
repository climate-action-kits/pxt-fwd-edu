# Automatic Irrigation System
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
soilMoisture=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Welcome to Automatic Irrigation System Coding Tutorial
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-wateringplant-400.png)

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
![moisture](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-4-moisture.gif)

## Step 6
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to 10||`` block inside ``||basic:forever||`` loop.
```blocks
basic.forever(function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(10)
    )}
```
## Step 7
Click ``||logic: Logic||`` drag and drop ``||logic:If then Else||``
block under ``||fwdSensors:set all ledRing LEDs to 10||`` block.
```blocks
basic.forever(function () {
    fwdSensors.ledRing.fwdSetAllPixelsColour(10)
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
    fwdSensors.ledRing.fwdSetAllPixelsColour(10)
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
    fwdSensors.ledRing.fwdSetAllPixelsColour(10)
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
    fwdSensors.ledRing.fwdSetAllPixelsColour(10)
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
    fwdSensors.ledRing.fwdSetAllPixelsColour(10)
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
    fwdSensors.ledRing.fwdSetAllPixelsColour(10)
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
    fwdSensors.ledRing.fwdSetAllPixelsColour(10)
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
## Step 14 @showhint
``|Download|`` and test your code. The simulator shows how it should work.
Congratulations on completing your Automatic Irrigation System! - Go back to the lesson for more activities and extensions.
![moisture-pump](https://mbakhtar.github.io/mvp-6-tutorials-update/updated-assets/simulator-11-Moisture-pump.gif)
