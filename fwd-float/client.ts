namespace fwdSensors {

  //% fixedInstances
  export class FwdFloatClient extends modules.ButtonClient {

    constructor(role: string) {
      super(role)
    }

    /**
     * Code to run when a chosen event occurs
     */
    //% group="Float"
    //% block="on $this raised"
    //% blockId=fwd_float_on_raised
    fwdOnFloatRaised(handler: () => void) { super.onEvent(jacdac.ButtonEvent.Down, handler) }

    /**
     * Code to run when a chosen event occurs
     */
    //% group="Float"
    //% block="on $this lowered"
    //% blockId=fwd_float_on_lowered
    fwdOnFloatLowered(handler: () => void) { super.onEvent(jacdac.ButtonEvent.Up, handler) }

    /**
     * Returns true if the button is currently pressed, otherwise false
     */
    //% group="Float"
    //% block="$this raised"
    //% blockId=fwd_float_is_raised
    fwdIsFloatRaised(): boolean { return this.pressed() }


  }

  //% fixedInstance whenUsed
  export const float = new FwdFloatClient("float1")
}
