# Power Storage for Wind Energy
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
```

## Step 1 @showdialog
Bienvenue dans le tutoriel de codage pour Stockage d’énergie pour l’énergie éolienne.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
Dans ce tutoriel de codage, nous utiliserons les lumières DEL pour indiquer le niveau de « charge » de la batterie de l'éolienne en fonction de la vitesse de rotation de l'éolienne. Plus elle tourne vite, plus la charge est élevée. L'éolienne doit tourner dans le même sens que le cadran, et utiliser le bouton pour s'arrêter. Lorsque l'éolienne ne bouge pas et ne produit donc pas d'électricité, la batterie est considérée comme "à plat" et ne doit pas s'allumer.

## Step 3 @showdialog
Allume la trousse d’action climatique.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4
Clique sur les trois points à côté du bouton ``|Download|``et puis, clique sur Connecter l’appareil. Ensuite, suis les étapes pour coupler ton micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5
Ensuite, clique sur le bouton ``|Download|`` pour télécharger le projet vierge afin de  démarrer les simulateurs.

## Step 6 @showdialog
Voici à quoi devraient ressembler les simulateurs après un téléchargement réussi.  Tu peux voir le cadran, le capteur tactile et les servomoteurs à côté de la pompe.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif)

## Step 7
Regarde sous le simulateur micro:bit pour voir la carte de la trousse d’action climatique et les capteurs connectés.  Essaie de tourner le cadran de ton projet, le simulateur virtuel y réagira.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 8
Clique sur ``||fwdSensors:Sensors||`` nsuite, fait glisser et dépose le bloc
``||fwdSensors:on dial1 turned difference||`` dans l’espace de travail.
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
```

## Step 9
Clique droit sur le bloc ``||fwdSensors:on dial1 turned difference||`` et duplique-le. _Remarque : Le nouveau bloc sera gris._
![greyed out example](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-greyed-out-demo.png)

## Step 10
Modifie la flèche de direction du bloc grisé ``||fwdSensors:on dial1 turned difference||``. _Remarque : le bloc en gris devient vert._
![dial direction](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-direction-switch.gif)
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 11
Clique sur ``||fwdSensors:Sensors||``.Ensuite, fait glisser et dépose le bloc
``||fwdSensors:on touch down||`` dans l’espace de travail.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 12
Clique sur ``||Variables:Variables||`` and make a ``||Variables:Variable||``
``||Variables:turbinespeed||``.

