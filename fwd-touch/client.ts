namespace fwdSensors {

  //% fixedInstances
  export class FwdTouchClient extends modules.ButtonClient {

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
    fwdHoldDuration(): number { return this.holdDuration() }

    /**
     */
    //% group="Touch"
    //% block="%button pressed"
    fwdIsPressed(): boolean { return this.pressed() }


  }

  //% fixedInstance whenUsed
  export const touch = new FwdTouchClient("touch1")
}
