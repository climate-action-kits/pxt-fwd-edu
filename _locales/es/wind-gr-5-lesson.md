# Impulsando el Futuro con Energía Eólica
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
```

## Step 1 @showdialog
Bienvenido al Tutorial de Codificación de Impulsando el Futuro con Energía Eólica.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
En este tutorial, codificaremos el componente selector para girar la turbina eólica en la misma dirección en la que este se gira. Utiliza la función de botón del selector para detener la turbina eólica.

## Step 3 @showdialog
Enciende la placa del Kit de Acción por el Clima.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4 @showhint
Da clic en los tres puntos que están al lado del botón ``|Download|`` y da clic en Conectar Dispositivo. Luego, sigue los pasos para emparejar tu @boardname@.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5 @showhint
Después, da clic en el botón ``|Download|`` para descargar la base del proyecto en blanco lo que te permitirá realizar las simulaciones.

## Step 6 @showdialog
Así es como deberían de verse los simuladores después de realizar la descarga exitosa. Puedes ver el selector, el sensor táctil y los servomotores junto a la bomba.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif)

## Step 7 @showhint
Mira debajo del simulador @boardname@ para ver la placa de Acción por el Clima y los sensores conectados. Intenta girar el selector en tu proyecto, el simulador virtual reaccionará a él.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 8
Da clic en ``||fwdSensors:Sensores||``. Luego, arrastra y suelta el bloque
``||fwdSensors:en dial1 girado por difference||`` en el espacio de trabajo.
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
```

## Step 9
Da clic derecho en el bloque ``||fwdSensors:en dial1 girado por difference||`` y duplícalo. _Nota: El nuevo bloque será de color gris._
![greyed out example](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-greyed-out-demo.png)

## Step 10
Cambia la flecha de dirección del bloque ``||fwdSensors:en dial1 girado por difference||`` atenuado . _Nota: El bloque atenuado se volverá verde._
![dial direction](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-direction-switch.gif)
```blocks
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 11
Da clic en  ``||fwdSensors:Sensores||``. Luego, arrastra y suelta el bloque
``||fwdSensors:en touch down||`` en el espacio de trabajo.
```blocks
fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    })
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    })
```

## Step 12
Da clic en ``||fwdMotors:Motores||`` . Luego, arrastra y suelta el bloque
``||fwdMotors:establecer leftServo a 50 %||`` dentro del bloque
``||fwdSensors:en dial1 girado por difference||``.
Después, cambia ``||fwdMotors:leftServo||`` a ``||fwdMotors:middleServo||``.
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
Da clic derecho en el bloque ``||fwdMotors:establecer middleServo to 50 %||`` y duplícalo. Luego, arrástralo y suéltalo dentro del segundo bloque  ``||fwdSensors:en dial1 girado por difference||``.
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
Da clic en ``||fwdSensors:Sensores||``. Luego, arrastra el bloque en forma de óvalo ``||fwdSensors:dial1 posición absoluta||`` cerca del bloque ``||fwdMotors:establecer middleServo 50 %||``. Reemplaza el ``||fwdMotors:50 %||`` del bloque ``||fwdMotors:establecer middleServo 50 %||``.
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
Da clic en ``||fwdSensors:Sensores||``
. Luego, arrastra el bloque en forma de óvalo ``||fwdSensors:dial1 posición absoluta||`` cerca del segundo bloque
``||fwdMotors:establecer middleServo 50 %||``. Reemplaza el ``||fwdMotors:50 %||`` del bloque ``||fwdMotors:establecer middleServo 50 %||``.
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
Da clic en ``||fwdMotors:Motores||``. Luego, arrastra y suelta el bloque ``||fwdMotors:establecer leftServo 50 %||`` dentro del bloque ``||fwdSensors:en touch down||``. Cambia ``||fwdMotors:leftServo||`` a ``||fwdMotors:middleServo||``.
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
Cambia la velocidad del bloque ``||fwdMotors:establecer middleServo 50 %||`` dentro del bloque ``||fwdSensors:en touch down||``
a ``||0||``.
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
Da clic en ``|Download|`` y prueba tu código. Da clic en el icono de la bombilla para ver cómo el simulador muestra el funcionamiento de los componentes.
![dial-middleServo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/dial-middleServo.gif)

## Step 19 @showdialog
Si después de ``|Download|`` tu proyecto no funciona, consulta la imagen y asegúrate  de que tus componentes estén asignados correctamente.
![correct-assignment](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/correct-assignment.png)

## Step 20 @showdialog
Si necesitas ayuda para asignar los componentes correctos a sus simuladores. Mira el video.
![final-download](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/final-download.gif)

## Step 21 @showdialog
¡Felicitaciones por completar tu proyecto Alimentando el futuro con Energía Eólica!

## Step 22 @showdialog
Una vez que hayas completado tu proyecto, vuelve a la lección para obtener más desafíos y extensiones.
