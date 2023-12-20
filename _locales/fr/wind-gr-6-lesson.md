# Comment les turbines éoliennes capturent  l’énergie cinétique
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
=github:climate-action-kits/pxt-fwd-edu
```
## Step 1 @showdialog
Bienvenue dans le tutoriel de codage pour Comment les turbines éoliennes capturent  l’énergie cinétique.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
Dans ce tutoriel, nous allons calculer le temps des révolutions, puis nous allons l’utiliser pour résoudre l’équation permettant de trouver le (TPM) de la turbine éolienne.

## Step 3 @showdialog
Allume la plaque de la trousse d’action climatique.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Clique sur les trois points à côté du bouton ``|Download|`` et puis, clique sur _Connecter l’appareil._ Ensuite, suis les étapes pour coupler ton micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Ensuite, clique sur le bouton ``|Download|`` pour télécharger le projet vide afin de  démarrer les simulateurs.

## Step 6 @showhint
Regarde sous le simulateur @boardname@ pour voir la carte de la trousse d’action climatique et les capteurs connectés.  Essaie de tourner le cadran de ton projet, le simulateur virtuel y réagira.![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 7
Clique sur ``||fwdSensors:Capteurs||``. Ensuite, fait glisser et dépose le bloc
``||fwdSensors:en dial1 tourné par difference||`` dans l’espace de travail.
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
```
## Step 8
Clique droit sur le bloc ``||fwdSensors:en dial1 tourné par difference||`` et duplique-le. _Remarque : Le nouveau bloc sera gris._
![greyed out example](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-greyed-out-demo.png)

## Step 9
Modifie la flèche de direction du bloc grisé ``||fwdSensors:en dial1 tourné par difference||``. _Remarque : le bloc gris deviendra vert._
![dial direction](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-direction-switch.gif)
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```
## Step 10
Clique sur ``||fwdSensors:Capteurs||``. Ensuite, fait glisser et dépose le bloc
``||fwdSensors:en touch down||`` dans l’espace de travail.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```
## Step 11
Clique sur ``||fwdMotors:Moteurs||``. Ensuite, fait glisser et dépose le bloc
``||fwdMotors:mettre leftServo 50 %||`` à l’intérieur du bloc
``||fwdSensors:en dial1 tourné par difference||``. Après, change ``||fwdMotors:leftServo||``
au ``||fwdMotors:middleServo||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```
## Step 12
Fais clic droit sur le bloc ``||fwdMotors:mettre middleServo 50 %||`` et duplique-le. Ensuite, fais-le glisser et dépose-le à l’intérieur du bloc deuxième  bloc ``||fwdSensors:en dial1 tourné par difference||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```
## Step 13
Clique sur ``||fwdSensors:Capteurs||``. Ensuite, fais glisser le bloc avec une forme ovale
``||fwdSensors:dial1 position absolue||`` près du bloc ``||fwdMotors:mettre middleServo 50 %||``
 et remplace le ``||fwdMotors:50 %||`` du bloc ``||fwdMotors:mettre middleServo 50 %||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
```
## Step 14
Répéte l’étape antérieure. Clique sur ``||fwdSensors:Capteurs||``.
. Ensuite, fais glisser le bloc avec une forme ovale ``||fwdSensors:dial1 position absolue||``
 près de l’autre bloc
``||fwdMotors:mettre middleServo 50 %||`` et remplace le ``||fwdMotors:50 %||`` 
du bloc ``||fwdMotors:mettre middleServo 50 %||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## Step 15
Clique sur ``||fwdMotors:Moteurs||``. Ensuite, fait glisser et dépose le bloc ``||fwdMotors:mettre leftServo 50 %||`` à l’intérieur du bloc 
``||fwdSensors:en touch down||`` block. Après, change ``||fwdMotors:leftServo||`` au ``||fwdMotors:middleServo||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## Step 16
Change la vitesse du bloc ``||fwdMotors:mettre middleServo 50 %||`` au ``||0||`` à l’intérieur du bloc ``||fwdSensors:en touch down||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```

