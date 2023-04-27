namespace fwdSensors {

  export class FwdEduTouchClient extends modules.ButtonClient {

    constructor(role: string) {
      super(role)
    }

    /**
     */
    //% group="Touch"
    //% block="on %button %event"
    fwdOnTouch(ev: jacdac.ButtonEvent, handler: () => void) { this.onEvent(ev, handler) }

    /**
     */
    //% group="Touch"
    //% block="%button hold duration (ms)"
    fwdHoldDuration(): number { this.holdDuration() }

    /**
     */
    //% group="Touch"
    //% block="%button pressed"
    fwdIsPressed(): boolean { return this.pressed() }


  }

}