## Step 13
Clique sur ``||Variables:Variables||``  Ensuite, fait glisser et imbrique le bloc ``||Variables:set turbinespeed to 0||``
à l’intérieur du bloc``||Basic:on start||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
})
turbinespeed = 0
```

## Step 14
Clique sur ``||Variables:Variables||``. Ensuite, fait glisser et imbrique le bloc ``||Variables:set turbinespeed to 0||``
à l’intérieur du bloc ``||fwdSensors:on dial1 turned difference||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 15
Clique sur ``||Variables:Variables||`` . Ensuite, fait glisser et imbrique le bloc ``||Variables:set turbinespeed to 0||`` à l’intérieur de l’autre bloc ``||fwdSensors:on dial1 turned difference||
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 16
Clique sur ``||fwdMotors:Motors||``. Ensuite, fait glisser et dépose le bloc
``||fwdMotors:set leftServo to 50 %||`` sous le bloc
``||Variables:set turbinespeed to 0||``. Après, change ``||fwdMotors:leftServo||`` au ``||fwdMotors:middleServo||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 17
Clique droite sur le bloc ``||fwdMotors:set middleServo to 50 %||`` et duplique-le. Ensuite, fait-le glisser et dépose-le sous l’autre bloc ``||Variables:set turbinespeed to 0||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 18
Clique sur ``||fwdMotors:Motors||`` . Ensuite, fait glisser et dépose le bloc ``||fwdMotors:set leftServo to 50 %||`` sous le bloc
``||fwdSensors:on touch down||``.
Change ``||fwdMotors:leftServo||`` au ``||fwdMotors:middleServo||``. Change ``||fwdMotors:50%||`` en ``||fwdMotors:0%||``
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 19
Clique sur ``||fwdSensors:Sensors||``.
. Ensuite, fait glisser le bloc avec une forme ovale ``||fwdSensors:dial1 absolute position||``
près du bloc ``||Variables:set turbinespeed to 0||`` pour remplacer le ``||Variables:0||`` dans bloque ``||Variables:set turbinespeed to 0||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = 0
    fwdMotors.middleServo.fwdSetSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 20
Clique sur ``||fwdSensors:Sensors||``.
. Ensuite, fait glisser le bloc avec une forme ovale ``||fwdSensors:dial1 absolute position||``
près de l’autre bloc ``||Variables:set turbinespeed to 0||`` pour remplacer le ``||Variables:0||`` dans bloque ``||Variables:set turbinespeed to 0||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 21
Clique sur ``||Variables:Variables||``. Ensuite, fait glisser le bloc avec une forme ovale ``||Variables:turbinespeed||``
près du bloc ``||fwdMotors:set middleServo to 50 %||`` pour remplacer le ``||fwdMotors:50||`` dans le bloc ``||fwdMotors:set middleServo to 50 %||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(50)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 22
Clique sur ``||Variables:Variables||``. Ensuite, fait glisser le bloc avec une forme ovale ``||Variables:turbinespeed||``
près de l’autre bloc ``||fwdMotors:set middleServo to 50 %||`` pour remplacer le ``||fwdMotors:50||`` dans le bloc ``||fwdMotors:set middleServo to 50 %||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 23
Clique sur ``||Logic:Logic||``. Ensuite, fait glisser et dépose le bloc ``||Logic:if true then else||`` sous le bloc ``||fwdMotors:set middleServo||`` ``||Variables:turbinespeed||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
    }
    else{
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 24
Clique sur ``||Logic:Logic||``. Ensuite, fait glisser et dépose le bloc ``||Logic:if true then else||`` sous l’autre bloc ``||fwdMotors:set middleServo||`` ``||Variables:turbinespeed||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
    }
    else{
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (true){
    }
    else{
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 25
Clique sur ``||fwdSensors:Sensors||``. Ensuite, fait glisser et dépose le bloc ``||fwdSensors:set all ledRing LEDs to||`` sous le bloc ``||Logic:If true then else||`` Change le ``||fwdSensors:LED||`` en couleur ``||fwdSensors:Green||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (true){
    }
    else{
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 26
Clique sur ``||fwdSensors:Sensors||`` . Ensuite, fait glisser et dépose le bloc ``||fwdSensors:set all ledRing LEDs to||`` sous l’autre bloc ``||Logic:If true then else||``. Change le ``||fwdSensors:LED||`` en couleur ``||fwdSensors:Green||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (true){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 27
Clique sur ``||fwdSensors:Sensors||``. Ensuite, fait glisser et dépose le bloc ``||fwdSensors:set all ledRing LEDs to||`` sous les deux conditions ``||Logic:else||`` condition. Change la couleur du  ``||fwdSensors:LED||`` en jaune.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (true){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (true){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 28
Clique sur ``||Logic:Logic||``. Ensuite, fait glisser et imbrique le bloc ``||Logic:Comparison <||`` ``||Logic:0 < 0||``
pour remplacer la condition ``||Logic:true||`` dans le deux blocs ``||Logic:if true then else||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (0<0){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (0<0){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 29
Clique sur ``||Variables:Variables||``. Ensuite, fait glisser et dépose le bloc avec une forme ovale ``||Variables:turbinespeed||``
pour remplacer le ``||Logic:0||`` dans le côté gauche des deux blocs ``||Logic:Comparison||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed<0){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (turbinespeed<0){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 30
Clique sur ``||Logic:<||``. Ensuite, modifie-le au ``||Logic:>||`` dans le bloc
``||fwdSensors:on dial1 turned by CW||``. Modifie le ``||Logic:0||`` en
``||Logic:80||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed>80){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (turbinespeed<0){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 31
Change le ``||Logic:0||`` à
``||Logic: -80||`` dans le bloc ``||Logic:<||`` qui se trouve sous le bloc
``||fwdSensors:on dial1 turned by CCW||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed>80){
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
     if (turbinespeed<-80){
     fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    }
    else{
    fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 32
Clique sur ``||fwdSensors:Sensors||``. Ensuite, fait glisser et imbrique le bloc ``||fwdSensors:set all ledRing to||`` dans le bloc ``||fwdSensors:on touch down||`` qui se trouve sous le bloc ``||fwdMotors:set middleServo to 0%||``.
Change le ``||fwdSensors:LED||`` en couleur ``||control:Black||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed <= -80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.middleServo.fwdSetSpeed(turbinespeed)
    if (turbinespeed >= 80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
```

## Step 33
Clique sur ``|Download|`` et teste ton code. Clique sur l’icône de l’ampoule pour voir comment le simulateur montre le fonctionnement des composants.
![dial-servo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-13-wind.gif)

## Step 34 @showdialog
Félicitations pour la réalisation de ton projet Stockage d’Énergie Éolienne !

## Step 35 @showdialog
Une fois ton projet terminé, reviens à la leçon pour plus de défis et d’extensions.
