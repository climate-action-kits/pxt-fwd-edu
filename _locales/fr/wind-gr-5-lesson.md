# Alimenter l’avenir avec l’énergie éolienne
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
```

## Step 1 @showdialog
Bienvenue au tutoriel de codage Alimenter l’avenir avec l’énergie éolienne.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
Dans ce tutoriel, nous allons coder le composant sélecteur pour faire tourner la turbine éolienne dans le même sens que le sélecteur tourne. Utilise la fonction bouton du sélecteur pour arrêter la turbine éolienne.

## Step 3 @showdialog
Allume la plaque du kit d’Action pour le Climat.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Clique sur les trois points à côté du bouton ``|Download|`` et suivez les étapes pour coupler ton micro:bit.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Ensuite, clique sur le bouton ``|Download|`` pour télécharger la base du projet blanc qui te permettra d’effectuer les simulations.

## Step 6 @showdialog
Voici à quoi devraient ressembler les simulateurs une fois le téléchargement réussi. Tu peux voir le sélecteur, le senseur tactile et les servomoteurs à côté de la pompe.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif)

## Step 7 @showhint
Regarde sous le simulateur micro:bit pour voir la plaque d’Action pour le Climat et les capteurs connectés. Essaye d’activer le sélecteur sur votre projet, le simulateur virtuel y réagira.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 8
Clique sur ``||fwdSensors:Capteurs||``. Ensuite, fait glisser et dépose le bloc
``||fwdSensors:en dial1 tourné par difference||`` dans l’espace de travail.
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
```

## Step 9
Fait clic droit sur le bloc ``||fwdSensors:en dial1 tourné par difference||``  et duplique-le. _Remarque : Le nouveau bloc sera gris._
![greyed out example](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-greyed-out-demo.png)

## Step 10
Change la flèche directionnelle du bloc atténué ``||fwdSensors:en dial1 tourné par difference||``._Remarque : Le bloc atténué deviendra vert._
![dial direction](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-direction-switch.gif)
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 11
Clique sur ``||fwdSensors:Capteurs||`` Ensuite, fait glisser et dépose le bloc
``||fwdSensors:en touch down||`` dans l’espace de travail.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 12
Clique sur ``||fwdMotors:Moteurs||``. Ensuite, fait glisser et dépose le bloc
``||fwdMotors:mettre leftServo to 50 %||`` à l’intérieur du bloc
``||fwdSensors:en dial1 tourné par difference||``.
Après, change ``||fwdMotors:leftServo||`` au ``||fwdMotors:middleServo||``.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 13
Fait clic droit sur le bloc ``||fwdMotors:mettre middleServo to 50 %||`` et duplique-le. Ensuite, fait-le glisser et dépose-le à l’intérieur du deuxième bloc ``||fwdSensors:en dial1 tourné par difference||``.
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

## Step 14
Fait clic sur ``||fwdSensors:Capteurs||``. Ensuite, fait glisser le bloc avec une forme ovale 
``||fwdSensors:dial1 position absolue||`` près du bloc ``||fwdMotors:mettre middleServo 50 %||``. Remplace le ``||fwdMotors:50 %||`` dans le bloc ``||fwdMotors:mettre middleServo 50 %||``.
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

## Step 15
Clique sur ``||fwdSensors:Capteurs||``.
Ensuite, fait glisser le bloc avec une forme ovale ``||fwdSensors:dial1 position absolue||`` près du deuxième  bloc ``||fwdMotors:mettre middleServo 50 %||``. Remplace le ``||fwdMotors:50 %||`` dans le bloc ``||fwdMotors:mettre middleServo 50 %||``.
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

## Step 16
Clique sur ``||fwdMotors:Moteurs||``. Ensuite, fait glisser et dépose le bloc ``||fwdMotors:mettre leftServo 50 %||`` à l'intérieur du bloc ``||fwdSensors:en touch down||``. Change ``||fwdMotors:leftServo||`` au ``||fwdMotors:middleServo||``.
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

## Step 17
Change la vitesse du bloc ``||fwdMotors:mettre middleServo 50 %||`` à l'intérieur du bloc ``||fwdSensors:en touch down||``
en ``||0||``.
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

## Step 18 @showhint
Clique sur ``|Download|`` et teste ton code. Clique sur l’icône de l’ampoule pour voir comment le simulateur montre le fonctionnement des composants.
![dial-middleServo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-middleServo.gif)

## Step 19 @showdialog
Si après d’avoir complété le ``|Download|`` ton projet ne fonctionne pas, regarde l’image et assure-toi que tes composants sont correctement assignés.
![correct-assignment](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/correct-assignment.png)

## Step 20 @showdialog
Si tu as besoin d’aide pour assigner les bons composants à leur simulateurs. Regarde la vidéo.
![final-download](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/final-download.gif)

## Step 21 @showdialog
Félicitations pour la réalisation de ton projet Alimenter l’Avenir avec l’Énergie Éolienne !
## Step 22 @showdialog
Une fois que tu as terminé ton projet, reviens à la leçon pour plus de défis et d’extensions.
