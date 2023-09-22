# Vertical Farming and UV Lights
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
![moisture](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-4-moisture.gif)

## Step 6
Click ``||logic: Logic||`` drag and drop ``||logic:If then Else||``
block inside ``||basic:forever||`` loop.
```blocks
basic.forever(function () {
    
    if (true) {
          } 
    else {
        }
        )}
```
## Step 7
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
## Step 8
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
## Step 9
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
## Step 10
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
## Step 11
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
## Step 12
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
## Step 13
Click ``||Variables:Variables||`` and create ``||Variables:5 Variables||``
- ``||Variables:timer_start||``
- ``||Variables:timer_stop||``
- ``||Variables:plant_B||``
- ``||Variables:plant_A||``
- ``||Variables:run_pump_count||`` 
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
Click ``||Variables:Variables||`` drag and drop ``||Variables:plant_A||``
``||Variables:plant_B||`` and ``||Variables:run_pump_count||`` inside
``||Basic:on start||`` block.
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
let plant_B = 0
let plant_A = 0
let run_pump_count = 0
```
## Step 15
Change ``||Variables:plant_A||`` value to ``||Variables:5000||`` and 
``||Variables:plant_B||`` value to ``||Variables:2000||``.
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
```
## Step 16
Click ``||Input:Input||`` drag and drop ``||Input:on button A pressed||`` block
on workspace.
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function()){
}
```
## Step 17
Right click ``||Input:on button A pressed||`` block and duplicate it.
Change ``||Input:A||`` to ``||Input:B||``. Right click on either ``||Input:on button A pressed||``
or ``||Input:on button B pressed||`` block and duplicate it. Change ``||Input:A or B||`` to
``||Input:A+B||``. _Note: The new block will be greyed out._
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function()){
}
input.onButtonPressed(Button.B, function()){
}
input.onButtonPressed(Button.AB, function()){
}
```
## Step 18
Click ``||Input:Input||`` drag and drop ``||Input:on logo pressed||`` block
on workspace. 
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function()){
}
input.onButtonPressed(Button.B, function()){
}
input.onButtonPressed(Button.AB, function()){
}
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 19
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||`` 
block inside:
- ``||input:on button A pressed||``
- ``||input:on button B pressed||``
- ``||input:on button A+B pressed||``
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 20
Click ``||Basic:Basic||`` drag and drop ``||Basic:pause (ms) 100||`` 
block under:
- ``||fwdSensors:set all ledRing LEDs to||`` inside ``||input:on button A pressed||`` block
- ``||fwdSensors:set all ledRing LEDs to||`` inside ``||input:on button B pressed||`` block
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
basic.pause(100)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
basic.pause(100)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 21
Click ``||fwdSensors:Sensors||`` drag and drop ``||fwdSensors:set all ledRing LEDs to||`` 
block under:
- ``||basic:pause (ms) 100||`` inside ``||input:on button A pressed||``
- ``||basic:pause (ms) 100||`` inside ``||input:on button B pressed||``
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
basic.pause(100)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
basic.pause(100)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 22
Change ``||fwdSensors:set all ledRing LEDs to||`` under ``||input:on button A pressed||``
block to ``||purple||``. Change ``||fwdSensors:set all ledRing LEDs to||`` under ``||input:on button B pressed||``
block to ``||white||`` . Change ``||fwdSensors:set all ledRing LEDs to||`` under ``||input:on button A+B pressed||``
block to ``||black||``.
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(100)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(100)
fwdSensors.ledRing.fwdSetAllPixelsColour(0xff0000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 23
Change both LED colors of ``||Input:on button A pressed||`` and ``||input:on button B pressed||``
``||fwdSensors:set all ledRing LEDs to||`` block under ``||Basic:pause (100) ms||`` 
block to ``||black||``.
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(100)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(100)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 24
Click ``||Variables:Variables||`` drag and drop ``||Variables:plant_A||`` block to replace
``||basic:100||`` in ``||basic:pause (ms) 100||`` block inside ``||Input:on button A pressed||`` block.
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(100)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 25
Click ``||Variables:Variables||`` drag and drop ``||Variables:plant_B||`` block to replace
``||basic:100||`` in ``||basic:pause (ms) 100||`` block under ``||input:on button B pressed||`` block.
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
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 26
Click ``||Variables:Variables||`` to make two new ``||Variables:Variables||``.
- ``||Variables:timer start||``
- ``||Variables:timer stop||``

## Step 27
Click ``||Variables:Variables||`` drag and drop ``||Variables:set timer stop to 0||`` 
block under ``||Logic:if||`` ``||fwdSensors:soilMoisture1 level is over 50 %||`` ``||Logic:then||``
block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        timer_stop = 0
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        basic.pause(500)
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```

## Step 28
Click ``||Variables:Variables||`` drag and drop ``||Variables:set timer start to 0||`` 
block under ``||fwdMotors:run pump for 500||`` block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        timer_stop = 0
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        timer_start = 0
        basic.pause(500)
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 29
Click ``||Input:Input||`` then ``||Input:more||`` drag and drop ``||input:running time (ms)||``
block to replace ``||0||`` in both:
- ``||Variables:timer start||`` block
- ``||Variables:timer stop||`` block
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```

## Step 30
Click ``||Variables:Variables||`` drag and drop ``||Variables:change run_pump_count by 1||``
block inside ``||Logic:else||`` condition under ``||Basic:pause (ms) 500||`` block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
}
```
## Step 31
Click ``||Basic:Basic||`` drag and drop ``||Basic:show number||`` block inside
``||Input:on logo pressed||`` block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
basic.shownumber()
}
```
## Step 32
Click ``||Math:Math||`` drag and drop ``||Math:Division||`` block to replace
``||Basic:0||`` in ``||basic:show number||`` block under ``||input:on logo pressed||`` block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
basic.shownumber(0/0)
}
```
## Step 33
Click ``||Math:Math||`` drag and drop ``||Math:Substraction||`` block to replace
``||Math:0||`` on the left side of ``||Math:Division||`` block under ``||input:on logo pressed||`` block.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
basic.shownumber(0-0/0)
}
```

## Step 34
Click ``||Variables:Variables||`` drag and drop ``||Variables:timer_start||`` block
and ``||Variables:timer_stop||`` block to replace
``||Math:0 - 0||`` on the left side of ``||Math:Division||`` block under
 ``||input:on logo pressed||`` block. Change the ``||Math:Divisor||`` value to 
 ``||Math:60000||``.
```blocks
basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(50, fwdSensors.ThresholdDirection.Over)) {
        timer_stop = input.runningTime()
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        fwdMotors.pump.fwdTimedRun(500)
        timer_start = input.runningTime()
        basic.pause(500)
        run_pump_count += 1
        basic.clearScreen()
    }
})
let plant_B = 2000
let plant_A = 5000
let run_pump_count = 0
input.onButtonPressed(Button.A, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x7f00ff)
basic.pause(plant_A)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.B, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0xffffff)
basic.pause(plant_B)
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onButtonPressed(Button.AB, function(){
fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function()){
basic.shownumber(timer_stop-timer_start/60000)
}
```
## Step 35 @showhint
``|Download|`` and test your code. The simulator shows how it should work.
Congratulations on completing your Vertical Farming and UV Lights! - Go back to the lesson for more activities and extensions.
![moisture-pump](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-11-Moisture-pump.gif)
