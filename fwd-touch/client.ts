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
    //% blockId=fwd_touch_on_touch
    fwdOnTouch(ev: jacdac.ButtonEvent, handler: () => void) { this.onEvent(ev, handler) }

    /**
     */
    //% group="Touch"
    //% block="%button hold duration (ms)"
    //% blockId=fwd_touch_hold_duration
    fwdHoldDuration(): number { return this.holdDuration() }

    /**
     */
    //% group="Touch"
    //% block="%button pressed"
    //% blockId=fwd_touch_is_pressed
    fwdIsPressed(): boolean { return this.pressed() }


  }

  //% fixedInstance whenUsed
  export const touch = new FwdTouchClient("touch1")
}