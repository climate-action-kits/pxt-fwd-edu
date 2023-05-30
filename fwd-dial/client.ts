namespace fwdSensors {
  export const enum dialDirection {
    //% block="↻"
    cw,
    //% block="↺"
    ccw
  }

  /**
   * Wrapper for FWD Edu rotary encoder, aka "Dial"
   **/
  //% fixedInstances
  export class FwdDialClient extends modules.RotaryEncoderClient {
    private _cwAction: (delta: number) => void
    private _ccwAction: (delta: number) => void

    constructor(role: string) {
      super(role)

      this._cwAction = (_) => {}
      this._ccwAction = (_) => {}

      this.onReadingChangedBy(1, (delta: number) => {
        if (delta < 0) {
          this._cwAction(delta)
        } else {
          this._ccwAction(delta)
        }
      })

    }
    
    //% group="Dial"
    //% block="$this clicks per full turn"
    //% rotaryencoder.defl=dial1
    //% blockId=fwd_dial_get_clicks_per_turn
    fwdClicksPerTurn(): number { return this.clicksPerTurn() }
    
    //% group="Dial"
    //% block="$this absolute position"
    //% blockId=fwd_dial_get_position
    fwdPosition(): number { return this.position() }

    /**
     * Run code when the dial is turned in a specific direction
     * @param delta
     */
    //% draggableParameters="reporter"
    //% group="Dial"
    //% block="on $this turned || by $direction"
    //% blockId=fwd_dial_on_dial_turned
    //% weight=98
    fwdOnDialTurned(direction: dialDirection, handler: (difference: number) => void): void {
      if (direction === dialDirection.cw) {
        this._cwAction = handler
      } else {
        this._ccwAction = handler
      }
    }

    
  }

  //% fixedInstance whenUsed weight=1 block="dial1"
  export const dial1 = new FwdDialClient("dial1")
}
