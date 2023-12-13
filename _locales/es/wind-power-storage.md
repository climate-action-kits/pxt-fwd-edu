# Almacenamiento de energía para energía eólica.
```package
fwd-edu-breakout=github:climate-action-kits/pxt-fwd-edu/fwd-breakout
Dial=github:climate-action-kits/pxt-fwd-edu
```

## Step 1 @showdialog
Bienvenido al Tutorial de Codificación de Almacenamiento de energía para energía eólica.
![built project](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/project-windturbine-200.png)

## Step 2 @showdialog
En este tutorial de codificación, usaremos las luces LED para indicar el nivel de "carga" que tiene la batería de la turbina eólica en función de la velocidad a la que gira dicha  turbina. Cuanto más rápido gire, mayor será la carga. La turbina eólica debe moverse en la misma dirección en la que se gira el selector y debe detenerse al momento que se presiona el botón. Cuando la turbina eólica no se mueve y, por lo tanto, no genera energía, la batería se considera "muerta" y no debe mostrar ninguna luz.

## Step 3 @showdialog
Enciende la placa del Kit de Acción por el Clima.
![breakout board](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/breakout-turn-on.png)

## Step 4
Da clic en los tres puntos que están al lado del botón ``|Download|`` y da clic en Conectar Dispositivo. Luego, sigue los pasos para emparejar tu @boardname@.
![pair gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/pairmicrobit-280x203.gif)

## Step 5
Después, da clic en el botón ``|Download|`` para descargar el proyecto en blanco lo que te permitirá iniciar las simulaciones.
  
## Step 6 @showdialog
Así es como deberían de verse los simuladores después de realizar la descarga exitosamente. Puedes ver el selector, el sensor táctil y los servomotores junto a la bomba.
![initial-dowload-gif](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/initial-download.gif)

## Step 7
Mira debajo del simulador @boardname@ para ver la placa de Acción por el Clima y los sensores conectados. Intenta girar el selector en tu proyecto, el simulador virtual reaccionará a él.
![wind](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-6-Dial.gif)

## Step 8
Da clic en ``||fwdSensors:Sensores||`` . Luego, arrastra y suelta el bloque
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
Da clic en ``||fwdSensors:Sensores||``. Luego, arrastra y suelta el bloque
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
Da clic en ``||Variables:Variables||`` en y crea una ``||Variables:Variable||``
``||Variables:turbinespeed||``.