## Step 17
Clique sur on ``||Variables:Variables||`` et crée ``||Variables:2||`` ``||Variables:Variables||``.
- ``||Variables:start_time||``
- ``||Variables:stop_time||``
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## Step 18
Clique sur ``||Variables:Variables||``. Ensuite, fais glisser et dépose le bloc ``||Variables:définir start_time à 0||``
à l’intérieur du bloc ``||Basic:au démarrage||``. Répète cela pour le bloc ``||Variables:définir stop_time à 0||``.
```blocks
let stop_time = 0
let start_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
```
## Step 19
Clique sur ``||Input:Entrée||``. Ensuite, fais glisser et dépose le bloc 
``||Input:lorsque le bouton A est pressé||`` dans l’espace de travail.
```blocks
let stop_time = 0
let start_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
})
```
## Step 20
Clique sur ``||Input:Entrée||`` . Ensuite, fais glisser et dépose un autre bloc 
``||Input:lorsque le bouton A est pressé||`` dans l’espace de travail.
_Remarque : Le nouveau bloc deviendra gris._ Après, change le ``||Input:button A||`` au ``||Input:button B||``.
```blocks
let stop_time = 0
let start_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```
## Step 21
Clique sur ``||Variables:Variables||``. Ensuite, fais glisser et dépose le bloc ``||Variables:définir start_time à 0||`` à l’intérieur du bloc
``||Input:lorsque le bouton A est pressé||``.
```blocks
let stop_time = 0
let start_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
})
```
## Step 22
Clique sur ``||Variables:Variables||``. Ensuite, fais glisser et dépose le bloc ``||Variables:définir stop_time à 0||`` 
à l’intérieur du bloc ``||Input:lorsque le bouton B est pressé||``.
```blocks
let stop_time = 0
let start_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
})
```
## Step 23
Clique sur ``||Basic:Base||``. Ensuite, fais glisser et dépose le bloc ``||Basic:montrer nombre||`` sous le bloc
``||Variables:définir stop_time à 0||`` à l’intérieur du bloc ``||Input:lorsque le bouton B est pressé||``.
```blocks
let stop_time = 0
let start_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
basic.showNumber(0)
})
```
## Step 24
Clique sur ``||Math:Maths||``. Ensuite, fais glisser et dépose le bloc
``||Math:Division operator||`` pour remplacer le ``||Basic:0||`` du bloc
``||Basic:montrer nombre||``. Pour ``||Math:Division||`` change le ``||Math:0||``
 droit en ``||Math:1000||``.
```blocks
let stop_time = 0
let start_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
basic.showNumber(0/1000)
})
```
## Step 25
Clique sur ``||Math:Maths||``. Ensuite, fais glisser et dépose le bloc
``||Math:Subtraction operator||`` pour remplacer le ``||Math:0||`` gauche du bloc
``||Math:0 / 1000||``. 
```blocks
let stop_time = 0
let start_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
basic.showNumber((0-0)/1000)
})
```
## Step 26
Clique sur ``||Variables:Variables||``. Ensuite, fais glisser et dépose le ``||Variables:stop_time||`` 
pour remplacer le ``||Math:0||`` gauche. Après, fais glisser et dépose ``||Variables:start_time||``
pour remplacer le ``||Math:0||`` droit.
```blocks
let stop_time = 0
let start_time = 0
let revolutions = 0
let RPM = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = 0
})
input.onButtonPressed(Button.B, function () {
stop_time = 0
basic.showNumber((stop_time - start_time)/1000)
})
```
## Step 27
Clique sur ``||Input:Entrée||`` et ensuite sur ``||Input:...plus||``. Après, Ensuite, 
fais glisser et dépose le bloc ``||Input:temps d'exécution (ms)||`` pour remplacer le
``||0||`` dans ``||Variables:start_time||`` et ``||Variables:stop_time||``
placés en ``||Input:lorsque le bouton A est pressé||`` et ``||Input:lorsque le bouton B est pressé||``
respectivement.
```blocks
let stop_time = 0
let start_time = 0
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(fwdSensors.dial1.fwdPosition())
})
input.onButtonPressed(Button.A, function () {
start_time = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
stop_time = input.runningTime()
basic.showNumber((stop_time - start_time)/1000)
})
```
## Step 28 @showhint
Clique sur ``|Download|`` et teste ton code. Clique sur l’icône de l’ampoule pour voir comment le simulateur montre le fonctionnement des composants.
![dial-servo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-13-wind.gif)

## Step 29 @showdialog
Félicitations pour la réalisation de ton projet Comment les turbines éoliennes capturent  l’énergie cinétique.
## Step 30 @showdialog
Une fois ton projet terminé, reviens à la leçon pour plus de défis et d’extensions.
