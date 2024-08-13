# Tracking Pollinators with a Bee Counter 
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
ledRing=github:climate-action-kits/pxt-fwd-edu
```
## Activity 1: Build Your Project @showdialog 

Let's build a bee counter! We are going to do this in three parts: 
1. **Build** your bee counter. 
2. **Add code** to bring it to life.
3. **Use** the bee counter to learn how it works.

![projectrender](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/gr4-bees-projectrender.webp) 

## Build Step 1 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bee-sbs1.png)

## Build Step 2 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs2.png)

## Build Step 3 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs3.png)

## Build Step 4 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs4.png)

## Build Step 5 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs5.png)

## Build Step 6 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs6.png)

## Build Step 7 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs7.png)

## Build Step 8 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs8.png)

## Build Step 9 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs9.png)

## Build Step 10 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs10.png)

## Build Step 11 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs11.png)

## Build Step 12 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs12.png)

## Build Step 13 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs13.png)

## Build Step 14 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs14.png)

## Build Step 15 @showdialog
![beesbs](https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/Gr4-bees-sbs15.png)

## Activity 2: Code Your Project @showdialog  
We need to connect our project to the computer to make it come to life with code! 

The code will be the instructions that tell our micro: bit what to do.

## Code Step 1 @showdialog
Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer. 
<img src="https://raw.githubusercontent.com/climate-action-kits/pxt-fwd-edu/main/tutorial-assets/pluganim.webp" width="400">


## Code Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_. Next, follow the steps to pair your micro:bit.
![pair gif](https://raw.githubusercontent.com/Jessica-forwardedu/pxt-fwd-edu/main/tutorial-assets/DownloadButtonGIF.webp)

## Code Step 3 
Next, click the ``|Download|`` button to download the code to your project.

## Activity 3: Use Your Project @showdialog 

We are ready to use our bee counter. Follow the instructions at the top of the screen. When you are ready for more information click *'Tell me more!'* 

```template
let bugVisits = 0
bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})

```

## Use Step 1 

Take a look at the bee counter project you just built and think about these questions.

What are all of its parts?


~hint Tell me more!
- This project has building blocks that make up the structure.
- It also has a touch sensor, a micro:bit, LEDs, a breakout board, and connectors.
hint~

## Use Step 2 
Looking at your completed project, what do you think it should it do?


~hint Tell me more!
- Your bee counter should keep track of how many times a bee visits a flower and let us know the total!
- By counting, we can find out if the bees like our flower!
- If not many bees are visiting, what could we do to make our flower more popular?
hint~

## Use Step 3 
How do you think each part works together to make all of that happen?

~hint Tell me more!
- The micro:bit acts like the brain of your project. It makes decisions and tells the other parts what to do.
- The sensors are like the organs. They sense what's happening and send this information to the micro:bit.
- The building blocks are the bones that keep everything in place.
hint~

## Use Step 4 

Try reading the code blocks below. What do you think will happen when you touch the sensor? Try touching it a few times in a row.

~hint Tell me more! 
- Each time you press the touch sensor, the number on the micro:bit goes up by 1.
- We made this happen with a **conditional statement** in our code.
  hint~

## Use Step 5
We use **conditional statements** to help us make decisions all the time in real life. For example, "If it is raining, then I will open my umbrella."

Can you identify the conditional statement in the code below?

~hint Tell me more!
  - Check the lightblub to see if you were right!
  hint~

```block
    if (fwdSensors.touch.fwdIsPressed()) {
        bugVisits += 1
    }
```

## Use Step 6

Click the ``|Download|`` button to redownload the code to your project. 

What happens to the number on the LEDs?

~hint Tell me more!
- The number on the micro:bit goes back to '0' each time we download the code.
- This is how we reset our bee counter.
  hint~

## Use Step 7 
Can you guess which part of our code is used to reset the bee counter? 

~hint Tell me more!
- The block ``||variables:set bugVisits to 0||`` resets the number when our program starts!
hint~

```blocks
let bugVisits = 0
bugVisits = 0 
basic.showNumber(bugVisits)
```


## Use Step 8 
Let's test out resetting the number! Press the touch sensor until it shows the number 10, then ``|Download|`` the code again to reset the count. 

## Congratulations! @showdialog 
You've completed the activity! Did anything surprise you about this project? 

## Reflection @showdialog 
List 2 new things you learned today. 

What is one thing you want to learn more about? 

## Finished! @showdialog 
In the next step, you can click the ``|Done|`` button to finish the tutorial.