## Step 13
Da clic en ``||Variables:Variables||``. Luego, arrastra y suelta el bloque ``||Variables:fijar turbinespeed a 0||``
dentro del bloque ``||Basic:al iniciar||``.
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
Da clic en ``||Variables:Variables||``. Luego, arrastra y suelta el bloque ``||Variables:fijar turbinespeed a 0||``
dentro del bloque ``||fwdSensors:en dial1 girado por difference||``.
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
Da clic en ``||Variables:Variables||``. Luego, arrastra y suelta el bloque ``||Variables:fijar turbinespeed a 0||``
dentro del otro bloque ``||fwdSensors:en dial1 girado por difference||``.
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
Da clic en ``||fwdMotors:Motores||``. Luego, arrastra y suelta el bloque
``||fwdMotors:establecer leftServo 50 %||`` bajo el bloque ``||Variables:fijar turbinespeed a 0||``.
Después, cambia  ``||fwdMotors:leftServo||`` a ``||fwdMotors:middleServo||``.
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
Da clic derecho en el bloque ``||fwdMotors:establecer middleServo 50 %||`` y duplícalo. Luego, arrástralo y suéltalo bajo el otro bloque ``||Variables:fijar turbinespeed a 0||``.
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
Da clic en ``||fwdMotors:Motores||``. Luego, arrastra y suelta el bloque ``||fwdMotors:establecer leftServo 50 %||`` bajo el bloque
``||fwdSensors:en touch down||``.
Cambia ``||fwdMotors:leftServo||`` a ``||fwdMotors:middleServo||``. Cambia ``||fwdMotors:50%||`` a ``||fwdMotors:0%||``
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
Da clic en ``||fwdSensors:Sensores||``.
Luego, arrastra el bloque en forma de óvalo ``||fwdSensors:dial1 posición absoluta||``
cerca del bloque ``||Variables:fijar turbinespeed a 0||`` para reemplazar el ``||Variables:0||`` del bloque ``||Variables:fijar turbinespeed a 0||``.
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
Da clic en ``||fwdSensors:Sensores||``Luego, arrastra el bloque en forma de óvalo ``||fwdSensors:dial1 posición absoluta||``
cerca del otro bloque ``||Variables:fijar turbinespeed a 0||`` para reemplazar el ``||Variables:0||`` del bloque ``||Variables:fijar turbinespeed a 0||``.
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
Da clic en ``||Variables:Variables||``. Luego, arrastra el bloque en forma de óvalo ``||Variables:turbinespeed||``
cerca del bloque ``||fwdMotors:establecer middleServo 50 %||`` para reemplazar el ``||fwdMotors:50||`` del bloque ``||fwdMotors:establecer middleServo 50 %||``.
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
Da clic en ``||Variables:Variables||``
. Luego, arrastra el bloque en forma de óvalo  ``||Variables:turbinespeed||``
cerca del otro bloque ``||fwdMotors:establecer middleServo 50 %||`` para reemplazar el ``||fwdMotors:50||`` del bloque ``||fwdMotors:establecer middleServo 50 %||``.
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
Da clic en ``||Logic:Lógica||`` . Luego, arrastra y suelta el bloque ``||Logic:si verdadero entonces si no||`` bajo el bloque ``||fwdMotors:establecer middleServo||`` ``||Variables:turbinespeed||``.
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
Da clic en ``||Logic:Lógica||``. Luego, arrastra y suelta el bloque ``||Logic:si verdadero entonces si no||`` bajo el otro bloque ``||fwdMotors:establecer middleServo||`` ``||Variables:turbinespeed||``.
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
Da clic en ``||fwdSensors:Sensores||`` . Luego, arrastra y suelta el bloque ``||fwdSensors:establecer todos los LEDs de ledRing a||`` bajo el bloque ``||Logic:si verdadero entonces si no||``. Cambia el ``||fwdSensors:LED||``
a color ``||fwdSensors:verde||``.
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
Da clic en ``||fwdSensors:Sensores||``. Luego, arrastra y suelta el bloque ``||fwdSensors:establecer todos los LEDs de ledRing a||`` bajo el otro bloque ``||Logic:si verdadero entonces si no||``. Cambia el ``||fwdSensors:LED||``
a color ``||fwdSensors:verde||``.
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
Da clic en ``||fwdSensors:Sensores||`` . Luego, arrastra y suelta el bloque ``||fwdSensors:establecer todos los LEDs de ledRing a||`` bajo ambas condiciones ``||Logic:si no||``. Cambia el color del ``||fwdSensors:LED||`` a amarillo.
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
Da clic en ``||Logic:Lógica||`` . Luego, arrastra y suelta el bloque ``||Logic:Comparación <||`` ``||Logic:0 < 0||``
para reemplazar la condición ``||Logic:verdadero||`` en ambos bloques ``||Logic:si verdadero entonces si no||``.
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
Da clic en ``||Variables:Variables||``. Luego, arrastra el bloque en forma de óvalo ``||Variables:turbinespeed||``
para reemplazar el ``||Logic:0||`` en el lado izquierdo de ambos bloques ``||Logic:Comparación||``.
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
Da clic en ``||Logic:<||``. Luego, cámbialo a ``||Logic:>||`` en el bloque
``||fwdSensors:en dial1 girado por CW||``. Cambia el ``||Logic:0||`` a ``||Logic:80||``.
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
Cambia el ``||Logic:0||`` a
``||Logic: -80||`` en el bloque ``||Logic:<||`` que se encuentra bajo el bloque ``||fwdSensors:en dial1 girado por CCW||``.
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
Da clic en ``||fwdSensors:Sensores||``. Luego, arrastra y suelta el bloque ``||fwdSensors:establecer todos los LEDs de ledRing a||`` dentro del bloque ``||fwdSensors:en touch down||`` que se encuentra bajo el bloque ``||fwdMotors:establecer middleServo 0 %||``.
Cambia el ``||fwdSensors:LED||`` a color ``||control:obsidiana||``.
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
Da clic en ``|Download|``y prueba tu código. Da clic en el icono de la bombilla para ver cómo el simulador muestra el funcionamiento de los componentes.
![dial-servo](https://climate-action-kits.github.io/pxt-fwd-edu/tutorial-assets/simulator-13-wind.gif)

## Step 34 @showdialog
¡Felicitaciones por completar tu Proyecto de Almacenamiento de Energía para Energía Eólica!

## Step 35 @showdialog
Una vez que hayas completado tu proyecto, vuelve a la lección para obtener más desafíos y extensiones.
