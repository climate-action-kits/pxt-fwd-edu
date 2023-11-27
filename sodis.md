# SODIS

## Step 1 @showdialog
Welcome to Solar Disinfection Coding Tutorial
![built-project-image](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/sodis-prototype.png)

## Step 2 @showdialog
Plug your USB cable into the micro:bit. 
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/connect-microbit.gif)

## Step 3
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
## Step 4
Click ``||Logic:Logic||`` drag and drop ``||Logic:Comparison <||`` block
to replace ``||Logic:true||`` condition of ``||Logic:If true then||`` block. Change
``||Logic:less than <||`` to ``||Logic:greater than >||``.
```blocks
basic.forever(function () {
    
    if (0>0) {
          } 
    else {
        }
        )}
```
## Step 5
Click ``||Input:Input||`` drag and drop ``||Input:light level||`` block 
to replace ``||Logic:0||`` on the left side of ``||Logic:Comparison||`` block.
Change ``||Logic:0||`` on the right side to ``||Logic:128||``.
```blocks
basic.forever(function () {
    
    if (input.lightLevel()>128) {
          } 
    else {
        }
        )}
```
## Step 6
Click ``||Variables:Variables||`` create two ``||Variables:Variables||``:
- ``||Variables:totalLightExposure||``
- ``||Variables:exposure_start_time||``


## Step 7
Click ``||Variables:Variables||`` drag and drop 
``||Variables:change totalLightExposure by 1||`` block inside ``||Logic:If||``
``||Input:light level||`` ``||Logic:> 128 then||`` block.
```blocks
basic.forever(function () {
    
    if (input.lightLevel()>128) {
    totalLightExposure += 1
          } 
    else {
        }
        )}
```
## Step 8
Click ``||Math:Math||`` drag and drop 
``||Math:Substraction||`` block to replace ``||Variables:1||`` in 
``||Variables:change totalLightExposure by||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (0-0)
          } 
    else {
        }
        )}
```
## Step 9
Click ``||Input:Input||`` then ``||Input:more||`` drag and drop 
``||Input:running time (ms)||`` block to replace left ``||Math:0||`` in 
``||Math:Substraction||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()-0)
          } 
    else {
        }
        )}
```
## Step 10
Click ``||Variables:Variables||`` drag and drop 
``||Variables:exposure start time||`` block to replace right ``||Math:0||`` in 
``||Math:Substraction||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
          } 
    else {
        }
        )}
```
## Step 11
Click ``||Variables:Variables||`` drag and drop 
``||Variables:set exposure_start_time||`` block under 
``||Variables:change totalLightExposure by||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = 0
          } 
    else {
        }
        )}
```
## Step 12
Click ``||Input:Input||`` then ``||Input:more||`` drag and drop 
``||Input:running time (ms)||`` block to replace ``||0||`` in 
``||Variables:set exposure_start_time to||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
          } 
    else {
        }
        )}
```
## Step 13
Click ``||logic:Logic||`` drag and drop ``||logic:If true then||``
block under ``||Variables:set exposure_start_time to||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(true){
    }
          } 
    else {
        }
        )}
```
## Step 14
Click ``||Logic:Logic||`` drag and drop ``||Logic:Comparison||`` block
to replace ``||Logic:true||`` condition of ``||Logic:If true then||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(0>0){
    }
          } 
    else {
        }
        )}
```
## Step 15
Click ``||Variables:Variables||`` drag and drop ``||Variables:totalLightExposure||``
block to replace left ``||Logic:0||`` of ``||Logic:Comparison||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure>0){
    }
          } 
    else {
        }
        )}
```
## Step 16
Click ``||Math:Math||`` drag and drop ``||Math:Mutliplication||``
block to replace right ``||Logic:0||`` of ``||Logic:Comparison||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > (0 * 0)){
    }
          } 
    else {
        }
        )}
```

## Step 17
Click ``||Math:Math||`` drag and drop ``||Math:Mutliplication||``
block to replace left ``||Math:0||`` of ``||Math:Mutliplication||`` block.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((0 * 0) * 0)){
    }
          } 
    else {
        }
        )}
```
## Step 18
Change the values in ``||Math:Math||`` block to ``||Math:6 x 3600 x 1000||``.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((6 * 3600) * 1000)){
    }
          } 
    else {
        }
        )}
```
## Step 19
Click ``||Basic:Basic||`` drag and drop ``||Basic:show icon||`` block inside
``||Logic:if||`` ``||Variables:totalLightExposure||`` ``||Logic:then||`` block.
Change ``||basic:Heart||`` to ``||basic::)||`` icon.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((6 * 3600) * 1000)){
    basic.showIcon(IconNames.Happy)
    }
          } 
    else {
        }
        )}
```
## Step 20
Click ``||Basic:Basic||`` drag and drop ``||Basic:show string||`` block under
``||Basic:show icon||`` block. Change string to ``||basic:Safe||``.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((6 * 3600) * 1000)){
    basic.showIcon(IconNames.Happy)
    basic.showString("Safe")
    }
          } 
    else {
        }
        )}
```

## Step 21
Click ``||Basic:Basic||`` drag and drop ``||Basic:show string||`` block inside
``||Logic:else||`` condition. Change string to ``||basic:Not Safe||``.
```blocks
basic.forever(function () {
    if (input.lightLevel()>128) {
    totalLightExposure += (input.runningTime()- exposure_start_time)
    exposure_start_time = input.runningTime()
    if(totalLightExposure > ((6 * 3600) * 1000)){
    basic.showIcon(IconNames.Happy)
    basic.showString("Safe")
    }
          } 
    else {
    basic.showString("Not Safe")
        }
        )}
```
## Step 22
``|Download|`` and test your code. 
Congratulations on completing your SODIS project!
