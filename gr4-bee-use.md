## Tracking Pollinators with a Bee Counter 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```
## Activity 1: Build your Project @showdialog 

Let's build a Bee Counter! 
We are going to do this in three parts: 
1. Build your Bee Counter 
2. Add code to make it work
3. Play with the Bee Counter to learn how it works

## Build Step 1 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bee-sbs1.png?raw=true) 

## Build Step 2 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs2.png?raw=true)

## Build Step 3  @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs3.png?raw=true) 

## Build Step 4 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs4.png?raw=true) 

## Build Step 5 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs5.png?raw=true) 

## Build Step 6 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs6.png?raw=true)

## Build Step 7 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs7.png?raw=true)

## Build Step 8 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs8.png?raw=true)

## Build Step 9 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs9.png?raw=true)

## Build Step 10 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs10.png?raw=true)

## Build Step 11 @showdialog  
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs11.png?raw=true) 

## Build Step 12  @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs12.png?raw=true)

## Build Step 13 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs13.png?raw=true) 

## Build Step 14 @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs14.png?raw=true) 

## Build Step 15  @showdialog 
![beessbs](https://github.com/Jessica-forwardedu/pxt-fwd-edu/blob/Jessica-forwardedu-patch-1/tutorial-assets/Gr4-bees-sbs15.png?raw=true)

## Activity 2: Code your Project @showdialog  
We need to connect our project to the computer to make it come to life with code! The code will be the instructions that tell our micro: bit what to do.

## Code Step 1 @showdialog 
Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 

![pluginwp](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/Jessica-forwardedu-patch-1/tutorial-assets/pluganim.webp)

## Code Step 2 @showdialog

Click the three dots beside ``|Download|`` button, and click on Connect Device. Next, follow the steps to pair your micro:bit. 
![pairing](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/Jessica-forwardedu-patch-1/tutorial-assets/pairmicrobitGIF.webp) 

## Code Step 3 
Next ``|Download|`` button to download the code to your Project and to see the smart component simulators. 

## Activity 3: Use your Project @showdialog 

We are ready to use our Bee Counter. Follow the instructions at the top of the screen. When you are ready for more information click 'Tell me more!' 

```template
let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})
```

## Use Step 1 

Take a look at your completed Bee Counter and think about these questions.

What are all of its parts?


~hint Tell me more!
- This project has building blocks that make up the structure
- It also has a touch sensor, a micro:bit, LEDs, a breakout board, and connectors.
hint~

## Use Step 2 
Looking at your completed project what should the project do?


~hint Tell me more!
- A Bee Counter should be able to count each time a Bee visits a flower and tell us the number! This was as Protectors of Bees we know if they like our flower or not!
- If the number is low how can we help more bees visit? 
hint~

## Use Step 3 
How do you think each part works together to make that happen?

~hint Tell me more!
- The building blocks are for the structure! The blocks are holding up the touch sensor, the LED, the breakout board and the micro:bit.
- The micro:bit is like the brain of this project, the sensors are the organs, and the building blocks are the bones of our project.
hint~

## Use Step 4 

Try reading the code blocks below. What do you think will happen when you touch the sensors? Try touching it a few times in a row.

~hint Tell me more! 
- Each time you touch the touch sensor, the number on the micro:bit goes up by 1.
- We made this happen with a conditional statement in our code.
  hint~

## Use Step 5
We use conditional statements to help us make decisions all the time in real life/ For example, "If it is raining, then I will open my umbrella."
Can you identify the conditional statement?

~hint Tell me more!
  - The conditional statement in this code is: ||variables:set bugVisits to 0||
  hint~

```blocks
let bugVisits = 0
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
    }
})
```

## Use Step 6

Click the ``|download|`` button to redownload the code to your project. What happens to the number of the LEDs?

```blocks
let bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})
```

## Congratulations! @showdialog 
You've completed the activity! Did anything surprise you about this project? 

## Reflection @ Showdialog 
List 2 new things you learned today. What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|`` button to finish the tutorial.
